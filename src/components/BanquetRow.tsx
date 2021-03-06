import React, { ReactElement } from "react"
import BanquetRowProps from "../types/BanquetRowProps"
import { BanquetCell } from "./BanquetCell"

const BanquetRow = ({
   children,
   header,
   className = "",
   maxNumberOfCells = 1,
   columnClassNames,
   tableVAlign,
   tableHAlign,
   rowVAlign,
   rowHAlign,
   columnHAlign,
   columnVAlign,
   columnFormatting,
   ...props
}: BanquetRowProps) => {
   // edit BanquetCells props
   const newChildren = React.Children.map(children, (cell: ReactElement, index) => {
      return React.cloneElement(cell, {
         className: [
            columnClassNames !== undefined ? columnClassNames[index] : "",
            className,
            cell.props.className !== undefined ? cell.props.className : "",
         ].join(" "),
         header: header,
         hAlign:
            cell.props.hAlign !== undefined
               ? cell.props.hAlign
               : columnHAlign !== undefined && columnHAlign[index] !== undefined
               ? columnHAlign[index]
               : rowHAlign !== undefined
               ? rowHAlign
               : tableHAlign,
         vAlign:
            cell.props.vAlign !== undefined
               ? cell.props.vAlign
               : columnVAlign !== undefined && columnVAlign[index] !== undefined
               ? columnVAlign[index]
               : rowVAlign !== undefined
               ? rowVAlign
               : tableVAlign,
         children:
            columnFormatting !== undefined && columnFormatting[index] !== undefined
               ? columnFormatting[index](cell.props.children)
               : cell.props.children,
      })
   })

   // add BanquetCells so that all rows have the same number of children
   const numberOfChildren = React.Children.count(children)
   const childrenToAdd = [] as ReactElement[]
   for (let i = maxNumberOfCells - numberOfChildren; i > 0; i--) {
      childrenToAdd.push(
         <BanquetCell
            header={header}
            className={className}
            vAlign={tableVAlign}
            hAlign={tableHAlign}
            key={`added${i}`}
         ></BanquetCell>
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
