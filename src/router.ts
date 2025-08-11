// vite-project/src/router.ts
import { initInicio } from "./pages/inicio/index.ts";
import { initInstrucciones } from "./pages/introduccion/index.ts";
import { initJuego } from "./pages/juego/index.ts";
import { initPelea } from "./pages/pelea/index.ts";
import { initGanaste } from "./pages/resultado/ganaste";
import { initPerdiste } from "./pages/resultado/perdiste";

type RouterPath = {
  pathRegex: RegExp;
  render: (params: { goTo: (path: string) => void }) => HTMLElement;
};
// Definicion de rutas, con trres ruedas de ejemplo
const routes: RouterPath[] = [
  {
    pathRegex: /^\/inicio$/i,
    render: ({ goTo }) => {
      const page = initInicio({ goTo });
      return page;
    },
  },
  {
    pathRegex: /^\/$/i,
    render: ({ goTo }) => {
      const page = initInicio({ goTo });
      return page;
    },
  },
  {
    pathRegex: /^\/instrucciones$/i,
    render: ({ goTo }) => {
      const page = initInstrucciones({ goTo });
      return page;
    },
  },
  {
    pathRegex: /^\/jugar$/i,
    render: ({ goTo }) => {
      const page = initJuego({ goTo });
      return page;
    },
  },
  {
    pathRegex: /^\/pelea$/i,
    render: ({ goTo }) => {
      const page = initPelea({ goTo });
      return page;
    },
  },
  {
    pathRegex: /^\/resultadoGanaste$/i,
    render: ({ goTo }) => {
      const page = initGanaste({ goTo });
      return page;
    },
  },
  {
    pathRegex: /^\/resultadoPerdiste$/i,
    render: ({ goTo }) => {
      const page = initPerdiste({ goTo });
      return page;
    },
  },
];

// Funcion para renderizar rutas en una aplicación web simple
function goTo(path: string): void {
  window.history.pushState({}, "", path);
  renderPath(path);
}
// recibe el ruta y renderiza el contenido
function renderPath(path: string): void {
  const route = routes.find((route) => route.pathRegex.test(path));

  if (route) {
    const app = document.querySelector(".root");
    if (app) {
      app.innerHTML = ""; // limpia el contenido previo
      app.appendChild(route.render({ goTo }));
    }
  } else {
    console.warn(`el path "${path}" no ha sido encontrado`);
  }
}

function getCleanPathFromURL() {
  const fullPath = window.location.pathname;
  const basepath = "/vite-project"; // Cambia esto según tu repo

  if (fullPath.startsWith(basepath)) {
    return fullPath.replace(basepath, "") || "/"; // Devuelve '/' si el path es vacío
  }
  return fullPath; // Devuelve el fullPath sin cambios si no comienza con el basepath
}

// Inicializa el router
// Esta función se llama al cargar la aplicación para establecer la ruta inicial
export function initRouter(): void {
  const initialPath = getCleanPathFromURL();

  // Llama a renderPath con la ruta inicial.
  renderPath(initialPath);
}
