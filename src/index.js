import React from "react";
import ReactDOM from "react-dom/client";
import FunctionalUseRefTest from "./Component/Ref/FunctionalUseRefTest";
// import AppClass from "./AppClass";
// import App, { userName, lastName } from "./App";
import "./index.css";
// import ClassCounter from "./Component/ClassCounter.js/ClassCounter";
// import ClassComponentLife from "./Component/ClassCounterLife/ClassComponentLife";
// import FunctionalCounterLife from "./Component/FunctionalCounterLife/FunctionalCounterLife";
// import ClassRef from "./Component/Ref/ClassRef";
// import FunctionalRef from "./Component/Ref/FunctionalRef";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <h2>{userName}</h2> */}
    {/* <h2>{lastName}</h2> */}
    {/* <AppClass /> */}
    {/* <ClassComponentLife /> */}
    {/* <FunctionalCounterLife /> */}
    {/* <ClassRef />
     */}
    {/* <FunctionalRef />
     */}
    <FunctionalUseRefTest />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
