import React, { useState } from "react";
import "./FlashCards.css";

// Определяем тип для вопроса
type Question = {
    id: number;
    question: string;
    answer: string;
};

// Определяем тип для пропсов (пока пустой, но можно расширить)
type Props = {};

// Массив вопросов
const questions: Question[] = [
    {
        id: 3457,
        question: "What language is React based on?",
        answer: "JavaScript"
    },
    {
        id: 7336,
        question: "What are the building blocks of React apps?",
        answer: "Components"
    },
    {
        id: 8832,
        question: "What's the name of the syntax we use to describe a UI in React?",
        answer: "JSX"
    },
    {
        id: 1297,
        question: "How to pass data from parent to child components?",
        answer: "Props"
    },
    {
        id: 9103,
        question: "How to give components memory?",
        answer: "useState hook"
    },
    {
        id: 2002,
        question: "What do we call an input element that is completely synchronised with state?",
        answer: "Controlled element"
    }
];

// Компонент FlashCards
export const FlashCards: React.FC<Props> = (props) => {
    const [selectedId, setSelectedId] = useState<number | null>(9103);

    // Обработчик клика
    const onClickHandler = (id: number) => {
        setSelectedId(selectedId === id ? null : id); // Переключаем выбранный вопрос
    };

    return (
        <div className="flashcards">
            {questions.map((question) => (
                <div
                    key={question.id}
                    className={question.id === selectedId ? "selected" : ""}
                    onClick={() => onClickHandler(question.id)} // Передаем id вопроса в обработчик
                >
                    <p>{question.id === selectedId ? question.answer : question.question}</p>
                </div>
            ))}
        </div>
    );
};