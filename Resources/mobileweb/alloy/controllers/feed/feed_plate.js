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
    function goToModel() {
        Alloy.createController("profile/profile", {
            _data: {
                uid: _data.uid,
                photo_big: _data.photo_big,
                name: _data.name,
                plate: _data.plate
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed_plate";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feed_plate = Ti.UI.createTableViewRow({
        className: "row",
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle,
        id: "feed_plate"
    });
    $.__views.feed_plate && $.addTopLevelView($.__views.feed_plate);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.feed_plate.add($.__views.main);
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
        width: 35,
        height: 35,
        borderRadius: 17.5,
        borderColor: "#cecece",
        borderWidth: 2,
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
    $.__views.__alloyId55 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId55"
    });
    $.__views.topRight.add($.__views.__alloyId55);
    $.__views.name = Ti.UI.createLabel({
        left: "0",
        height: Ti.UI.SIZE,
        color: "#ffa633",
        font: {
            fontSize: 18
        },
        id: "name"
    });
    $.__views.__alloyId55.add($.__views.name);
    $.__views.date = Ti.UI.createLabel({
        right: 10,
        height: Ti.UI.SIZE,
        color: "#ccc",
        font: {
            fontSize: 10
        },
        id: "date"
    });
    $.__views.__alloyId55.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#aaa",
        font: {
            fontSize: 12
        },
        id: "title"
    });
    $.__views.topRight.add($.__views.title);
    $.__views.bottomView = Ti.UI.createView({
        left: 55,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: -5,
        id: "bottomView",
        bottom: "10"
    });
    $.__views.main.add($.__views.bottomView);
    goToModel ? $.__views.bottomView.addEventListener("click", goToModel) : __defers["$.__views.bottomView!click!goToModel"] = true;
    $.__views.desc = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        left: 0,
        color: "#333",
        id: "desc",
        width: "200",
        right: "10"
    });
    $.__views.bottomView.add($.__views.desc);
    $.__views.__alloyId56 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#cecece",
        id: "__alloyId56"
    });
    $.__views.main.add($.__views.__alloyId56);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var gender;
    gender = "1" === _data.gender ? "her" : "his";
    new Date(_data.created);
    $.title.setText("changed " + gender + " bumper sticker to");
    $.name.setText(_data.name);
    $.desc.setText('"' + _data.data + '"');
    __defers["$.__views.topView!click!goToUser"] && $.__views.topView.addEventListener("click", goToUser);
    __defers["$.__views.bottomView!click!goToModel"] && $.__views.bottomView.addEventListener("click", goToModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;