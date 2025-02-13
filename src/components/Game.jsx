import Dice from "./Dice";

const Game = () => {
    return (
        <main className="h-screen w-screen flex items-center justify-center bg-gray-900">
            <div className="h-[90vh] w-[90vw] max-w-screen-sm rounded-xl bg-gray-100">

                <div className="flex justify-center mt-6">
                    <section className="grid grid-cols-5 gap-4 w-9/12 max-w-screen-sm">
                        <Dice value={1} />
                        <Dice value={1} />
                        <Dice value={1} />
                        <Dice value={1} />
                        <Dice value={1} />
                        <Dice value={1} />
                        <Dice value={1} />
                        <Dice value={1} />
                        <Dice value={1} />
                        <Dice value={1} />
                    </section>
                </div>
                

            </div>
        </main>
    );
};

export default Game;
