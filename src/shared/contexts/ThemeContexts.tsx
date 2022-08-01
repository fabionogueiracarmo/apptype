import { ThemeProvider } from "@emotion/react";
import { createContext, ReactNode, useCallback, useState } from "react";

import { DarkTheme, LightTheme } from "../themes";

interface IThemeContextsData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}
/* 
type Props = {
  children?: React.ReactNode;
};

const ThemeContext = createContext({} as IThemeContextsData);

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
 */
