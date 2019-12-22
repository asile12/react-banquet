[![CircleCI](https://img.shields.io/circleci/build/github/asile12/react-banquet/master?label=CircleCI&style=flat-square&token=4c5ae73467df9c656943ccc6e6cc4f125d50e27a)](https://circleci.com/gh/asile12/react-banquet)
[![Travis (.com)](https://img.shields.io/travis/com/asile12/react-banquet?label=TravisCI&style=flat-square)](https://travis-ci.com/asile12/react-banquet)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/asile12/react-banquet?style=flat-square)](https://github.com/asile12/react-banquet/releases)
[![GitHub last commit](https://img.shields.io/github/last-commit/asile12/react-banquet?style=flat-square)](https://github.com/asile12/react-banquet/commits/master)
[![Codecov](https://img.shields.io/codecov/c/github/asile12/react-banquet?style=flat-square)](https://codecov.io/gh/asile12/react-banquet)
## Installation
`npm install react-banquet`
or
`yarn add react-banquet`

## Peer dependencies
Banquet depends on **react >16.8** and **styled-components**, so you will have to have those installed.

## Basic Table
```JSX
import {BanquetTable, BanquetRow, BanquetCell} from "react-banquet"

<BanquetTable>
  <BanquetRow>
    <BanquetCell>content<BanquetCell/>
    <BanquetCell>content<BanquetCell/>
    <BanquetCell>content<BanquetCell/>
  <BanquetRow/>
<BanquetTable />
```

## Borders

You can set which borders to show with the **borders** property on BanquetTable. Defaults to "all".

```JSX
<BanquetTable borders="none">
```

-  **all:** show all borders
-  **none:** don't show borders
-  **horizontal:** show only horizontal borders
-  **horizontal-outer:** show horizontal borders and full outer frame
-  **horizontal-inner:** show horizontal borders (frame excluded)
-  **vertical:** show only vertical borders
-  **vertical-outer:** show vertical borders and full outer frame
-  **vertical-inner:** show vertical borders (frame excluded)
-  **outer:** show only the outer frame
-  **inner:** show all borders but the outer frame

## Headers

You can set a **header** property on BanquetRow or BanquetCell.  
This will add a "header" className to a single cell or all the cells in a row.

```JSX
<BanquetTable>
  <BanquetRow header>
    <BanquetCell>my header 1<BanquetCell/>
    <BanquetCell>my header 2<BanquetCell/>
  <BanquetRow/>
  <BanquetRow>
    <BanquetCell>content<BanquetCell/>
    <BanquetCell>content<BanquetCell/>
  <BanquetRow/>
<BanquetTable />
```

## ClassNames

The className property can be set on BanquetTable, BanquetRow or BanquetCell.
On BanquetTable, the className will affect the *table outer div*.
On BanquetRow and BanquetCell, the className will affect the cells.

## Column Properties
BanquetTable accepts a **columnProps** property, which is an array of the same length as the number of columns.
Every element in the array contains the properties for said column.  
The properties you can set are:
- **width**: accepts all values accepted by css-grid, such as px, %, fr, minmax(), auto. For a complete reference see [here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns). Defaults to "auto"
- **className**: a className to apply to the elements of a single column.

```JSX
const columns = [
  { 
    width:"100px", 
  },
  { 
    width:"250px",
    className:"my-class" 
  },
]

<BanquetTable columnProps={columns}>
  <BanquetRow>
    <BanquetCell>content<BanquetCell/>
    <BanquetCell>content<BanquetCell/>
  <BanquetRow/>
<BanquetTable />
```

## API reference

### BanquetTable

| Name        | Type                                                                                                                                                                                        | Default                        | Description                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------- |
| children    | BanquetRow nodes                                                                                                                                                                            |                                | The rows of the table                    |
| borders     | "all" &#124; "none" &#124; "horizontal" &#124; "vertical" &#124; "outer" &#124; "inner" &#124; "horizontal-inner" &#124; "vertical-inner" &#124; "horizontal-outer" &#124; "vertical-outer" | "all"                          | The borders which are to be made visible |
| columnProps | { width: string className: string }[]                                                                                                                                                       | width: auto                    | The columns' properties                  |
| className | string            |         | A className to apply to the table          |

### BanquetRow

| Name      | Type              | Default | Description                                                |
| --------- | ----------------- | ------- | ---------------------------------------------------------- |
| children  | BanquetCell nodes |         | The row cells                                              |
| header    | boolean           | false   | Whether to apply header styles to all the cells in the row |
| className | string            |         | A className to apply to all the cells in that row          |

### BanquetCell
| Name      | Type    | Default | Description                        |
| --------- | ------- | ------- | ---------------------------------- |
| children  | any     |         | The content of the cell            |
| header    | boolean | false   | Whether to apply header styles     |
| className | string  |         | The className to apply to the cell |
