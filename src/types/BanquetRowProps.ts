import { ReactNode } from "react"
import { VerticalAlign, HorizontalAlign, FormattingFunction } from "./Aliases"

export default interface BanquetRowProps {
   children: ReactNode
   header: boolean
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
