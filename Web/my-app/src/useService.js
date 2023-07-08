
export const useService = () => {

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

    }

    return(
        retornarResult
    );

}


export default useService;