// index.test.js

import { test } from 'node:test';
import sum from './index.js';
import assert from 'node:assert';

// Menguji penjumlahan dua angka positif
test('sum adds two positive numbers correctly', () => {
    assert.strictEqual(sum(1, 2), 3);
});

// Menguji kasus di mana salah satu argumen negatif
test('sum returns 0 when one argument is negative', () => {
    assert.strictEqual(sum(-1, 2), 0);
    assert.strictEqual(sum(1, -2), 0);
});

// Menguji kasus di mana kedua argumen negatif
test('sum returns 0 when both arguments are negative', () => {
    assert.strictEqual(sum(-1, -2), 0);
});

// Menguji kasus di mana salah satu argumen bukan angka
test('sum returns 0 when one argument is not a number', () => {
    assert.strictEqual(sum('1', 2), 0);
    assert.strictEqual(sum(1, '2'), 0);
    assert.strictEqual(sum('1', '2'), 0);
});

// Menguji kasus di mana kedua argumen bukan angka
test('sum returns 0 when both arguments are not numbers', () => {
    assert.strictEqual(sum('a', 'b'), 0);
});

// Menguji penjumlahan dua angka nol
test('sum returns the correct sum when both arguments are zero', () => {
    assert.strictEqual(sum(0, 0), 0);
});

// Menguji penjumlahan dengan salah satu argumen nol
test('sum returns the correct sum when one argument is zero', () => {
    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(5, 0), 5);
});

// Menguji penjumlahan dengan angka besar
test('sum returns the correct sum for large numbers', () => {
    assert.strictEqual(sum(1000000, 2000000), 3000000);
});