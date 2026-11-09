import { Routes, Route } from "react-router-dom";

import Hub from "./paginas/Hub";
import Pkz from "./paginas/Pkz";
import OneToOne from "./paginas/OneToOne";

// Só existe 1 index.html. Cada "página" é um componente,
// escolhido pela URL através do <Routes> e <Route>.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/pkz" element={<Pkz />} />
      <Route path="/one-to-one" element={<OneToOne />} />
    </Routes>
  );
}

export default App;
