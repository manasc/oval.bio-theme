import React from "react";
import ReactDOM from "react-dom";

// render each component
import Vision from "./app/components/Vision";
// import Choices from "./app/components/Choices";
import Customizer from "./app/components/Customizer";
import Header from "./app/components/Header";
import Tabs from "./app/components/Tabs";

// single components
const vision = document.querySelector("#vision");
if (vision) {
  ReactDOM.render(<Vision />, vision);
}

const productCustomizer = document.querySelector("#product-customizer");
if (productCustomizer) {
  ReactDOM.render(<Customizer />, productCustomizer);
}

// const header = document.querySelector("#main-header");
// if (header) {
//   console.log(header);
//   ReactDOM.render(<Header {...header.dataset} />, header);
// }

const tabs = document.querySelector("#tabs");
if (tabs) {
  ReactDOM.render(<Tabs {...tabs.dataset} />, tabs);
}