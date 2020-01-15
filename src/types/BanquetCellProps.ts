import { ReactNode } from "react"
import { VerticalAlign } from "./VerticalAlign"
import { HorizontalAlign } from "./HorizontalAlign"

export interface BanquetCellProps {
   children?: ReactNode
   header?: boolean
   className?: string
   vAlign?: VerticalAlign
   hAlign?: HorizontalAlign
}
