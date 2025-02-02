import './App.css';
import { Steps } from './Steps/Steps';
import {Counter} from "./Counter/Counter";
import SemiCircleChart from "./Dagram/SemiCircleChart/SemiCircleChart";
import {FlashCards} from "./FlashCards/FlashCards";

function App() {
    return (
        <div className="App">
            <Steps title="My Steps" /> {/* Исправлено */}
            <Counter/>
            <SemiCircleChart percentage={75} progressColor="#ff5722" bgColor="#f0f0f0" size={150} />
            <FlashCards/>
        </div>
    );
}

export default App;