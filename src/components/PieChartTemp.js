import React, { useRef, useEffect } from 'react';
import * as d3 from "d3";

export default function PieChartTemp() {
    const svgRef = useRef();

    useEffect(() => {
        
        //both female and male data
        var totals = [{
            title: "Soft-serve",
            value: 250,
            all: 1098
            },
            {
            title: "Scooped",
            value: 250,
            all: 1098
            },
            {
            title: "No Preference",
            value: 250,
            all: 1098
            },
            {
            title: "Not Sure",
            value: 125,
            all: 1098
            },
            {
            title: "Not Sures",
            value: 125,
            all: 1098
            }
        ];

        var color = d3.scaleOrdinal()
        .range(["#FA9778", "#52B3F9", "#8EDCA4", "#F97A7A", '#7478DA']);

        var width = 200,
            height = 200;

        var outerRadius = height / 2 - 10,
            innerRadius = outerRadius / 2.5;

        var pie = d3.pie()
            .padAngle(.02)
            .value(function (d) {
                return d.value;
            })
            .sort(null);;

        var arc = d3.arc()
            .padRadius(outerRadius)
            .innerRadius(innerRadius);

        var svg = d3.select(svgRef.current).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        svg.selectAll("path")
            .data(pie(totals))
            .enter().append("path")
            .each(function(d) { d.outerRadius = outerRadius - 20; })
            .attr("d", arc)
            .attr('fill', function (d, i) {
                return color(d.data.title);
            })
            .on("mouseover", arcTween(outerRadius, 0))
            .on("mouseout", arcTween(outerRadius - 20, 150));

        function arcTween(outerRadius, delay) {
        return function() {
            d3.select(this).transition().delay(delay).attrTween("d", function(d) {
            var i = d3.interpolate(d.outerRadius, outerRadius);
            return function(t) { d.outerRadius = i(t); return arc(d); };
            });
        };
        }
    }, [])

    return (
        <div className="Piechat_graph" ref={svgRef}>
        </div>
    )
}
