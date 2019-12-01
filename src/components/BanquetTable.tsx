import React from "react"
import ErrorBoundary from "./ErrorBoundary"
import { BanquetTableProps } from "../types/BanquetTableProps"
import { StyledBanquetTable } from "../style/StyledBanquetTable"

const BanquetTable = ({ borders = "all", ...props }: BanquetTableProps) => {
   return (
      <ErrorBoundary>
         <StyledBanquetTable columns={2} borders={borders}>
            {props.children}
         </StyledBanquetTable>
      </ErrorBoundary>
   )
}

export default BanquetTable
