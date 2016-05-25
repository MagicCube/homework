const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
}
const width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

const xScale = d3.scale.linear()
    .range([0, width])
    .domain([0, 12]);

const yScale = d3.scale.linear()
    .range([height, 0])
    .domain([0, 10]);

const xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

const yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

const line = d3.svg.line()
    .interpolate("cardinal")
    .x(d => xScale(d.month))
    .y(d => yScale(d.value));

const svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.json("data.json", (error, data) => {
    if (error) {
        console.error(error);
    }

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

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
});
