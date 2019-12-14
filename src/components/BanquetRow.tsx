import React, { ReactElement } from "react"
import { BanquetRowProps } from "../types/BanquetRowProps"
import BanquetCell from "./BanquetCell"

const BanquetRow = ({
   children,
   header = false,
   className = "",
   maxNumberOfCells,
   ...props
}: BanquetRowProps) => {
   const numberOfChildren = React.Children.count(children)
   const newChildren = React.Children.map(children, (child: ReactElement) => {
      return React.cloneElement(child, {
         className: `${className} ${
            child.props.className !== undefined ? child.props.className : ""
         }`,
         header: header,
      })
   })
   const childrenToAdd = [] as ReactElement[]
   for (let i = maxNumberOfCells - numberOfChildren; i > 0; i--) {
      childrenToAdd.push(
         <BanquetCell header={header} className={className} key={`added${i}`}></BanquetCell>
      )
   }

   return (
      <>
         {newChildren}
         {childrenToAdd}
      </>
   )
}

export default BanquetRow
