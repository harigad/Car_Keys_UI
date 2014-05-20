function Controller() {
    function goToModel() {
        login.canSeeModel(_data.moid) && Alloy.createController("model/model", {
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
        color: "#ffa633",
        font: {
            fontSize: 24
        },
        id: "name"
    });
    $.__views.main.add($.__views.name);
    $.__views.count = Ti.UI.createLabel({
        color: "#666",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        right: 10,
        font: {
            fontSize: 12
        },
        id: "count"
    });
    $.__views.main.add($.__views.count);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    login.canSeeModel(_data.moid) || $.name.setColor("#333");
    $.name.setText(_data.model);
    $.count.setText(_data.count + " cars registered");
    __defers["$.__views.main!click!goToModel"] && $.__views.main.addEventListener("click", goToModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;