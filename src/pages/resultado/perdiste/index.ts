// @ts-ignore: Unused variable
export function initPerdiste(params) {
  const div = document.createElement("div");

  div.className = "res-perdiste";
  div.innerHTML = `
   <div class="res-perdiste__img">
            <perdiste-el></perdiste-el>
        </div>
        <div class="res-perdiste__score">
            <score-el></score-el>
        </div>
        <div class="res-perdiste__button">
            <button-volver-jugar>Volver a jugar</button-volver-jugar>
        </div>
    `;

  const button = div.querySelector("button-volver-jugar");
  // @ts-ignore: Unused variable
  const shadowButton = button?.shadowRoot.querySelector("button");
  console.log(button);

  shadowButton?.addEventListener("click", () => {
    params.goTo("/instrucciones");
  });
  return div;
}
