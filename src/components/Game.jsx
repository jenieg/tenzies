import { useState } from "react";
import Dice from "./Dice";

const Game = () => {
    const [dice, SetDice] = useState(rollNewDice);

    function rollNewDice() {
        return Array(10)
            .fill()
            .map(() => Math.ceil(Math.random() * 6));
    }

    return (
        <div className="flex justify-center">
            <section className="grid grid-cols-5 gap-6 max-w-screen-sm">
                {dice.map((value, index) => (
                    <Dice value={value} key={index} />
                ))}
            </section>
        </div>
    );
};

export default Game;
