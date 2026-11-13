import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// CSS único do projeto: vale para todas as páginas
import "./css/style.css";
import App from "./App.jsx";

// O BrowserRouter envolve o App: assim <Routes>, <Route> e <Link>
// funcionam em qualquer componente do projeto.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
