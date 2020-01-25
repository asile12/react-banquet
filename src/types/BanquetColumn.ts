import { VerticalAlign, HorizontalAlign, FormattingFunction } from "./Aliases"

export interface BanquetColumn {
   width?: string
   className?: string
   vAlign?: VerticalAlign
   hAlign?: HorizontalAlign
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   formatting?: FormattingFunction
}
