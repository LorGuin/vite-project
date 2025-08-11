import "../../components/computer-play";
let jugada = "";
export function initJuego(params: { goTo: (path: string) => void }) {
  const div = document.createElement("div");

  // Agregamos las imagenes de las manos al componente
  const imgPapel = new URL(
    "../../components/images/Papel.png",
    import.meta.url
  ) as any;
  const imgPiedra = new URL(
    "../../components/images/Piedra.png",
    import.meta.url
  ) as any;
  const imgTijera = new URL(
    "../../components/images/Tijera.png",
    import.meta.url
  ) as any;

  div.className = "init-juego";
  div.innerHTML = `
        <section class="pagina-juego">

              <div class="init-juego__rotadas">
                  <div>
                      <img src="${imgPapel}" alt="Papel">
                  </div>

                  <div>
                      <img src="${imgPiedra}" alt="Piedra">
                  </div>

                  <div>
                      <img src="${imgTijera}" alt="Tijera">
                  </div>
              </div>

              <div class="count-down">
                  <count-down></count-down>
              </div>

              <div class="init-juego__hands">
                  <div>
                      <img src="${imgPapel}" alt="Papel" class="papel">
                  </div>
                  <div>
                      <img src="${imgPiedra}" alt="Piedra" class="piedra">
                  </div>
                  <div>
                      <img src="${imgTijera}" alt="Tijera" class="tijera">
                  </div>
              </div>

        </section>
    `;

  // Agregamos los eventos a las imagenes de las manos
  const elegiPapel = div.querySelector(".papel");
  const elegiPiedra = div.querySelector(".piedra");
  const elegiTijera = div.querySelector(".tijera");

  // Evento para elegir papels
  elegiPapel?.addEventListener("click", () => {
    clearTimeout(timeOutReturn);
    jugada = "papel";
    setTimeout(() => {
      params.goTo("/pelea");
    }, 1000);
  });

  // Evento para elegir piedra
  elegiPiedra?.addEventListener("click", () => {
    clearTimeout(timeOutReturn);
    jugada = "piedra";
    setTimeout(() => {
      params.goTo("/pelea");
    }, 1000);
  });

  // Evento para elegir tijera
  elegiTijera?.addEventListener("click", () => {
    clearTimeout(timeOutReturn);
    jugada = "tijeras";
    setTimeout(() => {
      params.goTo("/pelea");
    }, 1000);
  });

  // Agregamos la salida a instrucciones
  const timeOutReturn = setTimeout(() => {
    params.goTo("/instrucciones");
  }, 5000);

  return div;
}

export { jugada };
