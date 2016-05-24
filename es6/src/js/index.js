const a = 0;
console.log(a);

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10

arr.reduce((pre,cur) => pre < cur.num ? cur.cum : pre ,Number.MIN_VALUE);
arr.map(item => item.num).reduce((pre,cur) => pre > cur ? cur:pre,Number.MIN_VALUE);
const numbers = [{num:2},{num:3},{num:3},{num:4},{num:6},{num:2}];
numbers.reduce((pre,cur) => {cur.num % 2 === 1 ? pre.push(cur) : null;return pre;}, []);
