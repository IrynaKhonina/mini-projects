import React, { useEffect, useState } from "react";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import ChartLabel from "../ChartLabel/ChartLabel";
import "./SemiCircleChart.css";

interface SemiCircleChartProps {
    percentage: number;
    progressColor?: string;
    bgColor?: string;
    size?: number;
}

const SemiCircleChart: React.FC<SemiCircleChartProps> = ({
                                                             percentage,
                                                             progressColor = "#4caf50",
                                                             bgColor = "#e0e0e0",
                                                             size = 120,
                                                         }) => {
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        const animate = () => {
            const radius = size / 2 - 10; // Учитываем strokeWidth
            const circumference = 2 * Math.PI * radius;
            const progressOffset = circumference - (percentage / 100) * circumference;
            setOffset(progressOffset);
        };

        animate();
    }, [percentage, size]);

    return (
        <div className="semi-circle-chart">
            <svg
                width={size}
                height={size / 2}
                viewBox={`0 0 ${size} ${size / 2}`}
                className="chart-svg"
            >
                {/* Фоновый круг */}
                <ProgressCircle
                    cx={size / 2}
                    cy={size / 2}
                    r={size / 2 - 10}
                    stroke={bgColor}
                    strokeWidth={10}
                    strokeDasharray={`${2 * Math.PI * (size / 2 - 10)}`}
                    strokeDashoffset={0}
                />
                {/* Круг прогресса */}
                <ProgressCircle
                    cx={size / 2}
                    cy={size / 2}
                    r={size / 2 - 10}
                    stroke={progressColor}
                    strokeWidth={10}
                    strokeDasharray={`${2 * Math.PI * (size / 2 - 10)}`}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
            {/* Текстовая метка */}
            <ChartLabel percentage={percentage} />
        </div>
    );
};

export default SemiCircleChart;