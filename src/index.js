import React from "react";
import {Provider} from "react-redux";
import { StrictMode } from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";
import App from "./App"
import store from "./store";



root.render(

  <Provider >
    <App />
  </Provider >
document.getElementById("root");
);

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(

//   <StrictMode>
//      <Provider >
//     <App />
//     </Provider >
//   </StrictMode>
// );
