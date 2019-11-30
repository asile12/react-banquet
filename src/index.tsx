import React from "react"
import ErrorBoundary from "./components/ErrorBoundary"
import { BanquetTable } from "./types/BanquetTable"
import { StyledBanquetTable } from "./style/StyledBanquetTable"

const Banquet = ({ borders = "all", ...props }: BanquetTable) => {
   return (
      <ErrorBoundary>
         <StyledBanquetTable columns={2} borders={borders}>
            <div>other text</div>
            <div>other text</div>
            <div>other text</div>
            <div>other text</div>
         </StyledBanquetTable>
      </ErrorBoundary>
   )
}

export default Banquet
