import React, { ReactElement } from "react"
import { BanquetTableProps } from "../types/BanquetTableProps"
import { StyledBanquetTable } from "../style/StyledBanquetTable"

const BanquetTable = ({
   borders = "all",
   className = "",
   children,
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
   // pass down the max number of cells to the Row components
   const newChildren = React.Children.map(children, (child: ReactElement) => {
      return React.cloneElement(child, {
         maxNumberOfCells: maxNumberOfCells,
      })
   })

   return (
         <StyledBanquetTable
            className={`banquet ${className}`}
            numberOfColumns={maxNumberOfCells}
            borders={borders}
            {...props}
         >
            {newChildren}
         </StyledBanquetTable>
   )
}

export default BanquetTable
