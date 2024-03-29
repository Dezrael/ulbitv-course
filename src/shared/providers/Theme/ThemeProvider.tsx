import React, { useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const contextProps = useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextProps}>
      {children}
    </ThemeContext.Provider>
  );
};
