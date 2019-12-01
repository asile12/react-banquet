import React from "react"
import ErrorBoundary from "./ErrorBoundary"
import { BanquetTableProps } from "../types/BanquetTableProps"
import { StyledBanquetTable } from "../style/StyledBanquetTable"

const BanquetTable = ({ borders = "all", className = "", ...props }: BanquetTableProps) => {
   return (
      <ErrorBoundary>
         <StyledBanquetTable
            className={`banquet ${className}`}
            columns={2}
            borders={borders}
            {...props}
         >
            {props.children}
         </StyledBanquetTable>
      </ErrorBoundary>
   )
}

export default BanquetTable
