import { expect, test } from 'vitest';
import { sumUp } from '../utils/algo';

test('result shoud be 21', () => {
  expect(sumUp(1, 2, 3, 4, 5, 6)).toBe(21);
});
