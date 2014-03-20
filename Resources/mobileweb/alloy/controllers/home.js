function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#eee",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.scroll = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "scroll"
    });
    $.__views.home.add($.__views.scroll);
    $.__views.main = Ti.UI.createView({
        id: "main"
    });
    $.__views.scroll.add($.__views.main);
    $.__views.feed = Alloy.createController("feed/feed", {
        id: "feed",
        __parentSymbol: $.__views.main
    });
    $.__views.feed.setParent($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;