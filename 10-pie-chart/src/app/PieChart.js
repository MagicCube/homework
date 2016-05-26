export default class Application {
    constructor(props) {
        this.width = props.width;
        this.height = props.height;
        this.margin = props.margin;
        this.data = props.data;
        this.colors = props.colors;
        console.log(this);
        this._init();
        this._renderPie();
    }

    _init() {
        this.svg = d3.select("body")
            .append("svg")
            .style("width", this.width)
            .style("height", this.height)
            .append("g")
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        const radius = Math.min(this.width, this.height) / 2;
        this.svg.append("g")
            .attr("class", "slices")
            .attr("transform", "translate(" + radius + "," + radius + ")");
        this.pie = d3.layout.pie()
            .sort(null)
            .value(d => d.value);
        this.colorScale = d3.scale.ordinal()
            .domain(this.data.map(pair => pair.key))
            .range(this.colors);
        this.arc = d3.svg.arc()
            .outerRadius(radius * 0.8)
            .innerRadius(radius * 0.5);
    }

    _renderPie() {
        this.slices = this.svg
            .select(".slices")
            .selectAll("path.slice")
            // TODO why d => d.data.key rather than d.key
            .data(this.pie(this.data), d => d.data.key);
        this.slices.enter()
            .append("path")
            .style("fill", d => this.colorScale(d.data.key))
            .attr("class", "slice")
            .attr("d", this.arc);
        const that = this;
        this.slices.transition()
            .duration(1000)
    		.attrTween("d", function(d) {
    			this._current = this._current || d;
    			var interpolate = d3.interpolate(this._current, d);
    			this._current = interpolate(0);
    			return function(t) {
    				return that.arc(interpolate(t));
    			};
    		});
    	this.slices.exit()
    		.remove();
    }

    refresh(data) {
        this.data = data;
        this._renderPie();
    }
}
