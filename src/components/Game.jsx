import { useState } from "react";
import Dice from "./Dice";

const Game = () => {
    const [dice, setDice] = useState(rollNewDice);

    function rollNewDice() {
        return Array(10)
            .fill()
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
            }));
    }

    function rollDice() {
        setDice((prevDice) =>
            prevDice.map((die) =>
                die.isHeld
                    ? die
                    : { ...die, value: Math.ceil(Math.random() * 6) }
            )
        );
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <section className="grid grid-cols-5 gap-6 max-w-screen-sm">
                {dice.map((die, index) => (
                    <Dice value={die.value} isHeld={die.isHeld} key={index} />
                ))}
            </section>
            <button
                className="mt-8 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-10 rounded cursor-pointer"
                onClick={rollDice}
            >
                Roll
            </button>
        </div>
    );
};

export default Game;
