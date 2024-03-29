function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToUser() {
        _showall ? _callBack ? _callBack() : Alloy.createController("car/radio/radio_show_all", {
            _data: _data
        }) : Alloy.createController("profile/profile", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/radio/radio_main";
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
        width: Ti.UI.SIZE,
        right: 2,
        borderRadius: 2,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    goToUser ? $.__views.main.addEventListener("click", goToUser) : __defers["$.__views.main!click!goToUser"] = true;
    $.__views.photo = Ti.UI.createView({
        width: 25,
        height: 25,
        backgroundColor: "#ccc",
        borderRadius: 0,
        id: "photo"
    });
    $.__views.main.add($.__views.photo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _data = args._data;
    args._uid || null;
    var _showall = args._showall || false;
    var _callBack = args._callBack || null;
    _showall ? $.photo.setBackgroundImage("common/dot_dot_dot.png") : $.photo.setBackgroundImage(_data.photo);
    __defers["$.__views.main!click!goToUser"] && $.__views.main.addEventListener("click", goToUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;