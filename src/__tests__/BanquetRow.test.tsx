import React from "react"
import { render } from "@testing-library/react"
import BanquetRow from "../components/BanquetRowWrapper"
import "@testing-library/jest-dom/extend-expect"
import BanquetCell from "../components/BanquetCell"
import BanquetTable from "../components/BanquetTable"

describe("Banquet Row", () => {
   it("does not render a DOM node", () => {
      const { queryByTestId } = render(
         <BanquetRow data-testid="row">
            <BanquetCell></BanquetCell>
         </BanquetRow>
      )
      expect(queryByTestId("row")).toBeNull()
   })

   it("forwards 'header' prop", () => {
      const text = "some text"
      const { queryByText } = render(
         <BanquetTable>
            <BanquetRow header>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(queryByText(text)).toHaveClass("cell", "header")
   })

   it("forwards 'className' prop", () => {
      const text = "some text"
      const { queryByText } = render(
         <BanquetTable>
            <BanquetRow className="testclass">
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(queryByText(text)).toHaveClass("cell", "testclass")
   })

   it("left hAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable>
            <BanquetRow hAlign="left">
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("justify-content: flex-start")
   })

   it("right hAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable>
            <BanquetRow hAlign="right">
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("justify-content: flex-end")
   })

   it("top vAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable>
            <BanquetRow vAlign="top">
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("align-items: flex-start")
   })

   it("bottom vAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable>
            <BanquetRow vAlign="bottom">
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("align-items: flex-end")
   })

   it("cell align overwrites row align", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable>
            <BanquetRow vAlign="top" hAlign="right">
               <BanquetCell vAlign="bottom" hAlign="left">
                  {text}
               </BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("align-items: flex-end")
      expect(getByText(text)).toHaveStyle("justify-content: flex-start")
   })
})
