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
        Alloy.createController("profile/profile", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "friends/friend";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home_square = Ti.UI.createTableViewRow({
        id: "home_square",
        height: Ti.UI.SIZE
    });
    $.__views.home_square && $.addTopLevelView($.__views.home_square);
    onClick ? $.__views.home_square.addEventListener("click", onClick) : __defers["$.__views.home_square!click!onClick"] = true;
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "main",
        left: "20",
        right: "10",
        top: "15",
        bottom: "15"
    });
    $.__views.home_square.add($.__views.main);
    $.__views.icon = Ti.UI.createImageView({
        id: "icon",
        width: "50",
        height: "50",
        left: "0",
        borderRadius: "25",
        backgroundColor: "#eee"
    });
    $.__views.main.add($.__views.icon);
    $.__views.labels = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: "60",
        layout: "vertical",
        id: "labels"
    });
    $.__views.main.add($.__views.labels);
    $.__views.__alloyId75 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId75"
    });
    $.__views.labels.add($.__views.__alloyId75);
    $.__views.title = Ti.UI.createLabel({
        left: "0",
        font: {
            fontSize: 24
        },
        color: "#cecece",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "title"
    });
    $.__views.__alloyId75.add($.__views.title);
    $.__views.subtext = Ti.UI.createLabel({
        left: 5,
        font: {
            fontSize: 14
        },
        color: "#cecece",
        text: "(200 pts)",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "subtext"
    });
    $.__views.__alloyId75.add($.__views.subtext);
    $.__views.model = Ti.UI.createView({
        left: "0",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "model",
        layout: "vertical"
    });
    $.__views.labels.add($.__views.model);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.icon.setImage(_data.photo);
    $.title.setText(_data.name.split(" ")[0]);
    if (_data.cars) {
        for (var i = 0; _data.cars.length > i; i++) {
            var car = Ti.UI.createLabel({
                text: _data.cars[i].model + " by " + _data.cars[i].make,
                left: 0,
                font: {
                    fontSize: 14
                },
                color: "#7f7f7f"
            });
            $.model.add(car);
        }
        $.icon.setTop(0);
    } else {
        var car = Ti.UI.createLabel({
            text: _data.model + " by " + _data.make,
            left: 0,
            font: {
                fontSize: 14
            },
            color: "#7f7f7f"
        });
        $.model.add(car);
    }
    __defers["$.__views.home_square!click!onClick"] && $.__views.home_square.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;