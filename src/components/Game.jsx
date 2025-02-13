import React from "react";
import Dice from "./Dice";

const Game = () => {

    const [dice, SetDice] = React.useState(rollNewDice)

    function rollNewDice(){
        return Array(10)
            .fill()
            .map(() => Math.ceil(Math.random() * 6));
    }

    return (
        <main className="h-screen w-screen flex items-center justify-center bg-gray-900">
            <div className="h-[90vh] w-[90vw] max-w-screen-sm rounded-xl bg-gray-100">

                <div className="flex justify-center mt-6">
                    <section className="grid grid-cols-5 gap-4 w-9/12 max-w-screen-sm">
                        {dice.map((value, index)=> (
                            <Dice value={value} key={index} />
                        ))}
                        
                    </section>
                </div>
                

            </div>
        </main>
    );
};

export default Game;
