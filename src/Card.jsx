import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
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
                <ResetButton setCount={setCount} />
                <ButtonContainer>
                    <CountButton type="decrement" setCount={setCount} />
                    <CountButton type="increment" setCount={setCount} />
                </ButtonContainer>
            </div>
        </div>
    );
}

export default Card;
