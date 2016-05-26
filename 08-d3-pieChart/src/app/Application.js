import PieChart from "./chart/PieChart";

export default class Application {
    run(){
        let data = this.randomData();
        const pc = new PieChart(data);
        d3.select(".button")
	    .on("click", () => {
            data.forEach((item,index) => {data[index]["value"] = Math.random() });
            pc.render();
	});
    }
    randomData(){
        const labels = ["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"];
        return labels.map(function(label){
		return { label: label, value: Math.random() };
	});
    }
}
