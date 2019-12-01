import React from "react"
import { BanquetCellProps } from "../types/BanquetCellProps"

const BanquetCell = ({ children, ...props }: BanquetCellProps) => {
   return <div>{children}</div>
}

export default BanquetCell
