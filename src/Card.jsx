import CountButtons from "./CountButtons";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";
import { useState } from "react";

function Card() {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <div className="card-body">
                <Title />
                <Counter count={count} />
                <ResetButton />
                <CountButtons setCount={setCount} />
            </div>
        </div>
    );
}

export default Card;
