import React, { ReactElement } from "react"
import ErrorBoundary from "./ErrorBoundary"
import { BanquetTableProps } from "../types/BanquetTableProps"
import { StyledBanquetTable } from "../style/StyledBanquetTable"

const BanquetTable = ({ borders = "all", className = "", ...props }: BanquetTableProps) => {
   let maxNumberOfCells = 1
   React.Children.forEach(props.children, (child: ReactElement) => {
      const numberOfCells = React.Children.count(child.props.children)
      if (numberOfCells > maxNumberOfCells) {
         maxNumberOfCells = numberOfCells
      }
   })
   return (
      <ErrorBoundary>
         <StyledBanquetTable
            className={`banquet ${className}`}
            numberOfColumns={maxNumberOfCells}
            borders={borders}
            {...props}
         >
            {props.children}
         </StyledBanquetTable>
      </ErrorBoundary>
   )
}

export default BanquetTable
