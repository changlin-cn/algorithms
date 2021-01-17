// interface item {
//   value: number;
//   size: number;
// }
// export function knapsack(capacity: number, item: item[]): void {
//   for (let i = 0; i < item.length; i++) {}
// }

/**
 *获取集合的（某个长度的？）子集
 * @param {any[]}arr -数组
 * @param {number}[n] -只获取某个长度的子集 不传此参数则获取所有子集
 */
export function getSubsets<T>(arr: T[], n?: number): T[][] {
  const res: { subset: T[]; lastIndex: number }[] = arr.map((n, i) => ({ subset: [n], lastIndex: i }));

  if (n) {
    while (res.length) {
      const current = res[0];
      if (current.subset.length === n) {
        break;
      }
      res.shift();
      for (let i = current.lastIndex + 1; i < arr.length; i++) {
        res.push({
          subset: current.subset.concat(arr[i]),
          lastIndex: i,
        });
      }
    }
  } else {
    for (let j = 0; j < res.length; j++) {
      const current = res[j];
      if (current.subset.length === arr.length) {
        break;
      }
      for (let i = current.lastIndex + 1; i < arr.length; i++) {
        res.push({
          subset: current.subset.concat(arr[i]),
          lastIndex: i,
        });
      }
    }
  }

  return res.map((n) => n.subset);
}
