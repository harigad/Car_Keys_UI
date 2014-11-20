function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onClick() {
        if (_selected) {
            $.cell.setBorderWidth(1);
            $.cell.setBorderRadius(4);
            $.logo.setBackgroundImage("");
            _selected = false;
        } else {
            $.cell.setBorderWidth(10);
            $.cell.setBorderRadius(4);
            $.logo.setBackgroundImage("logos/48/" + _logo);
            _selected = true;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/color/color_cell";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.cell = Ti.UI.createView({
        id: "cell",
        width: "100",
        height: "100",
        borderRadius: "4",
        borderWidth: "1",
        borderColor: "#f49033"
    });
    $.__views.cell && $.addTopLevelView($.__views.cell);
    onClick ? $.__views.cell.addEventListener("click", onClick) : __defers["$.__views.cell!click!onClick"] = true;
    $.__views.logo = Ti.UI.createView({
        id: "logo",
        width: "40",
        height: "40"
    });
    $.__views.cell.add($.__views.logo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _hex = args._hex || false;
    var _selected = args._selected || false;
    var _logo = args._logo;
    _hex && $.cell.setBackgroundColor("#" + _hex);
    __defers["$.__views.cell!click!onClick"] && $.__views.cell.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;