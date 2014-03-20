function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile/my_places";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        top: 10,
        bottom: 0,
        width: Ti.UI.FILL,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _data = args._data;
    debugger;
    for (var i = 0; _data.length > i; i++) {
        var my_place_item = Alloy.createController("profile/my_place_item", {
            _data: _data[i]
        });
        $.main.add(my_place_item.getView());
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;