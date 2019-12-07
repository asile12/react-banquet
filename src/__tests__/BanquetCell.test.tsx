import React from "react"
import { render } from "@testing-library/react"
import BanquetCell from "../components/BanquetCell"
import "@testing-library/jest-dom/extend-expect"

describe("Banquet Cell", () => {
   it("renders text children correctly", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell>{text}</BanquetCell>)
      expect(getByText(text)).toHaveTextContent(text)
   })

   it("renders react children correctly", () => {
      const { queryByTestId } = render(
         <BanquetCell data-testid="parent">
            <div data-testid="child">some text</div>
         </BanquetCell>
      )
      const parent = queryByTestId("parent")
      const child = queryByTestId("child")
      expect(parent).toContainElement(child)
   })

   it("has 'cell' class", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell>{text}</BanquetCell>)
      expect(getByText(text)).toHaveClass("cell")
   })

   it("forwards classNames", () => {
      const classTest = "some-class"
      const { getByText } = render(<BanquetCell className={classTest}>banquet</BanquetCell>)
      expect(getByText("banquet")).toHaveClass(classTest, "cell")
   })

   it("has 'header' class if header prop is true", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell header>{text}</BanquetCell>)
      expect(getByText(text)).toHaveClass("header")
   })

   it("does not have 'header' class if header prop is false", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell>{text}</BanquetCell>)
      expect(getByText(text)).not.toHaveClass("header")
   })
})
