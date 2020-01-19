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

Banquet depends on **react ^16.8** and **styled-components ^4.0.1**, so you will have to have those installed.

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
On BanquetTable, the className will affect the _table outer div_.  
On BanquetRow and BanquetCell, the className will affect the cells.

## Horizontal and vertical alignment

BanquetTable, BanquetRow and BanquetCell all accept a _hAlign_ (horizontal alignment) and _vAlign_ (vertical alignment) property. Defaults to _center_.
You can also set _hAlign_ and _vAlign_ for a whole column (see [Column Properties](#Column-Properties) below).

When you set _hAlign_ and _vAlign_ on different components, values are evaluated following the rule below (">" is used with the meaning of "takes precedence over"):
**cell alignment** > **column alignment** > **row alignment** > **table alignment**.

## Column Properties

BanquetTable accepts a _columnProps_ property, which is an array of the same length as the number of columns.
Every element in the array contains the properties for said column.  
The properties you can set are:

-  **width**: accepts all values accepted by css property "display: grid", such as px, %, fr, minmax(), auto. For a complete reference see [the official docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns). Defaults to "auto"
-  **className**: a className to apply to the elements of a single column.
-  **hAlign**: the column's cells' horizontal alignment. Can be set to _right_, _left_ or _center_.
-  **vAlign**: the column's cells' vertical alignment. Can be set to _top_, _bottom_ or _center_.

```JSX
const columns = [
  {
    width:"100px",
    hAlign: "left",
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

## Styling with stylesheets

Banquet does not include any unnecessary styling, so you can use whatever you please.  
However, you can import one of the default stylesheets to get you started.

```
import "react-banquet/build/css/react-banquet-minimal-style.css";
```

Or, instead of a default stylesheet you can write your own. We have assigned some default classes to all the elements to make the job easier.

BanquetTable: `.banquet`  
BanquetCell : `.banquet .cell`

# API reference

The ? mark refers to an optional property.

### BanquetTable

| Name         | Type                                                                                                                                                                                                         | Default                                           | Description                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------ |
| children     | BanquetRow nodes                                                                                                                                                                                             |                                                   | The rows of the table                      |
| borders?     | "all" &#124; "none" &#124; "horizontal" &#124; "vertical" &#124; "outer" &#124; "inner" &#124;<br/>"horizontal-inner" &#124; "vertical-inner" &#124; "horizontal-outer" &#124; "vertical-outer"              | "all"                                             | The visible borders                        |
| columnProps? | { <br/>&nbsp;&nbsp;width?: string<br/>&nbsp;&nbsp;className?: string<br/>&nbsp;&nbsp;hAlign?: "left" &#124; "center" &#124; "right"<br/>&nbsp;&nbsp;vAlign?: "top" &#124; "center" &#124; "bottom" <br/>}[ ] | width: auto<br/>hAlign: center<br/>vAlign: center | The columns' properties                    |
| className?   | string                                                                                                                                                                                                       |                                                   | A className to apply to the table          |
| hAlign?      | "left" &#124; "center" &#124; "right"                                                                                                                                                                        | "center"                                          | Horizontal alignment to apply to the table |
| vAlign?      | "top" &#124; "center" &#124; "bottom"                                                                                                                                                                        | "center"                                          | Vertical alignment to apply to the table   |

### BanquetRow

| Name       | Type                                  | Default  | Description                                                |
| ---------- | ------------------------------------- | -------- | ---------------------------------------------------------- |
| children   | BanquetCell nodes                     |          | The row cells                                              |
| header?    | boolean                               | false    | Whether to apply header styles to all the cells in the row |
| className? | string                                |          | A className to apply to all the cells in that row          |
| hAlign?    | "left" &#124; "center" &#124; "right" | "center" | Horizontal alignment to apply to the row                   |
| vAlign?    | "top" &#124; "center" &#124; "bottom" | "center" | Vertical alignment to apply to the row                     |

### BanquetCell

| Name      | Type                                  | Default  | Description                               |
| --------- | ------------------------------------- | -------- | ----------------------------------------- |
| children  | any                                   |          | The content of the cell                   |
| header    | boolean                               | false    | Whether to apply header styles            |
| className | string                                |          | The className to apply to the cell        |
| hAlign?   | "left" &#124; "center" &#124; "right" | "center" | Horizontal alignment to apply to the cell |
| vAlign?   | "top" &#124; "center" &#124; "bottom" | "center" | Vertical alignment to apply to the cell   |
