import React, { useState } from 'react';
import './steps.css';

type StepsProps = {
    title: string,
};

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export const Steps: React.FC<StepsProps> = ({ title }) => {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    const PreviousHandler = () => {
        if (step > 1) setStep(step - 1);
    };

    const NextHandler = () => {
        if (step < 3) setStep(step + 1);
    };

    return (
        <>
            <button className="close" onClick={()=>setIsOpen (!isOpen)}>&times;</button>
            {isOpen && (
                <div className="steps">
                    <h6>{title}</h6>
                    <div className="numbers">
                        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
                    </div>
                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>
                    <div className="buttons">
                        <button
                            style={{ backgroundColor: "#7950f2", color: "#fff" }}
                            onClick={PreviousHandler}
                        >
                            Previous
                        </button>
                        <button
                            style={{ backgroundColor: "#7950f2", color: "#fff" }}
                            onClick={NextHandler}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};