import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { ConfigProvider } from "antd";
import es_ES from "antd/locale/es_ES";
import "./reset.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider locale={es_ES}>
    <App />
  </ConfigProvider>
);
