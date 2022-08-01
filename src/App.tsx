import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import { DarkTheme } from "./shared/themes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={DarkTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
