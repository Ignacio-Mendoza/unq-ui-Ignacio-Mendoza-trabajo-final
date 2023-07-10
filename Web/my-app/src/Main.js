import "./Main.css";

const Main = () => {

    const retornarResult = (opcionMaquina , opcionUsuario) => {
        if(opcionUsuario == "piedra")
        {
    
          if(opcionMaquina == "piedra")
            {
              return("Empate!");
            }
          else if(opcionMaquina == "papel")
              {
                return("Perdiste");
              }
          else if(opcionMaquina == "tijera")
            {
                return("Ganaste!");
            }
          else if(opcionMaquina == "lagarto")
            {
                return("Ganaste!");
            }
          else if(opcionMaquina == "spock")
            {
                return("Ganaste!");
            }
        }
    else if(opcionUsuario == "papel")
        {
    
          if(opcionMaquina == "piedra")
            {
                return("Ganaste!");
            }
          else if(opcionMaquina == "papel")
              {
                return("Empate!");
              }
          else if(opcionMaquina == "tijera")
            {
                return("Perdiste!");
            }
          else if(opcionMaquina == "lagarto")
            {
                return("Perdiste!");
            }
          else if(opcionMaquina == "spock")
            {
                return("Ganaste!");
            }
        }
    else if(opcionUsuario == "tijera")
        {
    
          if(opcionMaquina == "piedra")
            {
                return("Perdiste!");
            }
          else if(opcionMaquina == "papel")
              {
                return("Ganaste");
              }
          else if(opcionMaquina == "tijera")
            {
                return("Empate!");
            }
          else if(opcionMaquina == "lagarto")
            {
                return("Ganaste!");
            }
          else if(opcionMaquina == "spock")
            {
                return("Perdiste!");
            }
        }
    else if(opcionUsuario == "lagarto")
        {
          if(opcionMaquina == "piedra")
            {
                return("Perdiste!");
            }
          else if(opcionMaquina == "papel")
            {
                return("Ganaste!");
            }
          else if(opcionMaquina == "tijera")
            {
                return("Perdiste");
            }
          else if(opcionMaquina == "lagarto")
            {
                return("Empate");
            }
          else if(opcionMaquina == "spock")
            {
                return("Ganaste!");
            }
        }
    else if(opcionUsuario == "spock")
        {
          if(opcionMaquina == "piedra")
            {
                return("Ganaste!");
            }
          else if(opcionMaquina == "papel")
          {
            return("Perdiste!");
          }
          else if(opcionMaquina == "tijera")
            {
                return("Ganaste!");
            }
          else if(opcionMaquina == "lagarto")
            {
                return("Perdiste!");
            }
          else if(opcionMaquina == "spock")
            {
                return("Empate!");
            }
        }
    else if(opcionUsuario > 2)
      {
        return("Vuelve a elegir");
      }
    }

    var nombres = ["piedra", "papel", "tijera", "lagarto", "spock"];
    var me;

    const eleccionComputer = nombres[Math.floor(Math.random() * nombres.length)];

    const elegir = (p) => {
        me = p;
    };

    const resultadoFinal = () => {
        return( retornarResult(eleccionComputer , me));
    }

    return(

        <div className="main">
            <h1>esto es para 1 jugador</h1>
            <form>
            <div className="selectOption">
                <h2>seleccione una opcion</h2>
                    <div className="listBttn"> 
                        <button className="bttnOption" onClick={elegir("piedra")}>
                            Piedra
                        </button>
                        <button className="bttnOption" onClick={elegir("papel")}>
                            Papel
                        </button>
                        <button className="bttnOption" onClick={elegir("tijera")}>
                            Tijera
                        </button>
                        <button className="bttnOption" onClick={elegir("lagarto")}>
                            Lagarto
                        </button>
                        <button className="bttnOption" onClick={elegir("spock")}>
                            Spock
                        </button>
                    </div>
            </div>
            
            <div className="result">
                <li>el resultado es...{resultadoFinal()}</li>
                <li>la computadora eligio : {eleccionComputer}</li>
                <li>tu elegiste : {me}</li>
            </div>
            </form>
        </div>
    );
};

export default Main;