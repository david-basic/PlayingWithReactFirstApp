import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dp => dp.value); // transforming datapoint object to datapoint value, storing them into new array
    const maxValueInput = Math.max(...dataPointValues); // max takes arguments, can not take array, so we need to deconstruct the array into arguments, with ...

    return (
        <div className="chart">
            {props.dataPoints.map((dp) => (
                <ChartBar
                    key={dp.label} // label will be unique identifier for this, jer je fakat drugacija (Jan, Feb, Mar, Apr,...)
                    value={dp.value}
                    maxValue={maxValueInput}
                    label={dp.label}
                />
            ))}
        </div>
    );
};

export default Chart;
