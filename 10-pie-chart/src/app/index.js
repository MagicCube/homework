import PieChart from "./PieChart";

const keys = [ "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf" ];
const colors = [ "#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00" ];

function randomData() {
    return keys.map(key => {
        return { key, value: Math.random() }
    });
}

const pie = new PieChart({
    width: 500,
    height: 400,
    margin: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
    },
    data: randomData(),
    colors
});

d3.select(".refresh").on("click", () => {
    pie.refresh(randomData());
});
