function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mycars/mycar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.bar = Ti.UI.createView({
        backgroundColor: "#5689d5",
        height: 1,
        left: 45,
        top: "50%",
        opacity: .5,
        id: "bar"
    });
    $.__views.main.add($.__views.bar);
    $.__views.container = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "container"
    });
    $.__views.main.add($.__views.container);
    $.__views.photo = Ti.UI.createView({
        left: 40,
        width: 50,
        height: 50,
        backgroundColor: "#ccc",
        borderRadius: 25,
        borderColor: "#ccc",
        borderWidth: 3,
        id: "photo"
    });
    $.__views.container.add($.__views.photo);
    $.__views.txtContainer = Ti.UI.createView({
        left: 10,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "txtContainer"
    });
    $.__views.container.add($.__views.txtContainer);
    $.__views.topLine = Ti.UI.createView({
        bottom: 5,
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "topLine"
    });
    $.__views.txtContainer.add($.__views.topLine);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#5689d5",
        font: {
            fontSize: 14
        },
        text: "G 35",
        id: "name"
    });
    $.__views.topLine.add($.__views.name);
    $.__views.bottomLine = Ti.UI.createView({
        top: 5,
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "bottomLine"
    });
    $.__views.txtContainer.add($.__views.bottomLine);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#999",
        right: 10,
        font: {
            fontSize: 11
        },
        text: "sharing with (2)",
        id: "__alloyId8"
    });
    $.__views.bottomLine.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#999",
        right: 10,
        font: {
            fontSize: 11
        },
        text: "radio stations (2)",
        id: "__alloyId9"
    });
    $.__views.bottomLine.add($.__views.__alloyId9);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;