class ButtonVolverJugar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const button = this.shadowRoot!.querySelector("button");
    if (button) {
      button.addEventListener("click", () => {
        // Your event handling logic here
        console.log("Button clicked");
      });
    }
  }

  render() {
    const style = document.createElement("style");
    style.textContent = `
       .root {
         width: 322px;
         height: 87px;
         border: solid #001997 10px;
         border-radius: 10px;
         background-color: #006CFC;
         font-family: 'Odibee Sans', sans-serif;
         font-size: 45px;
         text-align: center;
         color: white;
       }`;

    const button = document.createElement("button");
    button.textContent = this.textContent;
    button.className = "root";

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(button);
      const shadowButton = button;
      shadowButton?.addEventListener("click", () => {
        window.location.href = "/instrucciones";
      });
    }
  }
}

customElements.define("button-volver-jugar", ButtonVolverJugar);
