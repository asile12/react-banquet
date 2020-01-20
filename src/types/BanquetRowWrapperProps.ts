import { ReactNode } from "react"
import { VerticalAlign, HorizontalAlign } from "./Aliases"

export default interface BanquetRowWrapperProps {
   children: ReactNode
   header?: boolean
   className?: string
   vAlign?: VerticalAlign
   hAlign?: HorizontalAlign
   rowHeight?: string
}
