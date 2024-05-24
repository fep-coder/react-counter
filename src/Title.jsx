function Title({ locked }) {
    return (
        <>
            <h4 className="card-title text-center">COUNTER</h4>
            <h6 className="card-subtitle text-muted text-center">
                {locked ? "Limit reached!" : "5 is the limit"}
            </h6>
        </>
    );
}

export default Title;
