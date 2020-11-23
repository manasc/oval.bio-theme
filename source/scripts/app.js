import React from "react";
import ReactDOM from "react-dom";

// render each component
import Customizer from "./app/components/Customizer";
import ManifestoPage from "./app/pages/ManifestoPage";
import PodPage from "./app/pages/PodPage";

// single components
// const vision = document.querySelector("#vision");
// if (vision) {
//   ReactDOM.render(<Vision />, vision);
// }

const productCustomizer = document.querySelector("#product-customizer");
if (productCustomizer) {
    ReactDOM.render(<Customizer />, productCustomizer);
}

// manifesto page
const manifestoPage = document.querySelector("#manifesto-page");
if (manifestoPage) ReactDOM.render(<ManifestoPage />, manifestoPage);

const podPage = document.querySelector("#pod-page");
if (podPage) ReactDOM.render(<PodPage />, podPage);
