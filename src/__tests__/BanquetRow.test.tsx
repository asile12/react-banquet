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
})
