import { RxReset } from "react-icons/rx";

function ResetButton({ setCount }) {
    return (
        <div className="text-center">
            <button className="btn btn-danger" onClick={() => setCount(0)}>
                <RxReset />
            </button>
        </div>
    );
}

export default ResetButton;
