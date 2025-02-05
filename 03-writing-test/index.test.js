// index.test.js

import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum adds two numbers correctly', () => {
    assert.strictEqual(sum(1, 2), 3);
    assert.strictEqual(sum(-1, 1), 0);
    assert.strictEqual(sum(0, 0), 0);
    assert.strictEqual(sum(-1, -1), -2);
    assert.strictEqual(sum(1.5, 2.5), 4);
});