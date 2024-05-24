import CountButtons from "./CountButtons";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";

function Card() {
    return (
        <div className="card">
            <div className="card-body">
                <Title />
                <Counter />
                <ResetButton />
                <ButtonContainer>
                    <CountButtons />
                </ButtonContainer>
            </div>
        </div>
    );
}

export default Card;
