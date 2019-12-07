import React from "react"
import { render } from "@testing-library/react"
import BanquetTable from "../components/BanquetTable"
import "@testing-library/jest-dom/extend-expect"

describe("Banquet Table", () => {
   it("renders text children correctly", () => {
      const text = "some text"
      const { getByText } = render(<BanquetTable>{text}</BanquetTable>)
      expect(getByText(text)).toHaveTextContent(text)
   })

   it("has 'banquet' class", () => {
      const text = "some text"
      const { getByText } = render(<BanquetTable>{text}</BanquetTable>)
      expect(getByText(text)).toHaveClass("banquet")
   })

   it("forwards classNames", () => {
      const classTest = "test"
      const { getByText } = render(<BanquetTable className={classTest}>banquet</BanquetTable>)
      expect(getByText("banquet")).toHaveClass(classTest, "banquet")
   })

   // TODO test borders

   it("has css-grid property", () => {
      const text = "some text"
      const { getByText } = render(<BanquetTable>{text}</BanquetTable>)
      expect(getByText(text)).toHaveStyle("display: grid")
   })
})
