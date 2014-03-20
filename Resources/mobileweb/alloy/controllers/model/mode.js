function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "model/mode";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mode = Ti.UI.createWindow({
        id: "mode"
    });
    $.__views.mode && $.addTopLevelView($.__views.mode);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll"
    });
    $.__views.mode.add($.__views.scroll);
    $.__views.profile_container = Ti.UI.createView({
        id: "profile_container"
    });
    $.__views.scroll.add($.__views.profile_container);
    $.__views.photo = Ti.UI.createView({
        id: "photo"
    });
    $.__views.profile_container.add($.__views.photo);
    onClick ? $.__views.photo.addEventListener("click", onClick) : __defers["$.__views.photo!click!onClick"] = true;
    $.__views.plate = Ti.UI.createLabel({
        id: "plate"
    });
    $.__views.profile_container.add($.__views.plate);
    $.__views.cars_container = Ti.UI.createView({
        id: "cars_container"
    });
    $.__views.scroll.add($.__views.cars_container);
    $.__views.tabs = Ti.UI.createView({
        id: "tabs",
        left: "30",
        right: "30",
        backgroundColor: "#fff",
        borderRadius: "4",
        height: "80",
        layout: "horizontal"
    });
    $.__views.cars_container.add($.__views.tabs);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Friends",
        width: "50%",
        id: "__alloyId0"
    });
    $.__views.tabs.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Feed",
        width: "50%",
        id: "__alloyId1"
    });
    $.__views.tabs.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.photo!click!onClick"] && $.__views.photo.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;