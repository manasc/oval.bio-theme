import React from "react";
import ReactDOM from "react-dom";

// render each component
import ManifestoPage from "./app/pages/ManifestoPage";
import ProductPage from "./app/pages/ProductPage";
import PodPage from "./app/pages/PodPage";

// manifesto page
const productPage = document.querySelector("#product-page");
if (productPage) ReactDOM.render(<ProductPage {...productPage.dataset} />, productPage);

const manifestoPage = document.querySelector("#manifesto-page");
if (manifestoPage) ReactDOM.render(<ManifestoPage {...manifestoPage.dataset} />, manifestoPage);

const podPage = document.querySelector("#pod-page");
if (podPage) ReactDOM.render(<PodPage {...podPage.dataset} />, podPage);
