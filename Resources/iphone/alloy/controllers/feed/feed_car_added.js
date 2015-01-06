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
                name: _data.name,
                plate: _data.plate
            }
        });
    }
    function goToModel() {
        login.canSeeModel(_data.moid) ? Alloy.createController("model/model", {
            _data: _data
        }) : Alloy.createController("make/make", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed_car_added";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feed_car_added = Ti.UI.createTableViewRow({
        className: "row",
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle,
        id: "feed_car_added"
    });
    $.__views.feed_car_added && $.addTopLevelView($.__views.feed_car_added);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.feed_car_added.add($.__views.main);
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
    $.__views.name = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#ffa633",
        font: {
            fontSize: 18
        },
        text: "Hari Krishna",
        id: "name"
    });
    $.__views.topRight.add($.__views.name);
    $.__views.date = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#aaa",
        font: {
            fontSize: 12
        },
        text: "january 2nd, 2003",
        id: "date"
    });
    $.__views.topRight.add($.__views.date);
    $.__views.bottomView = Ti.UI.createView({
        left: 55,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: -10,
        id: "bottomView",
        bottom: "10"
    });
    $.__views.main.add($.__views.bottomView);
    goToModel ? $.__views.bottomView.addEventListener("click", goToModel) : __defers["$.__views.bottomView!click!goToModel"] = true;
    $.__views.desc = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        left: "0",
        color: "#333",
        id: "desc",
        width: "150",
        right: "10"
    });
    $.__views.bottomView.add($.__views.desc);
    $.__views.logo_container = Ti.UI.createView({
        left: "0",
        width: 50,
        height: 50,
        backgroundColor: "#333",
        borderRadius: 25,
        borderColor: "#eee",
        borderWidth: 3,
        id: "logo_container"
    });
    $.__views.bottomView.add($.__views.logo_container);
    $.__views.logo = Ti.UI.createView({
        width: 35,
        height: 35,
        id: "logo"
    });
    $.__views.logo_container.add($.__views.logo);
    $.__views.__alloyId52 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#cecece",
        id: "__alloyId52"
    });
    $.__views.main.add($.__views.__alloyId52);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var gender;
    gender = "1" === _data.gender ? "her" : "his";
    var date = new Date(_data.created);
    $.date.setText(date.toDateString());
    $.name.setText(_data.name);
    $.desc.setText("added " + _data.year + " " + _data.make + " " + _data.model + " to " + gender + " profile");
    __defers["$.__views.topView!click!goToUser"] && $.__views.topView.addEventListener("click", goToUser);
    __defers["$.__views.bottomView!click!goToModel"] && $.__views.bottomView.addEventListener("click", goToModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;