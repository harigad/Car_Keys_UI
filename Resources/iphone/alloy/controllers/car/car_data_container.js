function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/car_data_container";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.titledate_container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 10,
        id: "titledate_container"
    });
    $.__views.titledate_container && $.addTopLevelView($.__views.titledate_container);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: 75,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "__alloyId9"
    });
    $.__views.titledate_container.add($.__views.__alloyId9);
    $.__views.title = Ti.UI.createLabel({
        width: 75,
        color: "#999",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "title",
        top: "5"
    });
    $.__views.__alloyId9.add($.__views.title);
    $.__views.__alloyId10 = Ti.UI.createView({
        width: 190,
        height: Ti.UI.SIZE,
        left: 5,
        top: 0,
        layout: "vertical",
        id: "__alloyId10"
    });
    $.__views.titledate_container.add($.__views.__alloyId10);
    $.__views.content = Ti.UI.createView({
        width: 190,
        height: Ti.UI.SIZE,
        left: 5,
        top: 0,
        layout: "vertical",
        id: "content"
    });
    $.__views.__alloyId10.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.setTitle = function(title) {
        $.title.setText(title);
    };
    exports.add = function(view) {
        $.content.add(view);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;