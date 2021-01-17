import { getSubsets } from '../src/index';
test('getSubsets', () => {
  expect(getSubsets([1, 2])).toEqual([[1], [2], [1, 2]]);
  expect(getSubsets([1, 2], 2)).toEqual([[1, 2]]);
  expect(getSubsets([1, 2, 3])).toEqual([[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]);
  expect(getSubsets([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  expect(getSubsets([1, 2, 3], 2)).toEqual([
    [1, 2],
    [1, 3],
    [2, 3],
  ]);
  expect(getSubsets([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
});
