function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "components/pleasewait";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.pleasewait = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "pleasewait"
    });
    $.__views.pleasewait && $.addTopLevelView($.__views.pleasewait);
    $.__views.__alloyId36 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId36"
    });
    $.__views.pleasewait.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        text: "please wait..",
        height: Ti.UI.SIZE,
        color: "#fff",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.open = function() {
        $.pleasewait.open();
    };
    exports.close = function() {
        $.pleasewait.close();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;