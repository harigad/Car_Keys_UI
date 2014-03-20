function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "flair/flair";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.flair = Ti.UI.createWindow({
        modal: true,
        id: "flair"
    });
    $.__views.flair && $.addTopLevelView($.__views.flair);
    $.__views.main = Ti.UI.createView({
        width: 620,
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.flair.add($.__views.main);
    $.__views.container = Ti.UI.createView({
        width: 415,
        left: 0,
        backgroundColor: "#fff",
        borderRadius: 4,
        height: 300,
        id: "container"
    });
    $.__views.main.add($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.flair.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;