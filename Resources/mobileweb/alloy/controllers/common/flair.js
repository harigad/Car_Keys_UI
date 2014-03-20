function Controller() {
    function goToUser() {
        debugger;
        login.go("profile", _data);
    }
    function goToPlace() {
        login.go("place", _data);
    }
    function goToRecipient() {
        var data = {};
        data.uid = _data.recipient;
        data.name = _data.recipientname;
        data.photo = _data.recipient_photo;
        data.photo_big = _data.recipient_photo_big;
        login.go("profile", data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "common/flair";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        bottom: 10,
        layout: "vertical",
        height: Ti.UI.SIZE,
        borderRadius: 4,
        backgroundColor: "#fff",
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
        width: Ti.UI.SIZE,
        id: "firstRow"
    });
    $.__views.main.add($.__views.firstRow);
    $.__views.userPhoto = Ti.UI.createView({
        width: 40,
        height: 40,
        right: 5,
        borderRadius: 20,
        borderColor: "#eee",
        borderWidth: 3,
        bubbleParent: false,
        id: "userPhoto"
    });
    $.__views.firstRow.add($.__views.userPhoto);
    goToRecipient ? $.__views.userPhoto.addEventListener("click", goToRecipient) : __defers["$.__views.userPhoto!click!goToRecipient"] = true;
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId4"
    });
    $.__views.firstRow.add($.__views.__alloyId4);
    $.__views.userName = Ti.UI.createLabel({
        top: 0,
        height: Ti.UI.SIZE,
        wordWrap: false,
        color: "#333",
        width: Ti.UI.SIZE,
        bubbleParent: false,
        font: {
            fontSize: 24
        },
        id: "userName",
        left: "0"
    });
    $.__views.__alloyId4.add($.__views.userName);
    goToRecipient ? $.__views.userName.addEventListener("click", goToRecipient) : __defers["$.__views.userName!click!goToRecipient"] = true;
    $.__views.__alloyId5 = Ti.UI.createView({
        top: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.roleIcon = Ti.UI.createImageView({
        id: "roleIcon",
        height: "15",
        top: "0",
        bottom: "0",
        left: "0",
        right: "5"
    });
    $.__views.__alloyId5.add($.__views.roleIcon);
    $.__views.role_title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 0,
        height: Ti.UI.SIZE,
        color: "#111",
        font: {
            fontSize: 12
        },
        id: "role_title"
    });
    $.__views.__alloyId5.add($.__views.role_title);
    $.__views.place_name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 4,
        height: Ti.UI.SIZE,
        color: "#2179ca",
        font: {
            fontSize: 12
        },
        id: "place_name"
    });
    $.__views.__alloyId5.add($.__views.place_name);
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
    $.__views.userInfoRow = Ti.UI.createView({
        top: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bubbleParent: false,
        left: 0,
        id: "userInfoRow"
    });
    $.__views.secondRow.add($.__views.userInfoRow);
    goToUser ? $.__views.userInfoRow.addEventListener("click", goToUser) : __defers["$.__views.userInfoRow!click!goToUser"] = true;
    $.__views.endorsed_by_txt = Ti.UI.createLabel({
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#999",
        font: {
            fontSize: 12
        },
        text: "was flaired by",
        id: "endorsed_by_txt"
    });
    $.__views.userInfoRow.add($.__views.endorsed_by_txt);
    $.__views.userPhoto_small = Ti.UI.createView({
        width: 20,
        height: 20,
        left: 4,
        right: 4,
        borderRadius: 2,
        id: "userPhoto_small"
    });
    $.__views.userInfoRow.add($.__views.userPhoto_small);
    $.__views.user_name = Ti.UI.createLabel({
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#2179ca",
        font: {
            fontSize: 18
        },
        id: "user_name"
    });
    $.__views.userInfoRow.add($.__views.user_name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var roleNames = [ "", "Founder of", "Investor @", "Advisor for", "Team Member @", "Marketing/Web Guru for", "Attorney for", "Banker for" ];
    var roleIcons = [ "", "mobileweb/bulb_black.png", "", "mobileweb/dollar_black.png", "mobileweb/advisor_black.png", "mobileweb/marketing_black.png", "mobileweb/attorney_black.png", "mobileweb/banker_black.png" ];
    $.userPhoto.setBackgroundImage(_data.recipient_photo);
    $.userName.setText(_data.recipientname);
    var roleName = roleNames[_data.role_id];
    $.roleIcon.setImage(roleIcons[_data.role_id]);
    $.role_title.setText(roleName);
    $.place_name.setText(_data.placename);
    $.userPhoto_small.setBackgroundImage(_data.photo);
    $.user_name.setText(_data.name);
    __defers["$.__views.main!click!goToPlace"] && $.__views.main.addEventListener("click", goToPlace);
    __defers["$.__views.userPhoto!click!goToRecipient"] && $.__views.userPhoto.addEventListener("click", goToRecipient);
    __defers["$.__views.userName!click!goToRecipient"] && $.__views.userName.addEventListener("click", goToRecipient);
    __defers["$.__views.userInfoRow!click!goToUser"] && $.__views.userInfoRow.addEventListener("click", goToUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;