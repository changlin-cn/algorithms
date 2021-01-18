import { getSubsets } from './get-subsets';
import { max } from './max-min';

interface item {
  value: number;
  size: number;
}

/**
 * 背包问题 简单算法
 * @param capacity -背包容量
 * @param {Object[]} items -物品
 * @param {number} items[].size -物品尺寸
 * @param {number} items[].value -物品价值
 * @returns {number}
 */
export function knapsackSimple(capacity: number, items: item[]): number {
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
