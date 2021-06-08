import React from 'react'
import d3 from 'd3';
const ReactD3 = require('react-d3-components');

export default function GraphTemp() {

    var LineChart = ReactD3.LineChart;
    var Brush = ReactD3.Brush;

    var state = {
        data: {label: '', values: [
            {x: new Date(2021, 5, 1), y: 20},
            {x: new Date(2021, 5, 2), y: 17},
            {x: new Date(2021, 5, 3), y: 18},
            {x: new Date(2021, 5, 4), y: 20},
            {x: new Date(2021, 5, 5), y: 20},
            {x: new Date(2021, 5, 6), y: 16},
        ]},
        xScale: d3.time.scale().domain([new Date(2021, 5, 1), new Date(2021, 5, 7)]).range([0, 600]),
        yScale: d3.time.scale().domain([0, 40000]).range([0, 400]),
        xScaleBrush: d3.time.scale().domain([new Date(2021, 5, 1), new Date(2021, 5, 7)]).range([0, 400 - 70])
    };

    return (
        <div className="Line_graph">
            <LineChart
                   data={state.data}
                   width={600}
                   height={300}
                   margin={{top: 10, bottom: 50, left: 50, right: 20}}
                //    yScale={state.yScale}
                //    yAxis={{tickValues: state.yScale.ticks(d3.time.day, 2), tickFormat: d3.time.format("%B %d")}}
                   xScale={state.xScale}
                   xAxis={{tickValues: state.xScale.ticks(d3.time.day, 2), tickFormat: d3.time.format("%B %d")}}
                />
        </div>
    )
}
