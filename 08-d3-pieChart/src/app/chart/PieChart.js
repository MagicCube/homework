export default class Pie_Chart {

    constructor(data, width = 900, height = 450) {
        this.width = width;
        this.height = height;
        this.radius = Math.min(width, height) / 2;
        this.data = data;
        this.labels = data.map(item => item.label);
        this._init();
        this._renderBody();
        this._render();
    }

    _init() {
        this.svg = d3.select("body")
            .append("svg")
            .append("g")

        this.svg.append("g")
            .attr("class", "slices");

        this.pie = d3.layout.pie()
            .sort(null)
            .value(function(d) {
                return d.value;
            });

        this.arc = d3.svg.arc()
            .outerRadius(this.radius * 0.8)
            .innerRadius(this.radius * 0.4);

        this.outerArc = d3.svg.arc()
            .innerRadius(this.radius * 0.9)
            .outerRadius(this.radius * 0.9);

        this.svg.attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

        this.key = function(d) {
            return d.data.label;
        };

        this.color = d3.scale.ordinal()
            .domain(this.labels)
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    }

    _renderBody() {
        this.slice = this.svg.select(".slices").selectAll("path.slice")
            .data(this.pie(this.data), this.key);

        this.slice.enter()
            .insert("path")
            .style("fill", d => this.color(d.data.label))
            .attr("class", "slice");
    }

    _render() {
        const that = this;
        this.slice.data(this.pie(this.data), this.key)
            .transition().duration(1000)
            .attrTween("d", d => {
                this._current = this._current || d;
                let interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return t => {
                    return that.arc(interpolate(t));
                };
            });
        this.slice.exit()
            .remove();
    }

    render() {

        this._render();
    }
}
