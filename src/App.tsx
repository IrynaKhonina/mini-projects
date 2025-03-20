import './App.css';
import {Steps} from './Steps/Steps';
import {Counter} from "./Counter/Counter";
import SemiCircleChart from "./Dagram/SemiCircleChart/SemiCircleChart";
import {FlashCards} from "./FlashCards/FlashCards";
import {Clock} from "./Clock/Clock";
import {Accordion, faqs} from "./Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <Clock/>
            {/*<ClockRound/>*/}
            <Steps title="My Steps" />
            <Counter/>
            <FlashCards/>
            <Accordion data={faqs} />
            <SemiCircleChart percentage={75} progressColor="#ff5722" bgColor="#f0f0f0" size={150} />
        </div>
    );
}

export default App;