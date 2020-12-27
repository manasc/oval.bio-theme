import React from "react";
import ReactDOM from "react-dom";

// render each component
import Header from "./app/components/Header";
import ManifestoPage from "./app/pages/ManifestoPage";
import ProductPage from "./app/pages/ProductPage";
import PodPage from "./app/pages/PodPage";

// manifesto pagef
const headerBlock = document.querySelector("#main-header");
headerBlock && ReactDOM.render(<Header {...headerBlock.dataset} />, headerBlock);

const productPage = document.querySelector("#product-page");
productPage && ReactDOM.render(<ProductPage {...productPage.dataset} />, productPage);

const manifestoPage = document.querySelector("#manifesto-page");
manifestoPage && ReactDOM.render(<ManifestoPage {...manifestoPage.dataset} />, manifestoPage);

const podPage = document.querySelector("#pod-page");
podPage && ReactDOM.render(<PodPage {...podPage.dataset} />, podPage);
