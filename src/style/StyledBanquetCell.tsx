import styled from "styled-components"
import { VerticalAlign } from "../types/VerticalAlign"
import { HorizontalAlign } from "../types/HorizontalAlign"

interface StyledBanquetCell {
   className?: string
   vAlign: VerticalAlign
   hAlign: HorizontalAlign
}
export const StyledBanquetCell = styled.div<StyledBanquetCell>`
   display: flex;
   height: 200px;

   align-items: ${props =>
      props.vAlign === "top" ? "flex-start" : props.vAlign === "bottom" ? "flex-end" : "center"};
   justify-content: ${props =>
      props.hAlign === "left" ? "flex-start" : props.hAlign === "right" ? "flex-end" : "center"};
`
