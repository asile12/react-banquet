import { ReactNode } from "react"
import { BanquetColumn } from "./BanquetColumn"
import { Border, VerticalAlign, HorizontalAlign } from "./Aliases"

export default interface BanquetTableProps {
   children: ReactNode
   borders?: Border
   className?: string
   columnProps?: BanquetColumn[]
   vAlign?: VerticalAlign
   hAlign?: HorizontalAlign
}
