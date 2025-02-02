import React from "react";

interface ProgressCircleProps {
    cx: number;
    cy: number;
    r: number;
    stroke: string;
    strokeWidth: number;
    strokeDasharray: string;
    strokeDashoffset: number;
    transform?: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
                                                           cx,
                                                           cy,
                                                           r,
                                                           stroke,
                                                           strokeWidth,
                                                           strokeDasharray,
                                                           strokeDashoffset,
                                                           transform,
                                                       }) => {
    return (
        <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={transform}
            style={{ transition: "stroke-dashoffset 0.8s ease-in-out" }} // Плавная анимация
        />
    );
};

export default ProgressCircle;