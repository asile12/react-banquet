import React from "react"

const Banquet = (props: { text: string; color: string; height: number }) => {
   const { color, text, height } = props
   return (
      <div
         style={{
            backgroundColor: color || "blue",
            height: height + "px",
         }}
      >
         {text}
      </div>
   )
}

export default Banquet
