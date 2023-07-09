import "./Main.css";
import "./useService";
import useService from "./useService";


const Main = () => {

    //const {retornarResult} = useService;

    const retornarResult = (computer , player) => {
        if (computer == "Tijera" && player == "Papel")
            return ("perdiste este jeugo :c");
        else if (computer == "Papel" && player == "Piedra")
            return ("perdiste este jeugo :c");
        else if (computer == "Piedra" && player == "Lagarto")
            return ("perdiste este jeugo :c");
        else if (computer == "Lagarto" && player == "Spock")
            return ("perdiste este jeugo :c");
        else if (computer == "Spock" && player == "Tijera")
            return ("perdiste este jeugo :c");
        else if (computer == "Tijera" && player == "Lagarto")
            return ("perdiste este jeugo :c");
        else if (computer == "Lagarto" && player == "Papel")
            return ("perdiste este jeugo :c");
        else if (computer == "Papel" && player == "Spock")
            return ("perdiste este jeugo :c");
        else if (computer == "Spock" && player == "Piedra")
            return ("perdiste este jeugo :c");
        else if (computer == "Piedra" && player == "Tijera")
            return ("perdiste este jeugo :c");
        else if (computer == player )
            return ("empataron ._.");
        else if (computer /= player)
            return ("ganaste papa :D");
    }

     const nombres = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

    let resultado, eleccionComputer = null;

    const randomOption = (yourOption) => {
        eleccionComputer = nombres[Math.floor(Math.random() * nombres.length)]
        resultado = (retornarResult(eleccionComputer , yourOption));
        
    };

    return(

        <div className="main">
            <h1>esto es para 1 jugador</h1>
        
            <div className="selectOption">
                <h2>seleccione una opcion</h2>
                    <div className="listBttn"> 
                        <button className="bttnOption" onClick={randomOption("Piedra")}>Piedra</button>
                        <button className="bttnOption" onClick={randomOption("Papel")}>Papel</button>
                        <button className="bttnOption" onClick={randomOption("Tijera")}>Tijera</button>
                        <button className="bttnOption" onClick={randomOption("Lagarto")}>Lagarto</button>
                        <button className="bttnOption" onClick={randomOption("Spock")}>Spock</button>
                    </div>
            </div>
            <div className="result">
                <a>el resultado es...{resultado}</a>
                
            </div>
        </div>
    );
};

export default Main;