function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mx-auto mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center">COUNTER</h4>
                            <h6 className="card-subtitle text-muted text-center">
                                5 is the limit
                            </h6>
                            <h1
                                className="text-center"
                                style={{ fontSize: "150px" }}
                            >
                                0
                            </h1>

                            <div className="text-center">
                                <button className="btn btn-danger">
                                    reset
                                </button>
                            </div>

                            <div className="d-flex">
                                <button
                                    className="btn btn-primary w-50 p-3 m-1"
                                    style={{ fontSize: "50px" }}
                                >
                                    -
                                </button>
                                <button
                                    className="btn btn-primary w-50 p-3 m-1"
                                    style={{ fontSize: "50px" }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
