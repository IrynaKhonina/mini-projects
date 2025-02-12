import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css";

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    // Указываем тип параметра `time` как `number`
    const formatTime = (time: number): string => {
        return time < 10 ? `0${time}` : time.toString();
    };

    const hours = formatTime(time.getHours());
    const minutes = formatTime(time.getMinutes());
    const seconds = formatTime(time.getSeconds());

    return (
        <div className={styles.clock}>
            <div className={styles.time}>
                {hours}:{minutes}:{seconds}
            </div>
        </div>
    );
};