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
        Alloy.createController("profile/profile", {
            _data: {
                uid: _data.uid,
                photo: _data.photo,
                photo_big: _data.photo_big,
                name: _data.name,
                plate: _data.plate
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed_rides";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feed_rides = Ti.UI.createTableViewRow({
        className: "row",
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle,
        id: "feed_rides"
    });
    $.__views.feed_rides && $.addTopLevelView($.__views.feed_rides);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.feed_rides.add($.__views.main);
    $.__views.topView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 0,
        bottom: 0,
        id: "topView"
    });
    $.__views.main.add($.__views.topView);
    goToUser ? $.__views.topView.addEventListener("click", goToUser) : __defers["$.__views.topView!click!goToUser"] = true;
    $.__views.photo = Ti.UI.createView({
        top: 10,
        bottom: 10,
        left: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: "#cecece",
        borderWidth: 2,
        backgroundColor: "#cececce",
        id: "photo"
    });
    $.__views.topView.add($.__views.photo);
    $.__views.topRight = Ti.UI.createView({
        left: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "topRight"
    });
    $.__views.topView.add($.__views.topRight);
    $.__views.name = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#ffa633",
        font: {
            fontSize: 18
        },
        id: "name"
    });
    $.__views.topRight.add($.__views.name);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#eee",
        id: "__alloyId61"
    });
    $.__views.main.add($.__views.__alloyId61);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var gender;
    gender = "1" === _data.gender ? "her" : "his";
    $.photo.setBackgroundImage(_data.photo);
    $.name.setText(_data.name);
    __defers["$.__views.topView!click!goToUser"] && $.__views.topView.addEventListener("click", goToUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;