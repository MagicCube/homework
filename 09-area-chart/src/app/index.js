const d3 = require("d3");

const width = 960, height = 600;
const margin = {
    left: 30,
    right: 30,
    top: 30,
    bottom: 30
};

const xScale = d3.scale.linear()
    .domain([1, 12])
    .range([0, width]);

const yScale = d3.scale.linear()
    .domain([0, 10])
    .range([height, 0]);

const xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

const yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

const area = d3.svg.area()
    .interpolate("cardinal")
    .x(d => xScale(d.month))
    .y0(height)
    .y1(d => yScale(d.value));

const svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.right})`);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis)
    .append("text")
    .attr("x", width)
    .attr("dx", "-3em")
    .text("Month");

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

const generateData = function() {
    const result = [];
    for(let i = 1; i <= 12; i++) {
        result.push({
            month: i,
            value: Math.ceil(Math.random() * 10)
        });
    }
    return result;
}

svg.append("path")
    .datum(generateData())
    .attr("class", "area svg-magenta")
    .attr("d", area);

svg.append("path")
    .datum(generateData())
    .attr("class", "area svg-blue")
    .attr("d", area);
