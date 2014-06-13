function Controller() {
    function goToUser() {
        Alloy.createController("profile/profile", {
            _data: {
                id: _data.ouid,
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
                id: _data.uid,
                photo: _data.photo,
                photo_big: _data.photo_big,
                name: _data.name,
                plate: _data.plate
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed_ridealong";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
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
        text: "Hari Krishna",
        id: "name"
    });
    $.__views.topRight.add($.__views.name);
    $.__views.date = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#aaa",
        font: {
            fontSize: 11
        },
        text: "january 2nd, 2003",
        id: "date"
    });
    $.__views.topRight.add($.__views.date);
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
        height: Ti.UI.SIZE,
        left: 10,
        color: "#333",
        id: "desc",
        width: "150",
        right: "10"
    });
    $.__views.bottomView.add($.__views.desc);
    $.__views.__alloyId42 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#cecece",
        id: "__alloyId42"
    });
    $.__views.main.add($.__views.__alloyId42);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var gender;
    gender = "1" === _data.gender ? "her" : "his";
    var date = new Date(_data.created);
    $.date.setText(date.toDateString());
    $.photo.setBackgroundImage(_data.ophoto);
    $.logo.setBackgroundImage(_data.photo);
    $.name.setText(_data.oname);
    $.desc.setText("was riding along in a " + _data.model + " with " + _data.name);
    __defers["$.__views.topView!click!goToUser"] && $.__views.topView.addEventListener("click", goToUser);
    __defers["$.__views.bottomView!click!goToModel"] && $.__views.bottomView.addEventListener("click", goToModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;