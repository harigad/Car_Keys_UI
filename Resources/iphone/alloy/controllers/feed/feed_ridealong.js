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
                uid: _data.ouid,
                photo: _data.ophoto,
                photo_big: _data.ophoto_big,
                name: _data.oname,
                plate: _data.oplate
            }
        });
    }
    function goToModel() {
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
    this.__controllerPath = "feed/feed_ridealong";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feed_ridealong = Ti.UI.createTableViewRow({
        className: "row",
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle,
        id: "feed_ridealong"
    });
    $.__views.feed_ridealong && $.addTopLevelView($.__views.feed_ridealong);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.feed_ridealong.add($.__views.main);
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
    $.__views.__alloyId58 = Ti.UI.createView({
        left: "0",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        width: Ti.UI.SIZE,
        id: "__alloyId58"
    });
    $.__views.topRight.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        right: 3,
        height: Ti.UI.SIZE,
        color: "#aaa",
        font: {
            fontSize: 12
        },
        text: "was",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.date_0 = Ti.UI.createLabel({
        right: 3,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 12
        },
        id: "date_0"
    });
    $.__views.__alloyId58.add($.__views.date_0);
    $.__views.date_1 = Ti.UI.createLabel({
        right: 3,
        height: Ti.UI.SIZE,
        color: "#aaa",
        font: {
            fontSize: 12
        },
        id: "date_1"
    });
    $.__views.__alloyId58.add($.__views.date_1);
    $.__views.date_2 = Ti.UI.createLabel({
        right: 3,
        height: Ti.UI.SIZE,
        color: "#aaa",
        font: {
            fontSize: 12
        },
        id: "date_2"
    });
    $.__views.__alloyId58.add($.__views.date_2);
    $.__views.date_3 = Ti.UI.createLabel({
        right: 3,
        height: Ti.UI.SIZE,
        color: "#aaa",
        font: {
            fontSize: 12
        },
        id: "date_3"
    });
    $.__views.__alloyId58.add($.__views.date_3);
    $.__views.bottomView = Ti.UI.createView({
        left: 55,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "bottomView",
        bottom: "10"
    });
    $.__views.main.add($.__views.bottomView);
    goToModel ? $.__views.bottomView.addEventListener("click", goToModel) : __defers["$.__views.bottomView!click!goToModel"] = true;
    $.__views.logo_container = Ti.UI.createView({
        left: 0,
        width: 50,
        height: 50,
        backgroundColor: "#cecece",
        borderRadius: 25,
        borderColor: "#eee",
        borderWidth: 3,
        id: "logo_container"
    });
    $.__views.bottomView.add($.__views.logo_container);
    $.__views.logo = Ti.UI.createView({
        width: 50,
        height: 50,
        id: "logo"
    });
    $.__views.logo_container.add($.__views.logo);
    $.__views.desc = Ti.UI.createLabel({
        id: "desc",
        width: "150",
        height: Ti.UI.SIZE,
        left: "5"
    });
    $.__views.bottomView.add($.__views.desc);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#cecece",
        id: "__alloyId60"
    });
    $.__views.main.add($.__views.__alloyId60);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var gender;
    gender = "1" === _data.gender ? "her" : "his";
    new Date(_data.created);
    if ("1" == _data.data || 1 == _data.data) {
        $.date_0.setText("test driving");
        $.date_1.setText("a");
        $.date_2.setText(_data.model);
        $.date_3.setText("at");
    } else {
        $.date_0.setText("riding along");
        $.date_1.setText("in a");
        $.date_2.setText(_data.model);
        $.date_3.setText("with");
    }
    $.name.setText(_data.oname);
    $.desc.setText(_data.name);
    __defers["$.__views.topView!click!goToUser"] && $.__views.topView.addEventListener("click", goToUser);
    __defers["$.__views.bottomView!click!goToModel"] && $.__views.bottomView.addEventListener("click", goToModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;