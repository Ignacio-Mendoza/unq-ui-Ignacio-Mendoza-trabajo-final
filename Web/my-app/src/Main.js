import "./Main.css";
import { useHref } from "react-router-dom";
import lagarto from "./assets/lagarto.png";
import papel from "./assets/papel.png";
import piedra from "./assets/piedra.png";
import tijera from "./assets/tijeras.png";
import spock from "./assets/vulcano.png";
import atras from "./assets/atras.png";

const Main = () => {

  const retornarResult = (opcionMaquina, opcionUsuario) => {
    if (opcionUsuario == "piedra") {

      if (opcionMaquina == "piedra") {
        return ("Empate!");
      }
      else if (opcionMaquina == "papel") {
        return ("Perdiste");
      }
      else if (opcionMaquina == "tijera") {
        return ("Ganaste!");
      }
      else if (opcionMaquina == "lagarto") {
        return ("Ganaste!");
      }
      else if (opcionMaquina == "spock") {
        return ("Ganaste!");
      }
    }
    else if (opcionUsuario == "papel") {

      if (opcionMaquina == "piedra") {
        return ("Ganaste!");
      }
      else if (opcionMaquina == "papel") {
        return ("Empate!");
      }
      else if (opcionMaquina == "tijera") {
        return ("Perdiste!");
      }
      else if (opcionMaquina == "lagarto") {
        return ("Perdiste!");
      }
      else if (opcionMaquina == "spock") {
        return ("Ganaste!");
      }
    }
    else if (opcionUsuario == "tijera") {

      if (opcionMaquina == "piedra") {
        return ("Perdiste!");
      }
      else if (opcionMaquina == "papel") {
        return ("Ganaste");
      }
      else if (opcionMaquina == "tijera") {
        return ("Empate!");
      }
      else if (opcionMaquina == "lagarto") {
        return ("Ganaste!");
      }
      else if (opcionMaquina == "spock") {
        return ("Perdiste!");
      }
    }
    else if (opcionUsuario == "lagarto") {
      if (opcionMaquina == "piedra") {
        return ("Perdiste!");
      }
      else if (opcionMaquina == "papel") {
        return ("Ganaste!");
      }
      else if (opcionMaquina == "tijera") {
        return ("Perdiste");
      }
      else if (opcionMaquina == "lagarto") {
        return ("Empate");
      }
      else if (opcionMaquina == "spock") {
        return ("Ganaste!");
      }
    }
    else if (opcionUsuario == "spock") {
      if (opcionMaquina == "piedra") {
        return ("Ganaste!");
      }
      else if (opcionMaquina == "papel") {
        return ("Perdiste!");
      }
      else if (opcionMaquina == "tijera") {
        return ("Ganaste!");
      }
      else if (opcionMaquina == "lagarto") {
        return ("Perdiste!");
      }
      else if (opcionMaquina == "spock") {
        return ("Empate!");
      }
    }
    else if (opcionUsuario > 2) {
      return ("Vuelve a elegir");
    }
  }

  var nombres = ["piedra", "papel", "tijera", "lagarto", "spock"];

  var me;

  let countL= 0;
  let countT= 0;
  let countW= 0;



  const eleccionComputer = nombres[Math.floor(Math.random() * nombres.length)];

  // arreglar... 
  const incrementarCounter =(p) =>{
    if(p == "Ganaste!")
      return (countW = countW+ 1);
    else if(p == "Perdiste!")
      return (countL = countL + 1);
    else if (p == "Empate!")
      return (countT = countT + 1);
  }

  const elegirPiedra = () => {
    me = "piedra"
  };

  const elegirPapel = () => {
    me = "papel"
  };

  const elegirTijera = () => {
    me = "tijera"
  };
  const elegirLagarto = () => {
    me = "lagarto"
  };
  const elegirSpock = () => {
    me = "spock"
  };


  const resultadoFinal = () => {
    incrementarCounter(retornarResult(eleccionComputer, me));
    return (retornarResult(eleccionComputer, me));
  }

  return (
    <div className="main">
      <div className="tittle" >
        <a className="bttn-return" href="./">
          <img className="img-return" src={atras} />
        </a>
      </div>
      <div className="juego">
        <h1>esto es para 1 jugador</h1>
        <form>
          <div className="selectOption">
            <h2>seleccione una opcion</h2>
            <div className="listBttn">
              <button className="bttnOption" onClick={elegirPiedra()}>
                <img className="img-piedra" src={piedra} />
              </button>
              <button className="bttnOption" onClick={elegirPapel()}>
                <img className="img-papel" src={papel} />
              </button>
              <button className="bttnOption" onClick={elegirTijera()}>
                <img className="img-tijera" src={tijera} />
              </button>
              <button className="bttnOption" onClick={elegirLagarto()}>
                <img className="img-lagarto" src={lagarto} />
              </button>
              <button className="bttnOption" onClick={elegirSpock()}>
                <img className="img-spock" src={spock} />
              </button>
            </div>
          </div>

          <div className="result">
            <li>tu elegiste : {me}</li>
            <li>el resultado es...{resultadoFinal()}</li>
            <li>la computadora eligio : {eleccionComputer}</li>
          </div>
          <div className="counter">
            <h3>contador:</h3>
            <a>W: {countW}</a>
            <a>L: {countL}</a>
            <a>T: {countT}</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;