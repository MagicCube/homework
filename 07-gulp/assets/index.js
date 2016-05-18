"use strict";

var _sum = require("./math/sum");

var _sum2 = _interopRequireDefault(_sum);

var _sqr = require("./math/sqr");

var _sqr2 = _interopRequireDefault(_sqr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var result = (0, _sum2.default)([2, 3, 5, 6].map(function (item) {
    return (0, _sqr2.default)(item);
  }));
  console.log(result);
})();