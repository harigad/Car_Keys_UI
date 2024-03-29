function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToMake() {
        Alloy.createController("make/make", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "model/model";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.model = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
        id: "model"
    });
    $.__views.model && $.addTopLevelView($.__views.model);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.model.add($.__views.scroll);
    $.__views.profile_container = Ti.UI.createView({
        backgroundColor: "#ffa633",
        top: 0,
        height: 150,
        id: "profile_container"
    });
    $.__views.scroll.add($.__views.profile_container);
    $.__views.profile_container_container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: 10,
        layout: "vertical",
        id: "profile_container_container"
    });
    $.__views.profile_container.add($.__views.profile_container_container);
    $.__views.photo = Ti.UI.createView({
        backgroundColor: "#333",
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "#cecece",
        id: "photo"
    });
    $.__views.profile_container_container.add($.__views.photo);
    goToMake ? $.__views.photo.addEventListener("click", goToMake) : __defers["$.__views.photo!click!goToMake"] = true;
    $.__views.logo = Ti.UI.createView({
        width: 30,
        height: 30,
        id: "logo"
    });
    $.__views.photo.add($.__views.logo);
    $.__views.plate = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 36,
            fontWeight: "bold"
        },
        id: "plate"
    });
    $.__views.profile_container_container.add($.__views.plate);
    $.__views.cars_container = Ti.UI.createView({
        top: 120,
        height: Ti.UI.SIZE,
        id: "cars_container"
    });
    $.__views.scroll.add($.__views.cars_container);
    $.__views.content = Ti.UI.createView({
        top: 0,
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "content"
    });
    $.__views.cars_container.add($.__views.content);
    $.__views.friends = Alloy.createController("model/model_friends", {
        id: "friends",
        __parentSymbol: $.__views.content
    });
    $.__views.friends.setParent($.__views.content);
    $.__views.polls = Alloy.createController("poll/polls", {
        id: "polls",
        __parentSymbol: $.__views.content
    });
    $.__views.polls.setParent($.__views.content);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.model
    });
    $.__views.header.setParent($.__views.model);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.header.openWindow($.model);
    $.friends.init(_data.moid, _data.model);
    $.polls.init(_data);
    $.logo.setBackgroundImage("logos/48/" + _data.logo);
    $.plate.setText(_data.model);
    $.model.open();
    __defers["$.__views.photo!click!goToMake"] && $.__views.photo.addEventListener("click", goToMake);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;