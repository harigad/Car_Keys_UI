function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed_item";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.bar = Ti.UI.createView({
        backgroundColor: "#5689d5",
        height: 1,
        left: 0,
        top: "50%",
        right: 30,
        id: "bar"
    });
    $.__views.main.add($.__views.bar);
    $.__views.container = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        right: 20,
        id: "container"
    });
    $.__views.main.add($.__views.container);
    $.__views.txtContainer = Ti.UI.createView({
        right: 10,
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
        color: "#333",
        font: {
            fontSize: 14
        },
        text: "Katherine",
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
    $.__views.plate = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#5689d5",
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        text: "UTDROCKS",
        id: "plate"
    });
    $.__views.bottomLine.add($.__views.plate);
    $.__views.photo = Ti.UI.createView({
        width: 100,
        height: 100,
        backgroundColor: "#ccc",
        borderRadius: 50,
        borderColor: "#ccc",
        borderWidth: 3,
        id: "photo"
    });
    $.__views.container.add($.__views.photo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args._data || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;