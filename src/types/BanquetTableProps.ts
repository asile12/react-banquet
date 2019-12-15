import { Border } from "./Border"
import { ReactNode } from "react"
import { BanquetColumn } from "./BanquetColumn"

export interface BanquetTableProps {
   children: ReactNode
   borders?: Border
   className?: string
   columnProps?: BanquetColumn[]
}
