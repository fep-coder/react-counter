import { RxReset } from "react-icons/rx";

function ResetButton({ setCount }) {
    function handleClick(e) {
        setCount(0);

        e.currentTarget.blur();
    }

    return (
        <div className="text-center">
            <button className="btn btn-danger" onClick={handleClick}>
                <RxReset />
            </button>
        </div>
    );
}

export default ResetButton;
