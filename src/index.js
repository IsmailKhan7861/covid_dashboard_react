import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
