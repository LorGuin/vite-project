type Jugada = "piedra" | "papel" | "tijera";
// @ts-ignore: Unused variable
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};

// definimos el tipo de estado con sus datos
const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
      resultado: "",
    },
    history: [
      {
        misPuntos: 0,
        pcPuntos: 0,
      },
    ],
  },
  listener: [] as Array<() => void>,

  // función getState para acceder al estado
  getState() {
    return this.data;
  },
  // @ts-ignore: Unused variable
  setState(newState) {
    this.data = newState;
    for (const callback of this.listener) {
      callback();
    }
  },
  // subscribe para escuchar cambios en el estado
  // @ts-ignore: Unused variable
  subscribe(callback: (any) => any) {
    // @ts-ignore: Unused variable
    this.listener.push(callback);
  },

  // setMove para actualizar el estado con el movimiento del jugador
  setMove(move: Jugada) {
    const currentState = state.getState();
    currentState.currentGame.myPlay = move;
  },

  // computerPlay para simular el movimiento de la computadora
  // elige una jugada aleatoria entre "piedra", "papel", "tijera"
  computerPlay() {
    const currentState = this.getState();
    const posibilidades: Jugada[] = ["piedra", "papel", "tijera"];
    const jugadaAleatoria: Jugada =
      posibilidades[Math.floor(Math.random() * posibilidades.length)];
    currentState.currentGame.computerPlay = jugadaAleatoria;
    return jugadaAleatoria;
  },

  // setResult para actualizar el resultado del juego
  pushToHistory(play: { misPuntos: number; pcPuntos: number }) {
    const currentState = this.getState();
    currentState.history.push(play);
  },

  // getHistory para obtener el historial de juegos
  getHistory() {
    const currentState = state.getState();
    const history = localStorage.getItem("history");
    if (history) {
      const parsedHistory = JSON.parse(history);
      state.data.history = parsedHistory;
    }
    return currentState.history;
  },

  // whoWins para determinar quién gana el juego
  // compara la jugada del jugador con la jugada de la computadora
  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    const currentState = this.getState();
    let ganador = "";
    if (myPlay == "tijera" && computerPlay == "papel") {
      ganador = "ganaste";
    } else if (myPlay == "papel" && computerPlay == "piedra") {
      ganador = "ganaste";
    } else if (myPlay == "piedra" && computerPlay == "tijera") {
      ganador = "ganaste";
    } else if (myPlay == computerPlay) {
      ganador = "empate";
    } else {
      ganador = "perdiste";
    }
    currentState.currentGame.resultado = ganador;
    return ganador;
  },

  // countPoints para actualizar los puntos del jugador y de la computadora
  // según el resultado del juego
  // @ts-ignore: Unused variable
  countPoints(resultado) {
    const currentState = this.getState();
    const history = this.getHistory();
    if (resultado == "ganaste") {
      history[currentState.history.length - 1].misPuntos++;
    } else if (resultado == "perdiste") {
      history[currentState.history.length - 1].pcPuntos++;
    }
    localStorage.setItem("history", JSON.stringify(currentState.history));
    return currentState.history;
  },

  restartGame() {
    const currentState = this.getState();
    const history = this.getHistory();
    history[currentState.history.length - 1].misPuntos = 0;
    history[currentState.history.length - 1].pcPuntos = 0;
    localStorage.setItem("history", JSON.stringify(currentState.history));
  },
};
export { state };
