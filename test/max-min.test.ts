import { max, min } from '../src/index';
test('max', () => {
  expect(max([1, 2, 3, 5, 4])).toBe(5);
  expect(max([1])).toBe(1);
  expect(max([{ v: 1 }, { v: 8 }, { v: 7 }], (a, b) => (a.v > b.v ? a : b))).toEqual({ v: 8 });
});

test('min', () => {
  expect(min([1, 2, 3, 5, 4])).toBe(1);
  expect(min([1])).toBe(1);
  expect(min([{ v: 1 }, { v: 8 }, { v: 7 }], (a, b) => (a.v > b.v ? b : a))).toEqual({ v: 1 });
});
