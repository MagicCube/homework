const data = [];
for(let i = 1; i <= 12; i++)
{
    data.push({mouth:i, sum:Math.round(Math.random()*100+50)});
}
console.log(data);
const xscale = d3.scale.linear().domain([0,12]).range([5,500]);
const yscale = d3.scale.linear().domain([0,150]).range([500,0]);
const lineFunction = d3.svg.line().x(function(d) { return xscale(d.mouth); })
.y(function(d) { return yscale(d.sum); })
.interpolate("cardinal");

var xAxis = d3.svg.axis()
    .scale(xscale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yscale)
    .orient("left");

const svg = d3.select("body")
             .append("svg")
             .attr("width", 900)
             .attr("height", 900)
             .attr("fill", "blue")
             .append("g")
             .attr("transform", "translate(200, 200)");
svg.append("g").attr("class", "axis").attr("transform", "translate(0, 500)").call(xAxis)
    .append("text")
    .attr("transform", "translate(505, 0)")
    .attr("font-size","15px")
    .text("month");

svg.append("g").attr("class", "axis") .call(yAxis)
   .append("text")
   .attr("transform", "rotate(-90)")
   .attr("y", 6)
   .attr("dy", ".71em")
   .attr("font-size","15px")
   .style("text-anchor", "end")
   .text("sum $");

svg.append("path")
    .attr("d", lineFunction(data))
    .attr("stroke", "blue")
    .attr("class", "line")
    .attr("stroke-width", 2)
    .attr("fill", "none");


svg.selectAll("text.desc").data(data)
    .enter()
    .append("text")
    .attr("x", function(d){
        return xscale(d.mouth)-5;
    })
    .attr("y", function(d){
        return yscale(d.sum)-5;
    })
    .classed("desc", true)
    .text(function(d){
        return d.sum;
    });
