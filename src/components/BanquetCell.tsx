import React from "react"
import { BanquetCellProps } from "../types/BanquetCellProps"

const BanquetCell = ({ children, header = false, className = "", ...props }: BanquetCellProps) => {
   return (
      <div className={`cell${header ? " header" : ""} ${className}`} {...props}>
         {children}
      </div>
   )
}

export default BanquetCell
