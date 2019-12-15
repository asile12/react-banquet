import React from "react"
import { BanquetCellProps } from "../types/BanquetCellProps"
import { StyledBanquetCell } from "../style/StyledBanquetCell"

const BanquetCell = ({ children, header = false, className = "", ...props }: BanquetCellProps) => {
   return (
      <StyledBanquetCell
         className={["cell", header ? "header" : "", className]
            .join(" ")
            .replace(/\s+/g, " ")
            .trim()}
         {...props}
      >
         {children}
      </StyledBanquetCell>
   )
}

export default BanquetCell
