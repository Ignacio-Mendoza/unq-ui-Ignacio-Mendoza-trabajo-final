import { useHref } from "react-router-dom";
import "./SelectP.css";

const SelectP = () => {

    return(
        <div className="main">
            <div className="titulo">
                <h1>Bienvenido a </h1>
                <h1> JUEGARDO </h1>
            </div>
            <div className="buttonsPlayers">
                <h2>
                    Seleccionar Jugadores
                </h2>
                <a className="selectPlayers" href="/Main">
                    1 Jugador
                </a>
                <a className="selectPlayers" href="/Main">
                    2 jugadores
                </a>
            </div>
            <a>
                la opcion de 2 jugadores todavia no esta diseñada, proximamente estara disponible...    
            </a>

        </div>
    );
};

export default SelectP;