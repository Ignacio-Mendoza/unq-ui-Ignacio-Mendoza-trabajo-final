import "./Main.css";
import "./useService";
import useService from "./useService";


const Main = () => {

    const {retornarResult} = useService;

    const nombres = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

    const randomOption = (yourOption) => {
        return(retornarResult(
            nombres[Math.floor(Math.random() * nombres.length)], yourOption));
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
                <a>el resultado es...</a>
                
            </div>
        </div>
    );
};

export default Main;