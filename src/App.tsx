import React from "react";

import "./App.css";

import "./Assets/Scss/Config.scss";
import "./Assets/Scss/typo.scss";

import CustomRoutes from "./Routes/customRoutes";
function App() {
  return (
    <div className="App">
      <CustomRoutes />
    </div>
  );
}

export default App;
