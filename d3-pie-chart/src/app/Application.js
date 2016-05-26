import PieChart from "./PieCharts";

export default class Application
{
    constructor() {
        this.keys = ["a", "b", "c", "d", "e", "f", "g", "h"];
        this.colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];

    }
    randomData(keys) {
        return keys.map(item => {
            return {key: item, value: Math.random()};
        });
    }
    run() {
        const pieChart = new PieChart({
            width: 900,
            height: 400,
            outR: 0.8,
            inR: 0.4,
            data: this.randomData(this.keys),
            colors: this.colors
        });
        d3.select("button")
        	.on("click", () => {
        		pieChart.change(this.randomData(this.keys));
        	});
    }

}
