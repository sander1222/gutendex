import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Shelf from "./components/shelf.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
    <Shelf />
    <Footer />
  </StrictMode>
);
