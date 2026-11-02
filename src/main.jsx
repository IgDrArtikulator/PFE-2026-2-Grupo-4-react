import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// CSS único do projeto (o mesmo style.css do site Vanilla, sem alterações)
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
