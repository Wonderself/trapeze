// Real fetch: headers arrive, but JSON body never finishes. Both read attempts
// must remain inside the existing 3.5-second timeout and fall back silently.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { fetchWorldTop, netSetConfig } from '../src/net.js';
let requests = 0;
const server = createServer((request, response) => {
  requests++;
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write('[');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
try {
  netSetConfig(`http://127.0.0.1:${server.address().port}`, 'test-only');
  const started = performance.now();
  const result = await Promise.race([
    fetchWorldTop(),
    new Promise((_, reject) => { const timer = setTimeout(() => reject(new Error('stalled JSON exceeded the read timeout/retry budget')), 11000); timer.unref(); }),
  ]);
  assert.equal(result, null);
  assert.equal(requests, 2);
  assert.ok(performance.now() - started < 10500);
  console.log('PASS stalled leaderboard JSON is aborted on both attempts and returns LOCAL fallback');
} finally {
  netSetConfig('', '');
  server.closeAllConnections();
  await new Promise(resolve => server.close(resolve));
}
