import React from "react";

interface ChartLabelProps {
    percentage: number;
}

const ChartLabel: React.FC<ChartLabelProps> = ({ percentage }) => {
    return (
        <div className="chart-label">
            {percentage}%
        </div>
    );
};

export default ChartLabel;