function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "map/map";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.map = Ti.UI.createWindow({
        id: "map"
    });
    $.__views.map && $.addTopLevelView($.__views.map);
    $.__views.__alloyId68 = Ti.UI.createMap({
        id: "__alloyId68"
    });
    $.__views.map.add($.__views.__alloyId68);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.map.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;