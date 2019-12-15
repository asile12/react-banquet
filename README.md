![CircleCI](https://img.shields.io/circleci/build/github/asile12/react-banquet/master?label=circleCI&style=flat-square&token=4c5ae73467df9c656943ccc6e6cc4f125d50e27a)

## Installation
`npm install react-banquet`
or
`yarn add react-banquet`

## Peer dependencies
Banquet depends on **react >16.8** and **styled-components**, so you will have to have those installed.

## Basic Table
```
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

```
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

You can set a **header** property on BanquetRow or BanquetCell. This will add a "header" className to a single cell or all the cells in a row.

```
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

```
<BanquetTable columnProps=[{width:"100px"},{className:"my-class"}]>
  <BanquetRow>
    <BanquetCell>content<BanquetCell/>
    <BanquetCell>content<BanquetCell/>
  <BanquetRow/>
<BanquetTable />
```
