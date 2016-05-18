"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sum;
function sum(arr) {
    return arr.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}