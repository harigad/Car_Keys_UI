function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/send_request/cannot_find_carkey_for_ridealong";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.cannot_find_carkey_for_ridealong = Ti.UI.createWindow({
        backgroundColor: "#666",
        width: "320",
        height: "480",
        id: "cannot_find_carkey_for_ridealong"
    });
    $.__views.cannot_find_carkey_for_ridealong && $.addTopLevelView($.__views.cannot_find_carkey_for_ridealong);
    $.__views.main = Ti.UI.createView({
        id: "main",
        height: Ti.UI.SIZE,
        left: "20",
        right: "20",
        layout: "vertical"
    });
    $.__views.cannot_find_carkey_for_ridealong.add($.__views.main);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        text: "searching..please wait..",
        color: "#aaa",
        id: "__alloyId69"
    });
    $.__views.main.add($.__views.__alloyId69);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;