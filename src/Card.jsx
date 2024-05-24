import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";
import { useState } from "react";

function Card() {
    const [count, setCount] = useState(0);
    const locked = count === 5 ? true : false;

    return (
        <div className="card">
            <div className="card-body">
                <Title locked={locked} />
                <Counter count={count} />
                <ResetButton setCount={setCount} />
                <ButtonContainer>
                    <CountButton
                        locked={locked}
                        type="decrement"
                        setCount={setCount}
                    />
                    <CountButton
                        locked={locked}
                        type="increment"
                        setCount={setCount}
                    />
                </ButtonContainer>
            </div>
        </div>
    );
}

export default Card;
