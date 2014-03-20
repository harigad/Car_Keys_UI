function Controller() {
    function goToUser() {
        login.go("profile", _data);
    }
    function goToPlace() {
        login.go("place", _data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "common/new_cast";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    goToPlace ? $.__views.main.addEventListener("click", goToPlace) : __defers["$.__views.main!click!goToPlace"] = true;
    $.__views.firstRow = Ti.UI.createView({
        left: 10,
        right: 10,
        top: 10,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bubbleParent: false,
        width: Ti.UI.SIZE,
        id: "firstRow"
    });
    $.__views.main.add($.__views.firstRow);
    goToUser ? $.__views.firstRow.addEventListener("click", goToUser) : __defers["$.__views.firstRow!click!goToUser"] = true;
    $.__views.userPhoto = Ti.UI.createView({
        width: 20,
        height: 20,
        right: 5,
        borderRadius: 2,
        id: "userPhoto"
    });
    $.__views.firstRow.add($.__views.userPhoto);
    $.__views.userName = Ti.UI.createLabel({
        height: 20,
        wordWrap: false,
        color: "#333",
        width: Ti.UI.SIZE,
        font: {
            fontSize: 20
        },
        id: "userName"
    });
    $.__views.firstRow.add($.__views.userName);
    $.__views.secondRow = Ti.UI.createView({
        top: 5,
        left: 10,
        right: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "secondRow"
    });
    $.__views.main.add($.__views.secondRow);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId6"
    });
    $.__views.secondRow.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 0,
        height: Ti.UI.SIZE,
        color: "#999",
        font: {
            fontSize: 12
        },
        text: "joined",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.place_name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 4,
        right: 4,
        height: Ti.UI.SIZE,
        color: "#2179ca",
        font: {
            fontSize: 12
        },
        id: "place_name"
    });
    $.__views.__alloyId6.add($.__views.place_name);
    $.__views.role_title_before = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 0,
        height: Ti.UI.SIZE,
        color: "#999",
        font: {
            fontSize: 12
        },
        id: "role_title_before"
    });
    $.__views.__alloyId6.add($.__views.role_title_before);
    $.__views.roleIcon = Ti.UI.createImageView({
        id: "roleIcon",
        height: "15",
        top: "0",
        bottom: "0",
        left: "3",
        right: "3"
    });
    $.__views.__alloyId6.add($.__views.roleIcon);
    $.__views.role_title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 4,
        height: Ti.UI.SIZE,
        color: "#111",
        font: {
            fontSize: 12
        },
        id: "role_title"
    });
    $.__views.__alloyId6.add($.__views.role_title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var roleNames = [ "", "Founder", "Investor", "Advisor", "Team Members", "Marketing Guru", "Attorney", "Banker" ];
    var roleNames_before = [ "", "as the", "as an", "as an", "as one of the", "as the", "as its", "as the" ];
    var roleIcons = [ "", "mobileweb/bulb_black.png", "", "mobileweb/dollar_black.png", "mobileweb/advisor_black.png", "mobileweb/marketing_black.png", "mobileweb/attorney_black.png", "mobileweb/banker_black.png" ];
    $.userPhoto.setBackgroundImage(_data.photo);
    $.userName.setText(_data.name);
    var roleName = roleNames[_data.role_id];
    $.roleIcon.setImage(roleIcons[_data.role_id]);
    $.role_title.setText(roleName);
    var rolName_before = roleNames_before[_data.role_id];
    $.role_title_before.setText(rolName_before);
    $.place_name.setText(_data.placename);
    __defers["$.__views.main!click!goToPlace"] && $.__views.main.addEventListener("click", goToPlace);
    __defers["$.__views.firstRow!click!goToUser"] && $.__views.firstRow.addEventListener("click", goToUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;