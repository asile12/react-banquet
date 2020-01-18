import React from "react"
import { render } from "@testing-library/react"
import BanquetTable from "../components/BanquetTable"
import "@testing-library/jest-dom/extend-expect"
import BanquetRow from "../components/BanquetRowWrapper"
import BanquetCell from "../components/BanquetCell"
import { CustomError } from "../errorHandling/CustomError"

describe("Banquet Table: style tests", () => {
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

   it("converts undefined width to auto", () => {
      const { getByTestId } = render(
         <BanquetTable data-testid="table" columnProps={[{}]}>
            <BanquetRow>
               <BanquetCell>text</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByTestId("table")).toHaveStyle("grid-template-columns: auto")
   })
   it("sets all columns' width to auto if columnProps is undefined", () => {
      const { getByTestId } = render(
         <BanquetTable data-testid="table">
            <BanquetRow>
               <BanquetCell>text</BanquetCell>
               <BanquetCell>text</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByTestId("table")).toHaveStyle("grid-template-columns: repeat(2,auto)")
   })
   it("sets the columns' width as defined in columnProps", () => {
      const { getByTestId } = render(
         <BanquetTable data-testid="table" columnProps={[{ width: "100px" }, { width: "2fr" }]}>
            <BanquetRow>
               <BanquetCell>text</BanquetCell>
               <BanquetCell>text</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByTestId("table")).toHaveStyle("grid-template-columns: 100px 2fr")
   })
   it("passes down classNames defined in columnProps", () => {
      const { getByText } = render(
         <BanquetTable
            data-testid="table"
            columnProps={[{ className: "class1" }, { className: "class2" }]}
         >
            <BanquetRow>
               <BanquetCell>cell1</BanquetCell>
               <BanquetCell>cell2</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText("cell1")).toHaveClass("class1")
      expect(getByText("cell1")).not.toHaveClass("class2")
      expect(getByText("cell2")).toHaveClass("class2")
      expect(getByText("cell2")).not.toHaveClass("class1")
   })
   it("table left hAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable hAlign="left">
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("justify-content: flex-start")
   })

   it("table right hAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable hAlign="right">
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("justify-content: flex-end")
   })

   it("table top vAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable vAlign="top">
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("align-items: flex-start")
   })

   it("table bottom vAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable vAlign="bottom">
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("align-items: flex-end")
   })

   it("column left hAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable columnProps={[{ hAlign: "left" }]}>
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("justify-content: flex-start")
   })

   it("table right hAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable columnProps={[{ hAlign: "right" }]}>
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("justify-content: flex-end")
   })

   it("table top vAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable columnProps={[{ vAlign: "top" }]}>
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("align-items: flex-start")
   })

   it("table bottom vAlign renders properly", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable columnProps={[{ vAlign: "bottom" }]}>
            <BanquetRow>
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("align-items: flex-end")
   })

   it("row align overwrites table align", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable vAlign="top" hAlign="right">
            <BanquetRow vAlign="bottom" hAlign="left">
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("align-items: flex-end")
      expect(getByText(text)).toHaveStyle("justify-content: flex-start")
   })
   it("column align overwrites row align", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable columnProps={[{ vAlign: "top", hAlign: "right" }]}>
            <BanquetRow vAlign="bottom" hAlign="left">
               <BanquetCell>{text}</BanquetCell>
            </BanquetRow>
         </BanquetTable>
      )
      expect(getByText(text)).toHaveStyle("align-items: flex-start")
      expect(getByText(text)).toHaveStyle("justify-content: flex-end")
   })
   it("cell align overwrites column align", () => {
      const text = "some text"
      const { getByText } = render(
         <BanquetTable columnProps={[{ vAlign: "top", hAlign: "right" }]}>
            <BanquetRow>
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

describe("Banquet Table: other tests", () => {
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

   it("throws error if the number of columnProps is wrong", () => {
      const error = new CustomError(
         1000,
         "The number of cells and the number of columnProps don't match."
      )
      expect(() => {
         render(
            <BanquetTable columnProps={[]}>
               <BanquetRow>
                  <BanquetCell>text</BanquetCell>
               </BanquetRow>
            </BanquetTable>
         )
      }).toThrow(error)
   })
})
