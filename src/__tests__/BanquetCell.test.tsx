import React from "react"
import { render } from "@testing-library/react"
import { BanquetCell } from "../components/BanquetCell"
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
   it("hAlign defaults to center", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell>{text}</BanquetCell>)
      expect(getByText(text)).toHaveStyle("justify-content: center")
   })
   it("left hAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell hAlign="left">{text}</BanquetCell>)
      expect(getByText(text)).toHaveStyle("justify-content: flex-start")
   })
   it("right hAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell hAlign="right">{text}</BanquetCell>)
      expect(getByText(text)).toHaveStyle("justify-content: flex-end")
   })
   it("vAlign defaults to center", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell>{text}</BanquetCell>)
      expect(getByText(text)).toHaveStyle("align-items: center")
   })
   it("top vAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell vAlign="top">{text}</BanquetCell>)
      expect(getByText(text)).toHaveStyle("align-items: flex-start")
   })
   it("bottom vAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(<BanquetCell vAlign="bottom">{text}</BanquetCell>)
      expect(getByText(text)).toHaveStyle("align-items: flex-end")
   })
})
