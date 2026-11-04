// Focused regressions for production controller polling and UTC daily records.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const section = (start, end) => {
  const from = source.indexOf(start), to = source.indexOf(end, from);
  assert.ok(from >= 0 && to > from, `source section: ${start}`);
  return source.slice(from, to);
};
const element = () => ({ textContent: '', style: {}, classList: { add() {}, remove() {} }, setAttribute() {}, focus() {} });
function disconnect(sources) {
  const context = vm.createContext({
    navigator: { getGamepads: () => [] },
    G: { mode: 'playing', attract: false, state: 'swing', holding: true, armed: true },
    heldInputs: new Set(sources), activePointerId: null, spaceControlHeld: false,
    gpPrevA: true, gpActive: true, updateGpBadge() {},
    ui: { pauseTitle: element(), pause: element(), pauseBtn: element(), timingCue: element() },
    tapBtn: element(), $: () => element(),
  });
  vm.runInContext(section('function clearHeldInputs()', '/* ══════════════ MENU PODIUM') +
    section('function pauseGame(', 'function resumeGame(') +
    section('function pollGamepad()', "addEventListener('gamepadconnected'"), context);
  vm.runInContext('pollGamepad();', context);
  return context;
}
let context = disconnect(['gamepad']);
assert.equal(context.G.mode, 'paused');
assert.equal(context.G.state, 'swing');
assert.equal(context.G.holding, false);
assert.equal(context.G.armed, false);
assert.deepEqual([...context.heldInputs], []);
console.log('PASS unplugging the sole grip device pauses without releasing the bar');
for (const other of ['space', 'pointer']) {
  context = disconnect(['gamepad', other]);
  assert.equal(context.G.mode, 'playing');
  assert.equal(context.G.holding, true);
  assert.deepEqual([...context.heldInputs], [other]);
}
console.log('PASS another held device retains grip when the gamepad disappears');

const clock = { now: Date.parse('2026-11-02T23:59:59Z') };
class ClockDate extends Date { constructor(...args) { super(...(args.length ? args : [clock.now])); } }
const data = new Map();
context = vm.createContext({ Date: ClockDate, savedCount: v => Math.floor(v), localStorage: {
  getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value),
} });
vm.runInContext(section('const dailySeed =', '/* ── accessibility'), context);
const runDay = vm.runInContext('dailySeed()', context);
vm.runInContext('saveDaily(100, dailySeed())', context);
assert.deepEqual(JSON.parse(data.get('ts3d_daily')), { d: 20261102, s: 100 });
clock.now += 2000;
data.set('ts3d_daily', JSON.stringify({ d: 20261103, s: 300 }));
context.runDay = runDay;
vm.runInContext('saveDaily(900, runDay)', context);
assert.deepEqual(JSON.parse(data.get('ts3d_daily')), { d: 20261103, s: 300 });
vm.runInContext('saveDaily(500, dailySeed())', context);
assert.deepEqual(JSON.parse(data.get('ts3d_daily')), { d: 20261103, s: 500 });
console.log('PASS a run crossing UTC midnight cannot overwrite the next daily challenge record');
console.log('3 controller/daily regression checks passed');
