import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// CRUD
// import { Provider } from "react-redux";
// import store from "./store/store";

// Again CRUD
// import { Provider } from "react-redux";
// import store from "./store/store";

// todo
// import { Provider } from "react-redux";
// import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <Provider store={store}> */}
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
    {/* </Provider> */}
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
