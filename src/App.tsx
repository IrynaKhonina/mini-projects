import './App.css';
import { Steps } from './Steps/Steps';
import {Counter} from "./Counter/Counter";

function App() {
    return (
        <div className="App">
            <Steps title="My Steps" /> {/* Исправлено */}
            <Counter/>
        </div>
    );
}

export default App;