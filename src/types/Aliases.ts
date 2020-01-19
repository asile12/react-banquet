import { ReactNode } from "react"

export type Border =
   | "all"
   | "none"
   | "horizontal"
   | "vertical"
   | "outer"
   | "inner"
   | "horizontal-inner"
   | "vertical-inner"
   | "horizontal-outer"
   | "vertical-outer"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormattingFunction = (value: any) => ReactNode

export type HorizontalAlign = "right" | "center" | "left"

export type VerticalAlign = "top" | "center" | "bottom"
