import styled, { css } from "styled-components"
import { Border } from "../types/Border"

interface StyledBanquetTable {
   numberOfColumns: number
   className?: string
   borders: Border
}
export const StyledBanquetTable = styled.div<StyledBanquetTable>`
   ${props =>
      props.borders === "all" ||
      props.borders === "outer" ||
      props.borders === "horizontal-outer" ||
      props.borders === "vertical-outer"
         ? css`
              border-style: solid;
           `
         : ""}
   ${props =>
      props.borders === "all" ||
      props.borders === "inner" ||
      props.borders === "vertical" ||
      props.borders === "vertical-inner" ||
      props.borders === "vertical-outer"
         ? css`
              & div:not(:nth-child(${props.numberOfColumns}n)) {
                 border-right-style: solid;
              }
           `
         : ""}
         
   ${props =>
      props.borders === "all" ||
      props.borders === "inner" ||
      props.borders === "horizontal" ||
      props.borders === "horizontal-outer" ||
      props.borders === "horizontal-inner"
         ? css`
              & div:not(:nth-child(-n + ${props.numberOfColumns})) {
                 border-top-style: solid;
              }
           `
         : ""}
         
      ${props =>
         props.borders === "horizontal"
            ? css`
                 border-top-style: solid;
                 border-bottom-style: solid;
              `
            : ""}
      ${props =>
         props.borders === "vertical"
            ? css`
                 border-left-style: solid;
                 border-right-style: solid;
              `
            : ""}
   display: grid;
   grid-template-columns: repeat(${props => props.numberOfColumns}, auto);
`
