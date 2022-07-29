import React from 'react';

import Title from './shared/components/Title';
import AppRoutes from './routes'

import {BrowserRouter} from "react-router-dom";

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
