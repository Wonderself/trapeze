// Runs the production persistence readers and menu rendering without WebGL.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const section = (start, end) => {
  const from = source.indexOf(start);
  const to = source.indexOf(end, from);
  assert.ok(from >= 0 && to > from, `source section: ${start}`);
  return source.slice(from, to);
};
const readers = section('/* ── persistence', 'let REC = loadRec();') +
  section('const dailySeed =', 'function saveDaily(') +
  section('function loadBoard()', 'let BOARD = loadBoard();');
const rendering = section('function refreshBest()', 'function refreshMute()') +
  section('function renderBoard(', 'function refreshBoard()') +
  section('function refreshDaily()', 'function enterMenu()');
const element = () => ({ innerHTML: '', textContent: '', classList: { add() {}, remove() {} }, querySelectorAll: () => [] });
function read(data = {}, blocked = false) {
  const context = vm.createContext({
    localStorage: { getItem(key) { if (blocked) throw new Error('blocked'); return data[key] ?? null; } },
    ui: { best: element(), dailyBest: element() },
    WORLD_ICON: ['C', 'J', 'B', 'S'], MEDAL_ICON: ['.', 'B', 'S', 'G', 'D'],
    netConfigured: () => false,
  });
  vm.runInContext(readers + '\nlet REC = loadRec(); let BOARD = loadBoard();\n' + rendering, context);
  vm.runInContext('refreshBest(); renderBoard(ui.best, -1); refreshDaily();', context);
  return JSON.parse(vm.runInContext('JSON.stringify({ rec: REC, board: BOARD, daily: loadDaily() })', context));
}
const seed = vm.runInNewContext('const d = new Date(); d.getUTCFullYear()*10000+(d.getUTCMonth()+1)*100+d.getUTCDate()');
let passed = 0;
const check = (name, fn) => { fn(); passed++; console.log(`PASS ${name}`); };
check('valid records and legacy initials survive unchanged', () => {
  const board = [{ i: 'ACE', s: 1250, m: 3, l: 1 }, { i: 'SUPER CHAMPION', s: 500, m: 1, l: 0 }];
  const result = read({ ts3d_high: '1250', ts3d_combo: '12', ts3d_medals: '[1,2,3,4]', ts3d_mute: '1', ts3d_reducefx: '1', ts3d_board: JSON.stringify(board), ts3d_daily: JSON.stringify({ d: seed, s: 700 }) });
  assert.deepEqual(result.rec, { high: 1250, combo: 12, medals: [1,2,3,4], mute: true, reduceFx: true });
  assert.deepEqual(result.board, board);
  assert.deepEqual(result.daily, { d: seed, s: 700 });
});
check('null and object medal saves cannot crash the menu', () => {
  for (const medals of ['null', '{}', '"bad"']) assert.deepEqual(read({ ts3d_high: '10', ts3d_medals: medals }).rec.medals, [0,0,0,0]);
});
check('partial medals retain valid worlds and reject invalid tiers', () => {
  assert.deepEqual(read({ ts3d_medals: '[3,null,-1,99,4]' }).rec.medals, [3,0,0,0]);
});
check('malformed leaderboard rows do not discard valid saved scores', () => {
  const good = { i: 'ACE', s: 1250, m: 3, l: 1 };
  assert.deepEqual(read({ ts3d_board: JSON.stringify([null, {}, {i:'BAD'}, {i:'BAD',s:'12'}, good]) }).board, [good]);
});
check('valid score survives missing optional medal and lap fields', () => {
  assert.deepEqual(read({ ts3d_board: '[{"i":"ACE","s":1250}]' }).board, [{ i: 'ACE', s: 1250, m: 0, l: 0 }]);
});
check('saved leaderboard remains capped at ten entries', () => {
  const rows = Array.from({ length: 12 }, (_, i) => ({ i: 'ACE', s: 1200-i, m: 0, l: 0 }));
  assert.deepEqual(read({ ts3d_board: JSON.stringify(rows) }).board, rows.slice(0, 10));
});
check('nonfinite or negative numeric records use safe defaults', () => {
  const rec = read({ ts3d_high: 'Infinity', ts3d_combo: '-1' }).rec;
  assert.equal(rec.high, 0); assert.equal(rec.combo, 0);
});
check('daily record without a usable score cannot crash the menu', () => {
  for (const s of [undefined, null, 'oops', -1]) assert.equal(read({ ts3d_daily: JSON.stringify({ d: seed, s }) }).daily, null);
});
check('expired daily records are ignored', () => assert.equal(read({ ts3d_daily: '{"d":20000101,"s":500}' }).daily, null));
check('invalid JSON and unavailable storage remain playable', () => {
  for (const result of [read({ ts3d_medals: '{', ts3d_board: '{', ts3d_daily: '{' }), read({}, true)]) {
    assert.deepEqual(result.rec.medals, [0,0,0,0]); assert.deepEqual(result.board, []); assert.equal(result.daily, null);
  }
});
console.log(`${passed} storage/menu checks passed`);
