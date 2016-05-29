export default class LineChart
{
    constructor(props)
    {
        this.width = props.width;
        this.height = props.height;
        this.margin = props.margin;
        this.initData = props.data1;
        this.data = props.data2;

        this.xPath = props.xPath;
        this.yPath = props.yPath;

        this._init();
        this._renderAxis();
        this._renderBody();
        this.render();
    }


    render()
    {
        this._renderLine();
    }

    _init()
    {
        this.xScale = d3.scale.linear().domain([ 0, 12 ]).range([ 0, this.width - this.margin.left - this.margin.right ]);
        this.yScale = d3.scale.linear().domain([ 10, 0 ]).range([ this.height - this.margin.top - this.margin.bottom, 0 ]);

        this.xAxis = d3.svg.axis()
                           .scale(this.xScale)
                           .orient("bottom");
        this.yAxis = d3.svg.axis()
                           .scale(this.yScale)
                           .orient("left");

        this.line = d3.svg.line()
                          .interpolate("cardinal")
                          .x(d => this.xScale(d[this.xPath]))
                          .y(d => this.yScale(d[this.yPath]));

        this.svg = d3.select("body").append("svg")
                                    .style("width", this.width)
                                    .style("height", this.height)
                                    .style("background-color", "rgba(0, 0, 0, 0.1)");
    }

    _renderAxis()
    {
        this._renderAxisX();
        this._renderAxisY();
    }

    _renderAxisX()
    {
        if(this.axisXGroup === undefined)
        {
            this.axisXGroup = this.svg.append("g")
                                      .classed("axis axis-x", true)
                                      .attr("transform", `translate(${this.margin.left}, ${this.height - this.margin.bottom})`);
        }

        this.xScale.domain(d3.extent(this.data, item => item[this.xPath]));
        this.axisXGroup.transition().duration(600).call(this.xAxis);

    }

    _renderAxisY()
    {
        if (this.axisYGroup === undefined) {
            this.axisYGroup = this.svg.append("g")
                                      .classed("axis axis-y", true)
                                      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        }

        this.yScale.domain(d3.extent(this.data, item => item[this.yPath]));
        this.axisYGroup.transition().duration(600).call(this.yAxis);

    }

    _renderBody()
    {
        this.bodyGroup = this.svg.append("g")
                                 .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`)
                                 .classed("svg-body", true);

    }

    _renderLine()
    {
        if(this.linePath === undefined)
        {
            this.linePath = this.bodyGroup.append("path")
                                          .classed("line", true)
                                          .datum(this.data)
                                          .attr("d", this.line(this.initData));
        }

        this._renderAxis();
        this.linePath.transition()
                     .duration(600)
                     .attr("d", this.line);

    }
}
