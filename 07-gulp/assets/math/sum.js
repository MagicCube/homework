"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function sum(arr) {
    return arr.reduce(function (previous, current) {
        return previous + current;
    });
}

exports.sum = sum;