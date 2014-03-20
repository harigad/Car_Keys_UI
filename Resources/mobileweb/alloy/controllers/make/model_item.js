function Controller() {
    function goToModel() {
        Alloy.createController("model/model", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "make/model_item";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        layout: "horizontal",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    goToModel ? $.__views.main.addEventListener("click", goToModel) : __defers["$.__views.main!click!goToModel"] = true;
    $.__views.name = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        color: "#5689d5",
        font: {
            fontSize: 24
        },
        id: "name"
    });
    $.__views.main.add($.__views.name);
    $.__views.friends = Ti.UI.createLabel({
        color: "#5689d5",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        right: 10,
        font: {
            fontSize: 12
        },
        id: "friends"
    });
    $.__views.main.add($.__views.friends);
    $.__views.count = Ti.UI.createLabel({
        color: "#666",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        right: 10,
        font: {
            fontSize: 12
        },
        text: "300 cars",
        id: "count"
    });
    $.__views.main.add($.__views.count);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.name.setText(_data.name);
    $.friends.setText("friends (" + _data.count + ")");
    $.count.setText("cars (" + _data.count + ")");
    if (!_data.friends) {
        $.name.setColor("#33");
        $.friends.setColor("#666");
    }
    __defers["$.__views.main!click!goToModel"] && $.__views.main.addEventListener("click", goToModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;