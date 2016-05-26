(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PieCharts = require("./PieCharts");

var _PieCharts2 = _interopRequireDefault(_PieCharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
    function Application() {
        _classCallCheck(this, Application);

        this.keys = ["a", "b", "c", "d", "e", "f", "g", "h"];
        this.colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
    }

    _createClass(Application, [{
        key: "randomData",
        value: function randomData(keys) {
            return keys.map(function (item) {
                return { key: item, value: Math.random() };
            });
        }
    }, {
        key: "run",
        value: function run() {
            var _this = this;

            var pieChart = new _PieCharts2.default({
                width: 900,
                height: 400,
                outR: 0.8,
                inR: 0.4,
                data: this.randomData(this.keys),
                colors: this.colors
            });
            d3.select("button").on("click", function () {
                pieChart.change(_this.randomData(_this.keys));
            });
        }
    }]);

    return Application;
}();

exports.default = Application;

},{"./PieCharts":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PieChart = function () {
    function PieChart(props) {
        _classCallCheck(this, PieChart);

        this.width = props.width;
        this.height = props.height;
        this.data = props.data;
        this.outR = props.outR;
        this.inR = props.inR;
        this.colors = props.colors;

        this._init();
        this._render();

        // change(this.data);
    }

    _createClass(PieChart, [{
        key: "_init",
        value: function _init() {
            this.svg = d3.select("body").append("svg").append("g");

            this.svg.append("g").attr("class", "slices");

            this.radius = Math.min(this.width, this.height) / 2;

            this.pie = d3.layout.pie().sort(null).value(function (d) {
                return d.value;
            });

            this.arc = d3.svg.arc().outerRadius(this.radius * this.outR).innerRadius(this.radius * this.inR);

            this.svg.attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

            this.color = d3.scale.ordinal().domain(this.data.map(function (item) {
                return item.key;
            })).range(this.colors);
        }
    }, {
        key: "_render",
        value: function _render() {
            var _this = this;

            /* ------- PIE SLICES -------*/
            this.slice = this.svg.select(".slices").selectAll("path.slice").data(this.pie(this.data));

            this.slice.enter().insert("path").style("fill", function (d) {
                return _this.color(d.data.key);
            }).attr("class", "slice");

            var that = this;
            this.slice.transition().duration(1000).attrTween("d", function (d) {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function (t) {
                    return that.arc(interpolate(t));
                };
            });

            this.slice.exit().remove();
        }
    }, {
        key: "change",
        value: function change(data) {
            this.data = data;
            this._render();
        }
    }]);

    return PieChart;
}();

exports.default = PieChart;

},{}],3:[function(require,module,exports){
"use strict";

var _Application = require("./Application");

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _Application2.default();
app.run();

},{"./Application":1}]},{},[3])