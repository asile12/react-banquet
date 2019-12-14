import { ReactNode } from "react"

export interface BanquetRowProps {
   children: ReactNode
   header?: boolean
   className?: string
   maxNumberOfCells?: number
}
