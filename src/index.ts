import { initRouter } from "./router.ts";
import "./components/button-inicio"; // Importa el componente de botón personalizado
import "./components/hands-el"; // Importa el componente de manos personalizado
import "./components/computer-play"; // Importa el componente de juego de la computadoras
import "./components/countDown-comp"; // Importa el componente de cuenta regresiva
import "./components/button-reset"; // Importa el componente de botón de reinicio
import "./components/ganaste-el"; // Importa el componente de ganaste
import "./components/perdiste-el"; // Importa el componente de perdiste
import "./components/score"; // Importa el componente de score
import "./components/button-jugar"; // Importa el componente de botón jugar
import "./components/button-volver-a-jugar"; // Importa el componente de botón volver a jugar

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    initRouter(); // Inicializa el router una vez que el DOM esté listo
  });
})();
