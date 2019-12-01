import React, { ReactElement } from "react"
import { BanquetRowProps } from "../types/BanquetRowProps"

const BanquetRow = ({ children, header = false, className = "", ...props }: BanquetRowProps) => {
   let newChildren
   if (header) {
      newChildren = React.Children.map(children, (child: ReactElement) => {
         return React.cloneElement(child, {
            className: className,
            header: true,
         })
      })
   }
   return <>{newChildren !== undefined ? newChildren : children}</>
}

export default BanquetRow
