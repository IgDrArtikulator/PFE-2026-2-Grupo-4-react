import { useEffect, useState } from "react";

// Hook do tema (aula "Modo claro e escuro no React").
// O modo guardado é "light", "dark" ou "system". O tema aplicado na página
// é o atributo data-theme do <html>: o CSS (seção 9) troca as cores por ele.

// Mesma chave usada pelo script do index.html
const CHAVE = "tema";

// Cor da barra do navegador no celular, para cada tema (mesmas do --cor-fundo)
const CORES_BARRA = { dark: "#0b0b0b", light: "#f6f5f1" };

const consultaEscuro = () => window.matchMedia("(prefers-color-scheme: dark)");

// "system" vira "dark" ou "light", conforme a preferência do computador/celular
function resolver(modo) {
  if (modo !== "system") return modo;
  return consultaEscuro().matches ? "dark" : "light";
}

// localStorage pode falhar (navegação privada): nesse caso usa "system"
function lerModo() {
  try {
    return localStorage.getItem(CHAVE) || "system";
  } catch {
    return "system";
  }
}

export function useTema() {
  const [modo, setModo] = useState(lerModo);

  useEffect(() => {
    function aplicar() {
      const tema = resolver(modo);
      document.documentElement.dataset.theme = tema;
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", CORES_BARRA[tema]);
    }

    aplicar();
    try {
      localStorage.setItem(CHAVE, modo);
    } catch {
      // sem localStorage: o tema vale só enquanto a página estiver aberta
    }

    // Só no modo "system" o site acompanha quando o sistema troca de tema
    if (modo !== "system") return;
    const consulta = consultaEscuro();
    consulta.addEventListener("change", aplicar);
    return () => consulta.removeEventListener("change", aplicar);
  }, [modo]);

  return [modo, setModo];
}
