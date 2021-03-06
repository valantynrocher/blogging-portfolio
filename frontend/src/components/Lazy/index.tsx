import {
  Collapse,
  CollapseProps,
  Fade,
  FadeProps,
  Grow,
  GrowProps,
  Slide,
  SlideProps,
  Zoom,
  ZoomProps,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { LazyProps, LazyTypes } from "./props";

function Lazy<T extends LazyTypes>(
  props: LazyProps<T>
): React.ReactElement | null {
  const [show, setShow] = useState<boolean>(false);

  const timer =
    typeof props.delay === "number"
      ? setTimeout(() => {
          setShow(true);
        }, props.delay)
      : null;

  useEffect(() => {
    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  if (props.dry === true) {
    return props.children;
  }

  const children = <div style={{ overflow: "hidden" }}>{props.children}</div>;
  const view = typeof props.in !== "undefined" ? props.in : show;
  const baseProps = { ...props, dry: undefined };
  switch (props.type) {
    case "collapse":
      return (
        <Collapse {...(baseProps as CollapseProps)} in={view}>
          {children}
        </Collapse>
      );
    case "fade":
      return (
        <Fade {...(baseProps as FadeProps)} in={view}>
          {children}
        </Fade>
      );
    case "grow":
      return (
        <Grow {...(baseProps as GrowProps)} in={view}>
          {children}
        </Grow>
      );
    case "slide":
      return (
        <Slide {...(baseProps as SlideProps)} in={view}>
          {children}
        </Slide>
      );
    case "zoom":
      return (
        <Zoom {...(baseProps as ZoomProps)} in={view}>
          {children}
        </Zoom>
      );
    default:
      return null;
  }
}

export default Lazy;
