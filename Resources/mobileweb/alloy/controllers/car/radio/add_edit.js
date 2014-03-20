function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/radio/add_edit";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.add_edit = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "add_edit"
    });
    $.__views.add_edit && $.addTopLevelView($.__views.add_edit);
    $.__views.__alloyId12 = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        id: "__alloyId12"
    });
    $.__views.add_edit.add($.__views.__alloyId12);
    $.__views.friends = Ti.UI.createView({
        layout: "vertical",
        id: "friends",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId12.add($.__views.friends);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;