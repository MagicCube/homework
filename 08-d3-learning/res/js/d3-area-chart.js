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

const margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 50
};

const xArray = data.map((item) => { return item.month; });
const yArray = data.map((item) => { return item.value; });
const areaWidth = 800;
const areaHeight = 500;

const xScale = d3.scale.linear()
                       .domain([d3.min(xArray), d3.max(xArray)])
                       .range([ 0, areaWidth ]);

const yScale = d3.scale.linear()
                       .domain([0, d3.max(yArray)])
                       .range([ areaHeight , 0 ]);

const xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom");

const yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left");

const area = d3.svg.area()
                   .interpolate("cardinal")
                   .x((d) => xScale(d.month))
                   .y0(areaHeight)
                   .y1((d) => yScale(d.value));

const svg = d3.select("body")
              .append("svg")
              .attr({
                  width : areaWidth + margin.left + margin.right,
                  height : areaHeight + margin.top + margin.bottom
              })
              .append("g")
              .attr({
                  transform : `translate(${margin.left}, ${margin.top})`
              });

svg.append("g")
   .attr({
       class : "x axis",
       transform : `translate(0, ${areaHeight})`
   })
   .call(xAxis);

svg.append("g")
   .attr({
       class : "y axis"
   })
   .call(yAxis);

svg.append("path")
   .datum(data)
   .attr({
       class : "area svg-blue",
       d : area
   });

d3.select("p")
    .on("click", () => {
        alert("dsadsa");
    });
