import { Border } from "./Border"
import { ReactNode } from "react"
import { BanquetColumn } from "./BanquetColumn"
import { VerticalAlign } from "./VerticalAlign"
import { HorizontalAlign } from "./HorizontalAlign"

export interface BanquetTableProps {
   children: ReactNode
   borders?: Border
   className?: string
   columnProps?: BanquetColumn[]
   vAlign?: VerticalAlign
   hAlign?: HorizontalAlign
}
