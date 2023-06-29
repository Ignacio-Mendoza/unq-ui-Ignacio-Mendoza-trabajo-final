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
                <button className="buttonSelectP">
                    1 jugador
                </button>
                <button className="buttonSelectP">
                    2 jugadores
                </button>
            </div>
        </div>
    );
};

export default SelectP;