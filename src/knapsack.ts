import { getSubsets } from './get-subsets';
import { max } from './max-min';

interface item {
  value: number;
  size: number;
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
 * 背包问题 简单暴力求解（不推荐，可能会内存溢出），找出所有可能的解，然后返回最大值
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
