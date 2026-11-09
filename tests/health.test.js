const test = require('node:test');
const assert = require('node:assert');
const { health } = require('../src/index.js');

test('health check reports ok', () => {
  assert.strictEqual(health().status, 'ok');
});
