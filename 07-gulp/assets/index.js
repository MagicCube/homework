"use strict";

var _sum = require("./math/sum.js");

var _sum2 = _interopRequireDefault(_sum);

var _sqr = require("./math/sqr.js");

var _sqr2 = _interopRequireDefault(_sqr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    console.log((0, _sum2.default)([1, 2, 3]), (0, _sqr2.default)(9));
})();