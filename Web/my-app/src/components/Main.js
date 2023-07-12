import "./Main.css";
import React, { useState, useEffect } from 'react';
import lagarto from "../assets/lagarto.png";
import papel from "../assets/papel.png";
import piedra from "../assets/piedra.png";
import tijera from "../assets/tijeras.png";
import spock from "../assets/vulcano.png";
import atras from "../assets/atras.png";
import reiniciar from "../assets/reiniciar.png";

const Main = () => {

  const [me, setMe] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [countW, setCountW] = useState(0); // Contador de victorias
  const [countL, setCountL] = useState(0); // Contador de derrotas
  const [countT, setCountT] = useState(0); // Contador de empates

  const elegir = (p) => {
    if (p === me) {
      setMe('');
      setComputerChoice(''); // Si seleccionas la misma opción, se reinicia el estado `me`
    } else {
      setMe(p);
    }
  };

  const reiniciarJuego = () => {
    setMe('');
    setComputerChoice('');
    setCountW(0);
    setCountL(0);
    setCountT(0);
  };

  const actualizarContadores = (resultado) => {
    if (resultado === "Ganaste!") {
      setCountW((prevCount) => prevCount + 1);
    } else if (resultado === "Perdiste!") {
      setCountL((prevCount) => prevCount + 1);
    } else if (resultado === "Empate!") {
      setCountT((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (me !== '') {
      const eleccionComputadora = eleccionComputer();
      setComputerChoice(eleccionComputadora);
      const resultado = retornarResult(eleccionComputadora, me);
      actualizarContadores(resultado);
    }
  }, [me]);



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
  }

  const eleccionComputer = () => {
    const nombres = ["piedra", "papel", "tijera", "lagarto", "spock"];
    const index = Math.floor(Math.random() * nombres.length);
    return nombres[index];
  };

  const resultadoFinal = () => {
    const result = retornarResult(computerChoice, me);
    return result;
  };

  return (
    <div className="main">
      <div className="botonesReturn" >
        <a className="bttn-return" href="./">
          <img className="img-return" src={atras} />
        </a>
        <button className="bttn-reiniciar" onClick={reiniciarJuego}>
          <img className="img-reiniciar" src={reiniciar} />
        </button>
      </div>
      <div className="juego">
        <h1>esto es para 1 jugador</h1>
        <div className="selectOption">
          <h2>seleccione una opcion</h2>
          <div className="listBttn">
            <button className="bttnOption" onClick={() => elegir("piedra")}>
              <img className="img-piedra" src={piedra} />
            </button>

            <button className="bttnOption" onClick={() => elegir("papel")} >
              <img className="img-papel" src={papel} />
            </button>

            <button className="bttnOption" onClick={() => elegir("tijera")} >
              <img className="img-tijera" src={tijera} />
            </button>

            <button className="bttnOption" onClick={() => elegir("lagarto")} >
              <img className="img-lagarto" src={lagarto} />
            </button>

            <button className="bttnOption" onClick={() => elegir("spock")} >
              <img className="img-spock" src={spock} />
            </button>
          </div>
        </div>

        <div className="result">
          <li>tu elegiste : {me}</li>
          <li>la computadora eligio : {computerChoice}</li>
          <li>el resultado es: {resultadoFinal()}</li>
        </div>
        <div className="counter">
          <h3>contador:</h3>
          <a className="win">W:{countW}   </a>
          <a className="lost">L:{countL}   </a>
          <a className="tie">T:{countT} </a>
        </div>
      </div>
    </div>
  );
};

export default Main;