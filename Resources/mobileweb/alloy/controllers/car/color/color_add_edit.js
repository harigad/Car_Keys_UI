function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onLoad() {
        if (_colors) {
            var colorsArr = [];
            for (var hex in _colors) colorsArr.push(hex);
            var pieSize = 100 / colorsArr.length;
            var data = [];
            for (var i = 0; colorsArr.length > i; i++) {
                var colorObj = {};
                colorObj.value = pieSize;
                colorObj.color = "#" + colorsArr[i];
                colorObj.label = "Select Exterior Color";
                data.push(colorObj);
            }
            Ti.App.fireEvent("drawPie", {
                data: data
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/color/color_add_edit";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: "350",
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.question = Ti.UI.createLabel({
        text: "Select the body color of your Camaro",
        height: Ti.UI.SIZE,
        id: "question",
        left: "10",
        right: "10",
        bottom: "5"
    });
    $.__views.main.add($.__views.question);
    $.__views.chart = Ti.UI.createWebView({
        id: "chart",
        url: "chartjs/pie.html",
        height: "200",
        width: "200",
        top: "5",
        bottom: "5"
    });
    $.__views.main.add($.__views.chart);
    onLoad ? $.__views.chart.addEventListener("load", onLoad) : __defers["$.__views.chart!load!onLoad"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    args._signup || false;
    args._cid || null;
    var _colors = args._colors || false;
    args._callBack || null;
    args._selected || null;
    args._logo || "";
    __defers["$.__views.chart!load!onLoad"] && $.__views.chart.addEventListener("load", onLoad);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;