import { ReactNode } from "react"
import { VerticalAlign } from "./VerticalAlign"
import { HorizontalAlign } from "./HorizontalAlign"

export interface BanquetRowWrapperProps {
   children: ReactNode
   header?: boolean
   className?: string
   vAlign?: VerticalAlign
   hAlign?: HorizontalAlign
}
