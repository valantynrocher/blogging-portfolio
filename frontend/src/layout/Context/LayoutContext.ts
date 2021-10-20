import React from "react"

export type LayoutModeType = "light" | "dark"

export interface LayoutContextProps {
  mode: LayoutModeType
  toggleMode: () => void
  isMobile: boolean
}

export default React.createContext<LayoutContextProps>({} as any)
