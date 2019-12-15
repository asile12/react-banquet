import React, { ReactElement } from "react"
import { BanquetTableProps } from "../types/BanquetTableProps"
import { StyledBanquetTable } from "../style/StyledBanquetTable"
import { CustomError } from "../errorHandling/CustomError"

const BanquetTable = ({
   borders = "all",
   className = "",
   children,
   columnProps,
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

   // substitute undefined columnProps
   if (columnProps !== undefined) {
      columnProps.forEach((column, index) => {
         columnProps[index] = {
            width: column.width !== undefined ? column.width : "auto",
            className: column.className !== undefined ? column.className : "",
         }
      })
   }

   // pass down props to the Row components
   const newChildren =
      columnProps !== undefined
         ? React.Children.map(children, (child: ReactElement) => {
                 return React.cloneElement(child, {
                    maxNumberOfCells: maxNumberOfCells,
                    columnClassNames: columnProps.map(column => column.className),
                 })
           })
         : React.Children.map(children, (child: ReactElement) => {
                 return React.cloneElement(child, {
                    maxNumberOfCells: maxNumberOfCells,
                 })
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
