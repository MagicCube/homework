let dataset = [];

const fillData = () => {
    dataset = [];
    const maxRange = Math.random() * 1000;
    console.log(maxRange);
    let randomNum = 0;
    for( let i = 1; i <= 12; i++ ) {
        randomNum = Math.floor(Math.random() * maxRange);
        dataset.push([i, randomNum]);
    }
    console.log(dataset);
};

fillData();

const w = 600;
const h = 600;
const margin = {"top": 50, "right": 50, "bottom": 50, "left": 50};
const mainW = w - margin.left - margin.right;
const mainH = h - margin.top - margin.bottom;

const svg = d3.select("body")
                .append("svg")
                .attr("height", h)
                .attr("width", w);

let xscale = d3.scale.linear()
                        .domain([1, 12])
                        .range([0, mainW]);
let yscale = d3.scale.linear()
                        .domain(d3.extent(dataset, d => { return d[1]; }))
                        .range([mainH, 0]);
const xAxis = d3.svg.axis()
                    .scale(xscale)
                    .orient("bottom")
                    .ticks(12);
const yAxis = d3.svg.axis()
                    .scale(yscale)
                    .orient("left");
svg.append("g")
    .classed("axis x", true)
    .attr("transform", `translate(${margin.left}, ${margin.left + mainH})`)
    .call(xAxis);
svg.append("g")
    .classed("axis y", true)
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);
const area = d3.svg.area()
                    .interpolate("cardinal")
                    .x(d => {return xscale(d[0]);})
                    .y(d => {return yscale(d[1]);})
                    .y0(mainH);
svg.append("path")
    .classed("path", true)
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .attr("d", area(dataset));
svg.selectAll("text.dataInfo")
    .data(dataset)
    .enter()
    .append("text")
    .classed("dataInfo", true)
    .text(d => d[1])
    .attr("x", d => margin.left + xscale(d[0]))
    .attr("y", d => margin.top + yscale(d[1]));


d3.select("button").on("click", () => {
    fillData();
    xscale.domain([1, 12]);
    yscale.domain(d3.extent(dataset, d => { return d[1]; }));
    svg.select("g.axis.x")
        .transition()
        .duration(500)
        .call(xAxis);
    svg.select("g.axis.y")
        .transition()
        .duration(500)
        .call(yAxis);
    svg.select("path.path")
        .transition()
        .duration(500)
        .attr("d", area(dataset));
    svg.selectAll("text.dataInfo")
        .data(dataset)
        .transition()
        .duration(500)
        .text(d => d[1])
        .attr("x", d => margin.left + xscale(d[0]))
        .attr("y", d => margin.top + yscale(d[1]));
});
