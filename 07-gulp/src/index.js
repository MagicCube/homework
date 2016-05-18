import sum from "./math/sum";
import sqr from "./math/sqr";

const data = [ 1, 2, 3, 4, 5 ];
const sumSqr = (arr) => {
    const sqrs = arr.map(item => sqr(item));
    return sum(sqrs);
}

console.log(sumSqr(data));
