const data = [ { "month": 1, "value": 30 },
             { "month": 2, "value": 20 },
             { "month": 3, "value": 50 },
             { "month": 4, "value": 60 },
             { "month": 5, "value": 80 },
             { "month": 6, "value": 40 },
             { "month": 7, "value": 10 },
             { "month": 8, "value": 70 },
             { "month": 9, "value": 50 },
             { "month": 10, "value": 100 },
             { "month": 11, "value": 80 },
             { "month": 12, "value": 90 } ];

var margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 80
};
const svgW = 600;
const svgH = 400;
const mainW = svgW - margin.left - margin.right;
const mainH = svgH - margin.top - margin.bottom;

//比例尺
const xScale = d3.scale.linear()
                       .domain([ 1, 12 ])
                       .range([ 0, mainW ]);

const yScale = d3.scale.linear()
                       .domain([ 0, 100 ])
                       .range([ mainH, 0 ]);

//坐标轴
const xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom");
const yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left");

//折线
const line = d3.svg.line()
    .interpolate("cardinal")
    .tension(0.6)
    .x(d => xScale(d.month))
    .y(d => yScale(d.value));

const svg = d3.select("body")
              .append("svg")
              .attr({
                  width : svgW,
                  height : svgH
              })
              .append("g")
              .attr("transform", `translate(${margin.left}, ${margin.top})`);

svg.append("g")
   .attr("transform", `translate(0, ${mainH})`)
   .call(xAxis)
   .append("text")
   .text("Month")
   .style("text-anchor", "middle")
   .attr("transform", "translate(" + (mainW/2) + "," + margin.bottom + ")");

svg.append("g")
   .attr("transform", `translate(0, 0)`)
   .call(yAxis)
   .append("text")
   .attr({
       transform : "rotate(-90)",
       x : -(mainH/2),
       y : -35
   })
   .text("Value");

svg.append("path")
   .datum(data)
   .attr("d", line);
