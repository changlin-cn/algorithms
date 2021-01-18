/**
 * 获取最大值
 * @param {any[]} arr -数据源
 * @param {function} [getMax] -比较函数，返回较大值
 */
export function max<T>(arr: T[], getMax: (a: T, b: T) => T = (a, b) => (a > b ? a : b)): T {
  if (arr.length < 2) {
    return arr[0];
  }
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res = getMax(res, arr[i]);
  }
  return res;
}

/**
 * 获取最小值
 * @param {any[]} arr -数据源
 * @param {function} [getMax] -比较函数，返回较小值
 */
export function min<T>(arr: T[], getMin: (a: T, b: T) => T = (a, b) => (a > b ? b : a)): T {
  if (arr.length < 2) {
    return arr[0];
  }
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res = getMin(res, arr[i]);
  }
  return res;
}
