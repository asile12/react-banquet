import { ReactNode } from "react"
import { VerticalAlign, HorizontalAlign } from "./Aliases"

export default interface BanquetCellProps {
   children?: ReactNode
   header?: boolean
   className?: string
   vAlign?: VerticalAlign
   hAlign?: HorizontalAlign
}
