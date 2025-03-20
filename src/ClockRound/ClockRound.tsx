import React, { useEffect, useState } from "react";
import styles from "./ClockRound.module.css";

export const ClockRound = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    // Получаем текущее время
    const hours = time.getHours() % 12; // 12-часовой формат
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // Вычисляем углы для стрелок
    const hourAngle = (hours * 30) + (minutes * 0.5); // 30 градусов на час + 0.5 градуса на минуту
    const minuteAngle = (minutes * 6) + (seconds * 0.1); // 6 градусов на минуту + 0.1 градуса на секунду
    const secondAngle = seconds * 6; // 6 градусов на секунду

    return (
        <div className={styles.clock}>
            {/* Циферблат */}
            <div className={styles.face}>
                {Array.from({ length: 12 }).map((_, index) => (
                    <div
                        key={index}
                        className={styles.mark}
                        style={{ transform: `rotate(${index * 30}deg)` }}
                    />
                ))}
            </div>

            {/* Стрелки */}
            <div
                className={styles.hourHand}
                style={{ transform: `rotate(${hourAngle}deg)` }}
            />
            <div
                className={styles.minuteHand}
                style={{ transform: `rotate(${minuteAngle}deg)` }}
            />
            <div
                className={styles.secondHand}
                style={{ transform: `rotate(${secondAngle}deg)` }}
            />

            {/* Центр часов */}
            <div className={styles.center} />
        </div>
    );
};