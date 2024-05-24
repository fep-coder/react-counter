function ResetButton({ setCount }) {
    return (
        <div className="text-center">
            <button className="btn btn-danger" onClick={() => setCount(0)}>
                reset
            </button>
        </div>
    );
}

export default ResetButton;
