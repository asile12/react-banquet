import React from "react"
import ErrorBoundary from "../errorHandling/ErrorBoundary"
import BanquetTableProps from "../types/BanquetTableProps"
import BanquetTable from "./BanquetTable"

export const BanquetTableWrapper = (props: BanquetTableProps) => {
   return (
      <ErrorBoundary>
         <BanquetTable {...props}>{props.children}</BanquetTable>
      </ErrorBoundary>
   )
}

