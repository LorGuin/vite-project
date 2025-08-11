import { state } from "../../state.ts";
// @ts-ignore: Unused variable
type Jugada = "piedra" | "papel" | "tijera";

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

customElements.define(
  "computer-play",
  class extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const style = document.createElement("style");
      style.textContent = `
        .root {
          height: 25rem;
          width: 10rem;
          };
        `;

      this.shadow.appendChild(style);
      this.render();
    }

    render() {
      const currentState = state.getState();
      const jugadaPc = currentState.currentGame.computerPlay;

      const div = document.createElement("div");

      if (jugadaPc === "tijera") {
        div.innerHTML = `
                <img src="${imgTijera}" alt="Tijera">
            `;
      } else if (jugadaPc === "papel") {
        div.innerHTML = `
                <img src="${imgPapel}" alt="Papel">
            `;
      } else if (jugadaPc === "piedra") {
        div.innerHTML = `
                <img src="${imgPiedra}" alt="Piedra">
            `;
      }
      this.shadow.appendChild(div);
    }
  }
);
