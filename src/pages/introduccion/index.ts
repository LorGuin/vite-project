export function initInstrucciones(params: { goTo: (arg0: string) => void }) {
  const div = document.createElement("div");
  div.className = "init-instrucciones";
  div.innerHTML = `
    
    <section class="init-instrucciones__section">
      <h1 class="titulo">Instrucciones</h1>
    
    <div class="init-instrucciones_contenido">
      <p>El juego consiste en elegir entre piedra, papel o tijera.</p>
      <p>La piedra gana a las tijeras, las tijeras ganan al papel y el papel gana a la piedra.</p>
      <p>¡Elige sabiamente y diviértete!</p>
    </div>

    <div class="instructions-page__button">
      <custom-button class="boton-instrucciones">Volver al inicio</custom-button>
    </div>
    <div class="instructions-page__button">
      <custom-button class="boton-iniciar">Jugar</custom-button>
    </div>

    <div class="init-page__hands">
          <hands-el></hands-el>
    </div>

    <div class="boton-reinicio">
      <reset-button>Reinicio</reset-button>
    </div>
   </section>
    
  `;

  const button = div.querySelector(".boton-instrucciones");
  button?.addEventListener("click", () => {
    params.goTo("/inicio");
  });
  const buttonIniciar = div.querySelector(".boton-iniciar");
  buttonIniciar?.addEventListener("click", () => {
    params.goTo("/jugar");
  });

  return div;
}
