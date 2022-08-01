/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { DarkTheme, LightTheme } from "../themes";

interface IThemeContextsData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextsData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

// eslint-disable-next-line react/prop-types
export const AppThemeProvider: React.FC<IProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;
    return DarkTheme;
  }, [themeName]);
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: 300,
            height: 300,
            bgColor: theme.palette.background.default,
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
