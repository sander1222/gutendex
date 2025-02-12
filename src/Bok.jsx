import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Bok.css";
import Bok from "./components/bok.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Bok />
  </StrictMode>
);
