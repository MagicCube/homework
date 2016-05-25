const data1 = [];
const data2 = [];
for(let i = 0; i <= 12; i++)
{
    data1.push({mouth:i, sum:Math.round(Math.random()*100+50)});
}
for(let i = 0; i <= 12; i++)
{
    data2.push({mouth:i, sum:Math.round(Math.random()*100+50)});
}
console.log(data1);
console.log(data2);
const xscale = d3.scale.linear().domain([0,12]).range([5,500]);
const yscale = d3.scale.linear().domain([0,150]).range([500,0]);
const lineFunction = d3.svg.area().x(function(d) { return xscale(d.mouth); })
.y0(500)
.y1(function(d) { return yscale(d.sum); })
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
             .append("g")
             .attr("transform", "translate(50, 50)");
svg.append("g").attr("class", "axis").attr("transform", "translate(0, 500)").call(xAxis)
    .append("text")
    .attr("transform", "translate(500, 0)")
    .classed("label", true)
    .text("month");

svg.append("g").attr("class", "axis").attr("transform", "translate(5, 0)").call(yAxis)
   .append("text")
   .attr("transform", "rotate(-90)")
   .attr("y", 6)
   .attr("dy", ".71em")
   .classed("label", true)
   .style("text-anchor", "end")
   .text("sum $");

svg.append("g")
    .append("path")
    .attr("d", lineFunction(data1))
    .attr("stroke", "blue")
    .attr("class", "area1")
    .attr("stroke-width", 2)
    .attr("fill", "none");

svg.append("g")
    .append("path")
    .attr("d", lineFunction(data2))
    .attr("stroke", "blue")
    .attr("class", "area2")
    .attr("stroke-width", 2)
    .attr("fill", "none");

d3.selectAll("svg").on("click", function(){
    data1[0].sum=Math.round(Math.random()*100+50);
    d3.selectAll("path")
        .transition()
        .duration(100)
        .attr("stroke", "#"+(Math.random()*0xffffff<<0).toString(16));
});

svg.selectAll("text.desc1").data(data1)
    .enter()
    .append("text")
    .attr("x", function(d){
        return xscale(d.mouth) - 10;
    })
    .attr("y", function(d){
        return yscale(d.sum )- 10;
    })
    .classed("desc1", true)
    .text(function(d){
        return d.sum;
    });

    svg.selectAll("text.desc2").data(data2)
        .enter()
        .append("text")
        .attr("x", function(d){
            return xscale(d.mouth) - 10;
        })
        .attr("y", function(d){
            return yscale(d.sum) - 10;
        })
        .classed("desc2", true)
        .text(function(d){
            return d.sum;
        });
