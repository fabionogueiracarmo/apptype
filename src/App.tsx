import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import Title from "./shared/components/Title";
import Theme from "./shared/themes";
import { LightTheme } from "./shared/themes/Light";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
