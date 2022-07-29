import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import Title from "./shared/components/Title";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
