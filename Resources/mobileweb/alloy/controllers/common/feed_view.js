function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "common/feed_view";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        top: 0,
        bottom: 10,
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
    for (var i = 0; _data.length > i; i++) {
        var row;
        row = _data[i].recipient ? Alloy.createController("common/flair", {
            _data: _data[i]
        }) : Alloy.createController("common/new_cast", {
            _data: _data[i]
        });
        $.main.add(row.getView());
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;