export default function sum(arr) {
    return arr.reduce((pre, cur) => { return pre + cur; }, 0);
}
