import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

serviceWorker.register();
