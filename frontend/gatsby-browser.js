import React from "react"
import LayoutProvider from "./src/layout/Context/LayoutProvider"
export const wrapRootElement = ({ element, props }) => {
  return <LayoutProvider {...props}>{element}</LayoutProvider>
}
