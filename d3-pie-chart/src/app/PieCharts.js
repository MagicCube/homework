export default class PieChart
{
    constructor(props)
    {
        this.width = props.width;
        this.height = props.height;
        this.data = props.data;
        this.outR = props.outR;
        this.inR = props.inR;
        this.colors = props.colors;

        this._init();
        this._render();

        // change(this.data);


    }

    _init() {
        this.svg = d3.select("body")
        	.append("svg")
        	.append("g");

        this.svg.append("g")
        	.attr("class", "slices");

        this.radius = Math.min(this.width, this.height) / 2;

        this.pie = d3.layout.pie()
        	.sort(null)
        	.value(function(d) {
        		return d.value;
        	});

        this.arc = d3.svg.arc()
        	.outerRadius(this.radius * this.outR)
        	.innerRadius(this.radius * this.inR);


        this.svg.attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");


        this.color = d3.scale.ordinal()
        	.domain(this.data.map(item => item.key))
        	.range(this.colors);
    }

    _render() {
        /* ------- PIE SLICES -------*/
        this.slice = this.svg.select(".slices").selectAll("path.slice")
            .data(this.pie(this.data));


        this.slice.enter()
            .insert("path")
            .style("fill", d => this.color(d.data.key))
            .attr("class", "slice");

        const that = this;
        this.slice
            .transition().duration(1000)
            .attrTween("d", function(d) {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    return that.arc(interpolate(t));
                };
            })

        this.slice.exit()
            .remove();
    }

    change(data) {
        this.data = data;
        this._render();
    }
}
