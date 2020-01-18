import React, { ReactElement } from "react"
import { BanquetTableProps } from "../types/BanquetTableProps"
import { StyledBanquetTable } from "../style/StyledBanquetTable"
import { CustomError } from "../errorHandling/CustomError"
import BanquetRow from "./BanquetRow"

const BanquetTable = ({
   borders = "all",
   className = "",
   children,
   columnProps,
   hAlign,
   vAlign,
   ...props
}: BanquetTableProps) => {
   // calculate the max number of cells in all the rows
   let maxNumberOfCells = 1
   React.Children.forEach(children, (child: ReactElement) => {
      const numberOfCells = React.Children.count(child.props.children)
      if (numberOfCells > maxNumberOfCells) {
         maxNumberOfCells = numberOfCells
      }
   })

   // check if columnProps has the right number of elements
   if (columnProps !== undefined && columnProps.length !== maxNumberOfCells) {
      throw new CustomError(1000, "The number of cells and the number of columnProps don't match.")
   }

   // substitute undefined columnProps with default value
   if (columnProps !== undefined) {
      columnProps.forEach((column, index) => {
         columnProps[index] = {
            width: column.width !== undefined ? column.width : "auto",
            className: column.className !== undefined ? column.className : "",
            vAlign: column.vAlign,
            hAlign: column.hAlign,
         }
      })
   }
   // convert BanquetRowWrapper to BanquetRow components
   const newChildren =
      columnProps !== undefined
         ? React.Children.map(children, (row: ReactElement) => {
              return (
                 <BanquetRow
                    maxNumberOfCells={maxNumberOfCells}
                    tableHAlign={hAlign}
                    tableVAlign={vAlign}
                    rowHAlign={row.props.hAlign}
                    rowVAlign={row.props.vAlign}
                    columnClassNames={columnProps.map(column => column.className)}
                    columnHAlign={columnProps.map(column => column.hAlign)}
                    columnVAlign={columnProps.map(column => column.vAlign)}
                    header={row.props.header}
                    className={row.props.className}
                 >
                    {row.props.children}
                 </BanquetRow>
              )
           })
         : React.Children.map(children, (row: ReactElement) => {
              return (
                 <BanquetRow
                    maxNumberOfCells={maxNumberOfCells}
                    tableHAlign={hAlign}
                    tableVAlign={vAlign}
                    rowHAlign={row.props.hAlign}
                    rowVAlign={row.props.vAlign}
                    header={row.props.header}
                    className={row.props.className}
                 >
                    {row.props.children}
                 </BanquetRow>
              )
           })

   // create column width string
   let columnWidths = ""
   if (columnProps === undefined) {
      columnWidths = `repeat(${maxNumberOfCells}, auto)`
   } else {
      columnWidths = columnProps.map(object => object.width).join(" ")
   }

   return (
      <StyledBanquetTable
         className={`banquet ${className}`}
         numberOfColumns={maxNumberOfCells}
         borders={borders}
         columnWidths={columnWidths}
         {...props}
      >
         {newChildren}
      </StyledBanquetTable>
   )
}

export default BanquetTable
