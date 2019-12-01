import React from "react"
import { BanquetRowProps } from "../types/BanquetRowProps"

const BanquetRow = ({ children, ...props }: BanquetRowProps) => {
   return <>{children}</>
}

export default BanquetRow
