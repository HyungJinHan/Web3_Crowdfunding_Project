import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import App from "./App";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider activeChain={ChainId.Goerli}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThirdwebProvider>
);
