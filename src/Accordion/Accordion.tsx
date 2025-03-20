import React from "react";
import styles from "./Accordion.module.css";

// Тип для элемента FAQ
interface FAQItem {
    title: string;
    text: string;
}

// Данные для аккордеона
export const faqs: FAQItem[] = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
];

// Пропсы для компонента Accordion
interface AccordionProps {
    data: FAQItem[];
}

// Компонент Accordion
export const Accordion: React.FC<AccordionProps> = ({ data }) => {
    return (
        <div className={styles.accordion}>
            {data.map((el: FAQItem, i: number) => (
                <AccordionItem title={el.title} text={el.text} num={i} key={i} />
            ))}
        </div>
    );
};

// Пропсы для компонента AccordionItem
interface AccordionItemProps {
    num: number;
    title: string;
    text: string;
}

// Компонент AccordionItem
const AccordionItem: React.FC<AccordionItemProps> = ({ num, title, text }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
            <div className={styles.header} onClick={handleToggle}>
                <p className={styles.number}>{num < 9 ? `0${num + 1}` : num + 1}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.icon} aria-expanded={isOpen}>
                    {isOpen ? "−" : "+"}
                </p>
            </div>
            <div className={styles.contentBox} aria-hidden={!isOpen}>
                {text}
            </div>
        </div>
    );
};