customElements.define(
  "jugar-buttom",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const style = document.createElement("style");
      style.innerHTML = `
           .root {
              width:322px;
              heigth: 87px;
              border: solid #001997 10px
              border-radius: 10px;
              background-color: #006CFC;
              font-family: "Odibee Sans", sans-serif;
              font-size: 45px;
              text-aling: center;
              cursor: pointer;
           }
           `;
      this.shadow.appendChild(style);
      this.render();
    }
    render() {
      const button = document.createElement("button");
      button.textContent = this.textContent;
      button.className = "root";
      this.shadow.appendChild(button);
    }
  }
);
