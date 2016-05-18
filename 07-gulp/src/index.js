import sum from "./math/sum";
import sqr from "./math/sqr";
(() => {
const result = sum([2, 3, 5, 6].map(item => sqr(item) ));
console.log(result);
})();
