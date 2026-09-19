import path from 'node:path';
import { launchChromium, startStaticServer } from './browser_helpers.mjs';

const root = path.resolve(process.argv[2] || '.');
const server = await startStaticServer(root);
const browser = await launchChromium();
const errors = [];

async function openGame(route, viewport, touch) {
  const context = await browser.newContext({ viewport, isMobile: touch, hasTouch: touch });
  await context.addInitScript(() => {
    localStorage.setItem('trapeze.v2.save', JSON.stringify({ schema: 1, lang: 'fr' }));
    const records = [];
    Object.defineProperty(window, '__renderedText', { value: records });
    const original = CanvasRenderingContext2D.prototype.fillText;
    CanvasRenderingContext2D.prototype.fillText = function (value, ...args) {
      records.push(String(value));
      if (records.length > 1000) records.splice(0, records.length - 500);
      return original.call(this, value, ...args);
    };
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(`${route} ${viewport.width}: ${error.message}`));
  await page.goto(`${server.origin}${route}`, { waitUntil: 'load' });
  await page.waitForTimeout(400);
  return { context, page };
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

try {
  const routes = [
    { route: '/trapeze-stars-v1.html', start: 'startGame()', idle: 'P.x', play: 'hasPlayedInput' },
    { route: '/trapeze-stars-v2.html', start: 'startRun()', idle: 'P.z', play: 'hasPlayedInput' },
  ];
  const desktop = [];
  for (const game of routes) {
    const opened = await openGame(game.route, { width: 1280, height: 720 }, false);
    const entry = { ...game, ...opened };
    desktop.push(entry);
    const menu = await opened.page.evaluate(() => ({
      lang: document.documentElement.lang,
      text: window.__renderedText.join(' | '),
      link: document.querySelector('[data-versions-link]')?.textContent,
      controls: document.querySelector('#ctrl, #pad') && getComputedStyle(document.querySelector('#ctrl, #pad')).display,
    }));
    assert(menu.lang === 'en', `${game.route}: document language ${menu.lang}`);
    assert(menu.link?.includes('All versions'), `${game.route}: missing English return link`);
    assert(menu.controls === 'none', `${game.route}: touch pad shown on desktop menu`);
    assert(/MOVE/.test(menu.text) && /PAUSE/.test(menu.text), `${game.route}: missing desktop start controls`);
    await opened.page.evaluate(game.start);
    const before = await opened.page.evaluate(`({ position: ${game.idle}, lives, score, active: ${game.play} })`);
    assert(!before.active, `${game.route}: run active before first gameplay command`);
    entry.before = before;
  }

  // Real elapsed time, not a synthetic frame count: unattended games must not
  // travel, fail or repeat while the demo is left open.
  await new Promise(resolve => setTimeout(resolve, 15_000));
  for (const game of desktop) {
    const after = await game.page.evaluate(`({ position: ${game.idle}, lives, score, active: ${game.play} })`);
    assert(after.position === game.before.position && after.lives === game.before.lives && after.score === game.before.score && !after.active,
      `${game.route}: unattended state changed after 15 seconds: ${JSON.stringify({ before: game.before, after })}`);
    await game.page.evaluate('togglePause()');
    await game.page.waitForTimeout(150);
    const pauseText = await game.page.evaluate(() => window.__renderedText.join(' | '));
    assert(/PAUSED/.test(pauseText) && /MOVE/.test(pauseText) && /RELEASE/.test(pauseText),
      `${game.route}: pause controls missing`);
    await game.page.keyboard.press('Space');
    await game.page.waitForTimeout(80);
    const resumed = await game.page.evaluate(() => ({ classic: typeof paused !== 'undefined' ? paused : false, deluxe: gs }));
    assert(game.route.includes('v1') ? resumed.classic === false : resumed.deluxe === 'play',
      `${game.route}: Space did not resume from pause`);
    const xBefore = await game.page.evaluate(() => P.x);
    await game.page.keyboard.down('ArrowRight');
    await game.page.waitForTimeout(250);
    await game.page.keyboard.up('ArrowRight');
    const xAfter = await game.page.evaluate(() => P.x);
    assert(xAfter > xBefore, `${game.route}: right-arrow did not move the player (${xBefore} -> ${xAfter})`);
    await game.page.evaluate(game.route.includes('v1') ? 'handleSpace()' : 'pressAction()');
    await game.page.waitForTimeout(250);
    const autoPaused = await game.page.evaluate(game.route.includes('v1')
      ? 'lastGameplayInputAt=Date.now()-IDLE_PAUSE_MS-20;loop();paused'
      : "lastGameplayInputAt=Date.now()-IDLE_PAUSE_MS-20;P.jumpBuf=0;P.trickBuf=0;step();gs==='pause'");
    assert(autoPaused, `${game.route}: gameplay did not auto-pause after inactivity`);
    await game.page.evaluate('togglePause()');
    const heldSafe = await game.page.evaluate(game.route.includes('v1')
      ? "K['ArrowRight']=true;lastGameplayInputAt=Date.now()-IDLE_PAUSE_MS-20;loop();K['ArrowRight']=false;!paused"
      : "KEY['arrowright']=true;lastGameplayInputAt=Date.now()-IDLE_PAUSE_MS-20;step();KEY['arrowright']=false;gs==='play'");
    assert(heldSafe, `${game.route}: held movement unexpectedly caused idle pause`);
    await game.context.close();
  }

  for (const viewport of [
    { width: 320, height: 568 },
    { width: 390, height: 844 },
    { width: 844, height: 390 },
  ]) {
    for (const game of routes) {
      const { context, page } = await openGame(game.route, viewport, true);
      const menu = await page.evaluate(() => ({
        text: window.__renderedText.join(' | '),
        rotate: document.querySelector('#rotate')?.textContent,
        pad: getComputedStyle(document.querySelector('#ctrl, #pad')).display,
      }));
      assert(!/[À-ÿ\u0590-\u05ff]/.test(menu.rotate || ''), `${game.route}: non-English rotation hint`);
      assert(/MOVE/.test(menu.text) && /PAUSE/.test(menu.text), `${game.route} ${viewport.width}: missing touch start controls`);
      assert(menu.pad === 'none', `${game.route} ${viewport.width}: touch controls obscure the menu`);
      await page.evaluate(game.start);
      await page.waitForTimeout(200);
      const startState = await page.evaluate(() => ({
        pad: getComputedStyle(document.querySelector('#ctrl, #pad')).display,
        rotate: document.querySelector('#rotate')?.classList.contains('on'),
        paused: typeof paused !== 'undefined' ? paused : gs === 'pause',
      }));
      assert(startState.pad === 'none' ? startState.rotate && startState.paused : !startState.paused,
        `${game.route} ${viewport.width}: touch pad does not match playable state: ${JSON.stringify(startState)}`);
      if (!startState.paused) await page.evaluate('togglePause()');
      await page.waitForTimeout(150);
      const pauseText = await page.evaluate(() => window.__renderedText.join(' | '));
      assert(/PAUSED/.test(pauseText) && /MOVE/.test(pauseText), `${game.route} ${viewport.width}: missing touch pause controls`);
      const padWhilePaused = await page.evaluate(() => getComputedStyle(document.querySelector('#ctrl, #pad')).display);
      if (game.route.includes('v1')) assert(padWhilePaused === 'none', `${game.route} ${viewport.width}: touch controls obscure pause instructions`);
      await context.close();
    }
  }
} finally {
  await browser.close();
  await server.close();
}

if (errors.length) {
  errors.forEach(error => console.error(`FAIL ${error}`));
  process.exitCode = 1;
} else {
  console.log('PASS Classic/Deluxe: English start and pause guides, 15-second idle, desktop and 3 touch viewports');
}
