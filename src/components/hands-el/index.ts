// componente de manos personalizado
// Este componente muestra imágenes de papel, piedra y tijera
customElements.define(
  "hands-el",
  class extends HTMLElement {
    shadow: ShadowRoot;
    size;
    constructor() {
      super();
      this.size = this.getAttribute("size");
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const containerImg = document.createElement("div");
      const imgPapelEl = document.createElement("img");
      const imgPiedraEl = document.createElement("img");
      const imgTijeraEl = document.createElement("img");

      const imgPapel = new URL("../images/Papel.png", import.meta.url) as any;
      imgPapelEl.src = imgPapel;
      const imgPiedra = new URL("../images/Piedra.png", import.meta.url) as any;
      imgPiedraEl.src = imgPiedra;
      const imgTijera = new URL("../images/Tijera.png", import.meta.url) as any;
      imgTijeraEl.src = imgTijera;

      containerImg.className = "container";
      const style = document.createElement("style");
      style.textContent = `
      
      .container {
        display: flex;
        justify-content: center;
        width: 100vh;
      }
       img {
      transition: transform 0.2s; /* Añadir una transición suave */
    }
    img:hover {
      cursor: pointer;
      transform: scale(1.1); /* Ejemplo de efecto al hacer hover */
    }
      `;

      containerImg.appendChild(imgPapelEl);
      containerImg.appendChild(imgPiedraEl);
      containerImg.appendChild(imgTijeraEl);

      this.shadow.appendChild(style);
      this.shadow.appendChild(containerImg);
    }
  }
);
