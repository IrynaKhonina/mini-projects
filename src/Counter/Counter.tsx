import { useState } from "react";
import "./Counter.css"; // Подключаем стили

type Props = {};
export const Counter = (props: Props) => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date("June 21 2027");
    date.setDate(date.getDate() + count); // Добавляем count к дням

    return (
        <div className="counter-container">
            {/* Управление шагом (step) */}
            <div className="step-control">
                <button className="btn" onClick={() => setStep((s) => s - 1)}>
                    -
                </button>
                <span className="step-value">Step: {step}</span>
                <button className="btn" onClick={() => setStep((s) => s + 1)}>
                    +
                </button>
            </div>

            {/* Управление счетчиком (count) */}
            <div className="count-control">
                <button className="btn" onClick={() => setCount((c) => c - step)}>
                    -
                </button>
                <span className="count-value">Count: {count}</span>
                <button className="btn" onClick={() => setCount((c) => c + step)}>
                    +
                </button>
            </div>

            {/* Отображение даты и текста */}
            <div className="date-display">
                <p>
                    <span className="date-text">
                        {count === 0
                            ? "Today is "
                            : count > 0
                                ? `${count} days from today is `
                                : `${Math.abs(count)} days ago was `}
                    </span>
                    <span className="date-value">{date.toDateString()}</span>
                </p>
            </div>
        </div>
    );
};