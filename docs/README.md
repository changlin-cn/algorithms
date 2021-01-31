@hechanglin/algorithms

# @hechanglin/algorithms

## Table of contents

### Classes

- [Graph](classes/graph.md)

### Functions

- [LCS](README.md#lcs)
- [bubbleSort](README.md#bubblesort)
- [commonSubStr](README.md#commonsubstr)
- [countingSort](README.md#countingsort)
- [dpFib](README.md#dpfib)
- [dpKnapsack](README.md#dpknapsack)
- [getSubsets](README.md#getsubsets)
- [greedyKnapsack](README.md#greedyknapsack)
- [heapSort](README.md#heapsort)
- [insertionSort](README.md#insertionsort)
- [max](README.md#max)
- [mergeSortFromBottom](README.md#mergesortfrombottom)
- [mergeSortFromTop](README.md#mergesortfromtop)
- [min](README.md#min)
- [quickSort](README.md#quicksort)
- [radixSort](README.md#radixsort)
- [recursiveFib](README.md#recursivefib)
- [selectionSort](README.md#selectionsort)
- [shellSort](README.md#shellsort)
- [simpleKnapsack](README.md#simpleknapsack)
- [swap](README.md#swap)

## Functions

### LCS

▸ **LCS**(`word1`: *string*, `word2`: *string*): *string*

获取最长公共子序列

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`word1` | *string* |  |
`word2` | *string* |     |

**Returns:** *string*

Defined in: [common-sub-str.ts:28](https://github.com/changlin-cn/algorithms/blob/8594113/src/common-sub-str.ts#L28)

___

### bubbleSort

▸ **bubbleSort**<T\>(`arr`: T[], `compareFn?`: *compareFnDefalutType*<T\>): T[]

冒泡排序

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`compareFn` | *compareFnDefalutType*<T\> | ... |     |

**Returns:** T[]

Defined in: [sort/bubble-sort.ts:7](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/bubble-sort.ts#L7)

___

### commonSubStr

▸ **commonSubStr**(`str1`: *string*, `str2`: *string*): *string*

获取最长公共字符串

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`str1` | *string* |  |
`str2` | *string* |     |

**Returns:** *string*

Defined in: [common-sub-str.ts:6](https://github.com/changlin-cn/algorithms/blob/8594113/src/common-sub-str.ts#L6)

___

### countingSort

▸ **countingSort**<T\>(`arr`: T[], `getInt?`: *getInt*<T\>, `order?`: *asc* \| *desc*): T[]

计数排序 (给定数组排序值必须是大于或等于0的整数)

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`getInt` | *getInt*<T\> | ... |  |
`order` | *asc* \| *desc* | 'asc' |     |

**Returns:** T[]

Defined in: [sort/counting-sort.ts:13](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/counting-sort.ts#L13)

___

### dpFib

▸ **dpFib**(`n`: *number*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** *number*

Defined in: [fibonacci.ts:8](https://github.com/changlin-cn/algorithms/blob/8594113/src/fibonacci.ts#L8)

___

### dpKnapsack

▸ **dpKnapsack**(`capacity`: *number*, `items`: item[]): *number*

背包问题 动态规划

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`capacity` | *number* | -背包容量   |
`items` | item[] | -物品   |

**Returns:** *number*

Defined in: [knapsack.ts:44](https://github.com/changlin-cn/algorithms/blob/8594113/src/knapsack.ts#L44)

___

### getSubsets

▸ **getSubsets**<T\>(`arr`: T[], `n?`: *number*): T[][]

获取集合的（某个长度的？）子集

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | T[] | -数组   |
`n?` | *number* | - |

**Returns:** T[][]

Defined in: [get-subsets.ts:6](https://github.com/changlin-cn/algorithms/blob/8594113/src/get-subsets.ts#L6)

___

### greedyKnapsack

▸ **greedyKnapsack**(`capacity`: *number*, `items`: item[]): *number*

背包问题 贪心算法

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`capacity` | *number* | -背包容量   |
`items` | item[] | -物品   |

**Returns:** *number*

Defined in: [knapsack.ts:22](https://github.com/changlin-cn/algorithms/blob/8594113/src/knapsack.ts#L22)

___

### heapSort

▸ **heapSort**<T\>(`arr`: T[], `compareFn?`: *compareFnDefalutType*<T\>): T[]

堆排序

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`compareFn` | *compareFnDefalutType*<T\> | ... |     |

**Returns:** T[]

Defined in: [sort/heap-sort.ts:8](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/heap-sort.ts#L8)

___

### insertionSort

▸ **insertionSort**<T\>(`arr`: T[], `compareFn?`: *compareFnDefalutType*<T\>): T[]

插入排序

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`compareFn` | *compareFnDefalutType*<T\> | ... |     |

**Returns:** T[]

Defined in: [sort/insertion-sort.ts:7](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/insertion-sort.ts#L7)

___

### max

▸ **max**<T\>(`arr`: T[], `getMax?`: (`a`: T, `b`: T) => T): T

获取最大值

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - | -数据源   |
`getMax` | (`a`: T, `b`: T) => T | ... | - |

**Returns:** T

Defined in: [max-min.ts:6](https://github.com/changlin-cn/algorithms/blob/8594113/src/max-min.ts#L6)

___

### mergeSortFromBottom

▸ **mergeSortFromBottom**<T\>(`arr`: T[], `compareFn?`: *compareFnDefalutType*<T\>): T[]

自底而上的归并排序 （非递归实现）

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`compareFn` | *compareFnDefalutType*<T\> | ... |     |

**Returns:** T[]

Defined in: [sort/merge-sort.ts:44](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/merge-sort.ts#L44)

___

### mergeSortFromTop

▸ **mergeSortFromTop**<T\>(`arr`: T[], `compareFn?`: *compareFnDefalutType*<T\>): T[]

自顶而下的归并排序 （递归实现）

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`compareFn` | *compareFnDefalutType*<T\> | ... |     |

**Returns:** T[]

Defined in: [sort/merge-sort.ts:7](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/merge-sort.ts#L7)

___

### min

▸ **min**<T\>(`arr`: T[], `getMin?`: (`a`: T, `b`: T) => T): T

获取最小值

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - | -数据源   |
`getMin` | (`a`: T, `b`: T) => T | ... | - |

**Returns:** T

Defined in: [max-min.ts:22](https://github.com/changlin-cn/algorithms/blob/8594113/src/max-min.ts#L22)

___

### quickSort

▸ **quickSort**<T\>(`arr`: T[], `compareFn?`: *compareFnDefalutType*<T\>): T[]

快速排序

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`compareFn` | *compareFnDefalutType*<T\> | ... |     |

**Returns:** T[]

Defined in: [sort/quick-sort.ts:7](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/quick-sort.ts#L7)

___

### radixSort

▸ **radixSort**<T\>(`arr`: T[], `getInt?`: *getInt*<T\>, `order?`: *asc* \| *desc*): T[]

基数排序 (给定数组排序值必须是大于或等于0的整数)

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`getInt` | *getInt*<T\> | ... |  |
`order` | *asc* \| *desc* | 'asc' |     |

**Returns:** T[]

Defined in: [sort/radix-sort.ts:13](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/radix-sort.ts#L13)

___

### recursiveFib

▸ **recursiveFib**(`n`: *number*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** *number*

Defined in: [fibonacci.ts:1](https://github.com/changlin-cn/algorithms/blob/8594113/src/fibonacci.ts#L1)

___

### selectionSort

▸ **selectionSort**<T\>(`arr`: T[], `compareFn?`: *compareFnDefalutType*<T\>): T[]

选择排序

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`compareFn` | *compareFnDefalutType*<T\> | ... |     |

**Returns:** T[]

Defined in: [sort/selection-sort.ts:7](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/selection-sort.ts#L7)

___

### shellSort

▸ **shellSort**<T\>(`arr`: T[], `compareFn?`: *compareFnDefalutType*<T\>): T[]

希尔排序

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | T[] | - |  |
`compareFn` | *compareFnDefalutType*<T\> | ... |     |

**Returns:** T[]

Defined in: [sort/shell-sort.ts:16](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/shell-sort.ts#L16)

___

### simpleKnapsack

▸ **simpleKnapsack**(`capacity`: *number*, `items`: item[]): *number*

背包问题 简单暴力求解（不推荐，可能会内存溢出）；原理是找出所有可能的解，然后返回最大值

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`capacity` | *number* | -背包容量   |
`items` | item[] | -物品   |

**Returns:** *number*

Defined in: [knapsack.ts:76](https://github.com/changlin-cn/algorithms/blob/8594113/src/knapsack.ts#L76)

___

### swap

▸ **swap**<T\>(`arr`: T[], `pos1`: *number*, `pos2`: *number*): *void*

交换数组的两个元素

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | T[] |  |
`pos1` | *number* |  |
`pos2` | *number* |     |

**Returns:** *void*

Defined in: [sort/swap.ts:7](https://github.com/changlin-cn/algorithms/blob/8594113/src/sort/swap.ts#L7)
