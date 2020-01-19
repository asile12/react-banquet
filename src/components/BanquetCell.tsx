import React from "react"
import BanquetCellProps from "../types/BanquetCellProps"
import { StyledBanquetCell } from "../style/StyledBanquetCell"

const BanquetCell = ({
   children,
   header = false,
   className = "",
   hAlign = "center",
   vAlign = "center",
   ...props
}: BanquetCellProps) => {
   return (
      <StyledBanquetCell
         className={["cell", header ? "header" : "", className]
            .join(" ")
            .replace(/\s+/g, " ")
            .trim()}
         {...props}
         hAlign={hAlign}
         vAlign={vAlign}
      >
         {children}
      </StyledBanquetCell>
   )
}

export default BanquetCell
