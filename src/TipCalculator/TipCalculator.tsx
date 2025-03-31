// TipCalculator.tsx
import { useState } from "react";
import styles from "./TipCalculator.module.css";

type BillInputProps = {
    bill: number | "";
    onSetBill: (value: number | "") => void;
};

type SelectPercentageProps = {
    percentage: number;
    onSelect: (value: number) => void;
    label: string;
};

type OutputProps = {
    bill: number;
    tip: number;
    total: number;
};

type ResetProps = {
    onReset: () => void;
};

export const TipCalculator = () => {
    const [bill, setBill] = useState<number | "">("");
    const [percentage1, setPercentage1] = useState<number>(0);
    const [percentage2, setPercentage2] = useState<number>(0);

    const tip = bill !== "" ? bill * ((percentage1 + percentage2) / 2 / 100) : 0;
    const total = bill !== "" ? bill + tip : 0;

    const handleReset = () => {
        setBill("");
        setPercentage1(0);
        setPercentage2(0);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tip Calculator</h1>

            <BillInput bill={bill} onSetBill={setBill} />

            <SelectPercentage
                percentage={percentage1}
                onSelect={setPercentage1}
                label="How did you like the service?"
            />

            <SelectPercentage
                percentage={percentage2}
                onSelect={setPercentage2}
                label="How did your friend like the service?"
            />

            {bill !== "" && bill > 0 && (
                <div className={styles.resultContainer}>
                    <Output bill={bill} tip={tip} total={total} />
                    <Reset onReset={handleReset} />
                </div>
            )}
        </div>
    );
};

const BillInput: React.FC<BillInputProps> = ({ bill, onSetBill }) => {
    return (
        <div className={styles.inputGroup}>
            <label className={styles.label}>How much was the bill?</label>
            <input
                type="number"
                className={styles.input}
                placeholder="Bill value"
                value={bill}
                onChange={(e) => onSetBill(e.target.value === "" ? "" : Number(e.target.value))}
                min="0"
                step="0.01"
            />
        </div>
    );
};

const SelectPercentage: React.FC<SelectPercentageProps> = ({
                                                               percentage,
                                                               onSelect,
                                                               label
                                                           }) => {
    return (
        <div className={styles.inputGroup}>
            <label className={styles.label}>{label}</label>
            <select
                className={styles.select}
                value={percentage}
                onChange={(e) => onSelect(Number(e.target.value))}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
};

const Output: React.FC<OutputProps> = ({ bill, tip, total }) => {
    return (
        <div className={styles.output}>
            <h3 className={styles.outputText}>
                You pay ${total.toFixed(2)} <span className={styles.breakdown}>(${bill.toFixed(2)} + ${tip.toFixed(2)} tip)</span>
            </h3>
        </div>
    );
};

const Reset: React.FC<ResetProps> = ({ onReset }) => {
    return (
        <button className={styles.resetButton} onClick={onReset}>
            Reset
        </button>
    );
};