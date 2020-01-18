import { ReactNode } from "react"
import { VerticalAlign } from "./VerticalAlign"
import { HorizontalAlign } from "./HorizontalAlign"

export interface BanquetRowProps {
   children: ReactNode
   header?: boolean
   className?: string
   maxNumberOfCells?: number
   columnClassNames?: string[]
   tableVAlign: VerticalAlign
   tableHAlign: HorizontalAlign
   rowVAlign: VerticalAlign
   rowHAlign: HorizontalAlign
   columnHAlign?: (HorizontalAlign | undefined)[]
   columnVAlign?: (VerticalAlign | undefined)[]
}
