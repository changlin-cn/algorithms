[@hechanglin/algorithms](../README.md) / Graph

# Class: Graph

图

## Hierarchy

* **Graph**

## Table of contents

### Constructors

- [constructor](graph.md#constructor)

### Properties

- [edges](graph.md#edges)
- [vertices](graph.md#vertices)

### Methods

- [\_addEdge](graph.md#_addedge)
- [addEdge](graph.md#addedge)
- [getPath](graph.md#getpath)

## Constructors

### constructor

\+ **new Graph**(`vertices`: vertex[]): [*Graph*](graph.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`vertices` | vertex[] | -顶点   |

**Returns:** [*Graph*](graph.md)

Defined in: [graph.ts:14](https://github.com/changlin-cn/algorithms/blob/9a5eaf9/src/graph.ts#L14)

## Properties

### edges

• **edges**: { [index: string]: edge[];  }

边

Defined in: [graph.ts:31](https://github.com/changlin-cn/algorithms/blob/9a5eaf9/src/graph.ts#L31)

___

### vertices

• **vertices**: vertex[]

顶点

Defined in: [graph.ts:26](https://github.com/changlin-cn/algorithms/blob/9a5eaf9/src/graph.ts#L26)

## Methods

### \_addEdge

▸ `Private`**_addEdge**(`vertex1`: vertex, `vertex2`: vertex, `edgeInfo`: edgeInfo): *void*

#### Parameters:

Name | Type |
------ | ------ |
`vertex1` | vertex |
`vertex2` | vertex |
`edgeInfo` | edgeInfo |

**Returns:** *void*

Defined in: [graph.ts:95](https://github.com/changlin-cn/algorithms/blob/9a5eaf9/src/graph.ts#L95)

___

### addEdge

▸ **addEdge**(`vertexName1`: *string*, `vertexName2`: *string*, `edgeInfo`: edgeInfo): *void*

添加边

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`vertexName1` | *string* | -顶点1   |
`vertexName2` | *string* | -顶点2   |
`edgeInfo` | edgeInfo | -边信息   |

**Returns:** *void*

Defined in: [graph.ts:39](https://github.com/changlin-cn/algorithms/blob/9a5eaf9/src/graph.ts#L39)

___

### getPath

▸ **getPath**(`vertexFrom`: *string*, `vertexTo`: *string*): { `distance`: *number* ; `path`: *string*  }[]

获取点到点的位置

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`vertexFrom` | *string* | -起始点   |
`vertexTo` | *string* | -结束点   |

**Returns:** { `distance`: *number* ; `path`: *string*  }[]

Defined in: [graph.ts:54](https://github.com/changlin-cn/algorithms/blob/9a5eaf9/src/graph.ts#L54)
