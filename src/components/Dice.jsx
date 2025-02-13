const Dice = (props) => {
    return (
        <button 
            className="w-12 aspect-square rounded-xl shadow-md text-2xl font-bold text-gray-900 bg-white">
            {props.value}
        </button>
    );
};

export default Dice;
