import ButtonContainer from "./ButtonContainer";
import Card from "./Card";
import CountButtons from "./CountButtons";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mx-auto mt-3">
                    <Card>
                        <Title />
                        <Counter />
                        <ResetButton />
                        <ButtonContainer>
                            <CountButtons />
                        </ButtonContainer>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
