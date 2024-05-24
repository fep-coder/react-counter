function CountButton({ locked, type, setCount }) {
    function handleClick() {
        if (type === "increment") {
            setCount((prevState) => (prevState + 1 > 5 ? 5 : prevState + 1));
        } else if (type === "decrement") {
            setCount((prevState) => (prevState - 1 < 0 ? 0 : prevState - 1));
        }
    }

    return (
        <button
            disabled={locked}
            className="btn btn-primary w-50 p-3 m-1"
            style={{ fontSize: "50px" }}
            onClick={handleClick}
        >
            {type === "decrement" ? "-" : "+"}
        </button>
    );
}

export default CountButton;
