import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
    return (
        <main className="h-screen w-screen flex items-center justify-center bg-gray-900">
            <div className="h-[90vh] w-[90vw] max-w-screen-sm rounded-xl bg-gray-100">
                <Header />
                <Game />
            </div>
        </main>
    );
}

export default App;
