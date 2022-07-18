import React from "react";

import "./App.css";

import "./Assets/Scss/Config.scss";
import "./Assets/Scss/typo.scss";

import CustomRoutes from "./Routes/customRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
