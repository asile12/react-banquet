import React from "react"
import { render } from "@testing-library/react"
import BanquetTable from "../components/BanquetTable"
import "@testing-library/jest-dom/extend-expect"
import BanquetRow from "../components/BanquetRow"
import BanquetCell from "../components/BanquetCell"

describe("Banquet Table", () => {
   it("renders text children correctly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable>
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveTextContent(text)
   })

   it("has 'banquet' class", () => {
      const text = "some text"
      const { getByTestId } = render(
         <BanquetTable data-testid="table">
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByTestId("table")).toHaveClass("banquet")
   })

   it("forwards classNames", () => {
      const classTest = "test"
      const { getByTestId } = render(
         <BanquetTable className={classTest} data-testid="table">
            <BanquetRow>
               <BanquetCell>banquet</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByTestId("table")).toHaveClass(classTest, "banquet")
   })

   // TODO test borders
   // FIXME tesr

   it("has css-grid property", () => {
      const text = "some text"
      const { getByTestId } = render(
         <BanquetTable data-testid="table">
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByTestId("table")).toHaveStyle("display: grid")
   })

   it("evens the number of cells", () => {
      const text = "some text"
      const { getByTestId } = render(
         <BanquetTable data-testid="table">
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
               <BanquetCell>{text}</BanquetCell>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByTestId("table").getElementsByTagName("DIV").length).toBe(6)
   })
})
