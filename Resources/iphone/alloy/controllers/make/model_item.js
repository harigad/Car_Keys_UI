function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToModel() {
        login.canSeeModel(_data.moid) && Alloy.createController("model/model", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "make/model_item";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    goToModel ? $.__views.main.addEventListener("click", goToModel) : __defers["$.__views.main!click!goToModel"] = true;
    $.__views.name = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        color: "#fff",
        font: {
            fontSize: 24
        },
        id: "name"
    });
    $.__views.main.add($.__views.name);
    $.__views.__alloyId79 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId79"
    });
    $.__views.main.add($.__views.__alloyId79);
    $.__views.friends = Ti.UI.createLabel({
        color: "#fff",
        opacity: .5,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        right: 10,
        font: {
            fontSize: 12
        },
        id: "friends"
    });
    $.__views.__alloyId79.add($.__views.friends);
    $.__views.count = Ti.UI.createLabel({
        color: "#fff",
        opacity: .5,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        right: 10,
        font: {
            fontSize: 12
        },
        id: "count"
    });
    $.__views.__alloyId79.add($.__views.count);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var friends = login.getFriendsWithModel(_data.moid);
    login.canSeeModel(_data.moid) || $.name.setOpacity(.4);
    $.friends.setText("friends (" + friends.length + ")");
    $.count.setText("users (" + _data.count + ")");
    $.name.setText(_data.model);
    __defers["$.__views.main!click!goToModel"] && $.__views.main.addEventListener("click", goToModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;