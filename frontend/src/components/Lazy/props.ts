import {
  CollapseProps,
  FadeProps,
  GrowProps,
  SlideProps,
  ZoomProps,
} from "@mui/material"
import { RequiredChild } from "../../utils/types"

export type LazyTypes = "collapse" | "fade" | "grow" | "slide" | "zoom"

type LazyType<T extends LazyTypes> = {
  type: T
  delay?: number
  in?: boolean
  dry?: boolean
}

export type LazyProps<T extends LazyTypes> = LazyType<T> &
  RequiredChild<React.ReactElement | undefined> &
  Omit<
    T extends "collapse"
      ? CollapseProps
      : T extends "fade"
      ? FadeProps
      : T extends "grow"
      ? GrowProps
      : T extends "slide"
      ? SlideProps
      : T extends "zoom"
      ? ZoomProps
      : Record<string, never>,
    "children" | "in"
  >
