function Controller() {
    function profile() {
        login.go("profile", _data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cast/cast_views/normal_cast";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        left: 0,
        bottom: 10,
        width: Ti.UI.SIZE,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    profile ? $.__views.main.addEventListener("click", profile) : __defers["$.__views.main!click!profile"] = true;
    $.__views.firstRow = Ti.UI.createView({
        left: 0,
        top: 0,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        width: Ti.UI.SIZE,
        id: "firstRow"
    });
    $.__views.main.add($.__views.firstRow);
    $.__views.userPhoto = Ti.UI.createView({
        width: 100,
        height: 100,
        right: 15,
        borderRadius: 50,
        borderColor: "#fff",
        borderWidth: 4,
        id: "userPhoto"
    });
    $.__views.firstRow.add($.__views.userPhoto);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId2"
    });
    $.__views.firstRow.add($.__views.__alloyId2);
    $.__views.userName = Ti.UI.createLabel({
        left: "0",
        height: Ti.UI.SIZE,
        wordWrap: false,
        color: "#fff",
        width: Ti.UI.SIZE,
        font: {
            fontSize: 36
        },
        id: "userName"
    });
    $.__views.__alloyId2.add($.__views.userName);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.roleIcon = Ti.UI.createView({
        id: "roleIcon",
        width: "25",
        height: "25",
        top: "0",
        bottom: "0",
        left: "0"
    });
    $.__views.__alloyId3.add($.__views.roleIcon);
    $.__views.role = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 0,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 14
        },
        id: "role"
    });
    $.__views.__alloyId3.add($.__views.role);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var role = [ "", "Director", "Team member", "Investor", "Advisor", "Marketing/Web Guru", "Attorney", "Banker" ];
    var roleIcons = [ "", "mobileweb/bulb.png", "", "mobileweb/dollar.png", "mobileweb/advisor.png", "mobileweb/marketing.png", "mobileweb/attorney.png", "mobileweb/banker.png" ];
    $.userPhoto.setBackgroundImage(_data.photo);
    $.roleIcon.setBackgroundImage(roleIcons[_data.role_id]);
    $.userName.setText(_data.name);
    $.role.setText(role[_data.role_id]);
    __defers["$.__views.main!click!profile"] && $.__views.main.addEventListener("click", profile);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;