import config from '../index.js';
import test from 'node:test';
import assert from 'node:assert';

test('stylelintConfig', async () => {
	assert.ok(typeof config === 'object');
});
