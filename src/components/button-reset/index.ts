import { state } from "../../state";

class resetButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot?.querySelector("button")?.addEventListener("click", () => {
      state.restartGame();
    });
  }

  render() {
    const style = document.createElement("style");
    style.textContent = `
      .boton-reinicio {
            width: 322px;
            height: 87px;
            margin-top: 20px;
            border: solid #900C3F 10px;
            border-radius: 10px;
            background-color: #C70039;
            font-family: 'Odibee Sans', sans-serif;
            font-size: 45px;
            text-align: center;
            cursor: pointer;
      }
        .boton-reinicio:active {
            transform: scale(0.95); 
        }
      `;

    const button = document.createElement("button");
    button.textContent = this.textContent;
    button.className = "boton-reinicio";

    this.shadowRoot?.appendChild(style);
    this.shadowRoot?.appendChild(button);
  }
}
customElements.define("reset-button", resetButton);
