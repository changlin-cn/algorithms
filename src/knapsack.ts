import { getSubsets } from './get-subsets';
import { max } from './max-min';
import { heapSort } from './sort/index';

/**
 * 背包问题:给定一组物品，每种物品都有自己的重量和价格，在限定的总重量内，我们如何选择，才能使得物品的总价格最高
 */

interface item {
  value: number;
  size: number;
}

/**
 * 背包问题 贪心算法
 * @param capacity -背包容量
 * @param {Object[]} items -物品
 * @param {number} items[].size -物品尺寸
 * @param {number} items[].value -物品价值
 * @returns {number}
 */
export function greedyKnapsack(capacity: number, items: item[]): number {
  const temp = heapSort(items, (a, b) => (a.value / a.size > b.value / b.size ? -1 : 0));
  let res = 0;
  let surplus = capacity;
  while (surplus > 0 && temp.length > 0) {
    const first = temp.shift() as item;
    if (first.size <= surplus) {
      res += first.value;
      surplus -= first.size;
    }
  }
  return res;
}

/**
 * 背包问题 动态规划
 * @param capacity -背包容量
 * @param {Object[]} items -物品
 * @param {number} items[].size -物品尺寸
 * @param {number} items[].value -物品价值
 * @returns {number}
 */
export function dpKnapsack(capacity: number, items: item[]): number {
  const table: number[][] = [];
  for (let i = 0; i <= items.length; i++) {
    table[i] = [];
    for (let j = 0; j <= capacity; j++) {
      table[i][j] = 0;
    }
  }

  for (let i = 1; i <= items.length; i++) {
    const current = items[i - 1];
    for (let j = 1; j <= capacity; j++) {
      if (current.size <= j) {
        table[i][j] = max([current.value + table[i - 1][j - current.size], table[i - 1][j]]);
      } else {
        table[i][j] = table[i - 1][j];
      }
    }
  }
  //   console.log(table);
  return table[items.length][capacity];
}

/**
 * 背包问题 简单暴力求解（不推荐，可能会内存溢出）；原理是找出所有可能的解，然后返回最大值
 * @param capacity -背包容量
 * @param {Object[]} items -物品
 * @param {number} items[].size -物品尺寸
 * @param {number} items[].value -物品价值
 * @returns {number}
 */
export function simpleKnapsack(capacity: number, items: item[]): number {
  const subsets = getSubsets(items);
  const res = subsets
    .map((n) =>
      n.reduce(
        (preValue, item) => {
          return { value: item.value + preValue.value, size: item.size + preValue.size };
        },
        { value: 0, size: 0 },
      ),
    )
    .filter((n) => n.size <= capacity);

  const maxValue = max(res, (a, b) => (a.value > b.value ? a : b)).value;

  return maxValue;
}
