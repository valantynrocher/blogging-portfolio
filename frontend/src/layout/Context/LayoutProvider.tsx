import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React, { useCallback, useEffect, useState } from "react";
import { themes } from "../../utils";
import LayoutContext, { LayoutModeType } from "./LayoutContext";

const LayoutProvider = (props: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<LayoutModeType>("light");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(650));

  const toggleMode = useCallback(() => {
    const nextMode = mode === "dark" ? "light" : "dark";
    setMode(nextMode);
    localStorage.setItem("preferred-theme", nextMode);
  }, [mode]);

  useEffect(() => {
    const localMode = localStorage.getItem("preferred-theme");
    if (localMode) {
      // update LayoutContext with current mode within localStorage
      setMode(localMode as LayoutModeType);
    } else {
      // store mode within localStorage
      localStorage.setItem("preferred-theme", mode);
    }
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        mode,
        toggleMode,
        isMobile,
      }}
    >
      <StyledEngineProvider>
        <ThemeProvider theme={themes[mode]}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </StyledEngineProvider>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
