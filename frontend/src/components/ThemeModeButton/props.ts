import React from "react"
import { ButtonBaseProps } from "@mui/material/ButtonBase"

export interface ThemeModeButtonProps {
  Wrapper: any
  className?: string
  ButtonProps?: ButtonBaseProps & {
    size: "small" | "medium" | "large" | "string"
  }
}
