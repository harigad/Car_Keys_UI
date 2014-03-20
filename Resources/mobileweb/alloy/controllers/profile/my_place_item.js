function Controller() {
    function goToPlace() {
        login.go("place", _data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile/my_place_item";
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
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "horizontal",
        left: "10",
        top: "10",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId11"
    });
    $.__views.main.add($.__views.__alloyId11);
    $.__views.roleIcon = Ti.UI.createImageView({
        id: "roleIcon",
        height: "25",
        top: "0",
        bottom: "0",
        left: "0",
        right: "5"
    });
    $.__views.__alloyId11.add($.__views.roleIcon);
    $.__views.text = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#111",
        width: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        id: "text"
    });
    $.__views.__alloyId11.add($.__views.text);
    $.__views.placename = Ti.UI.createLabel({
        top: 0,
        bottom: 10,
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        color: "#2179ca",
        font: {
            fontSize: 12
        },
        id: "placename"
    });
    $.__views.main.add($.__views.placename);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var roleNames = [ "", "Founder/Director", "Team Member", "Investor", "Advisor", "Marketing/Web Guru" ];
    var roleIcons = [ "", "mobileweb/bulb_black.png", "", "mobileweb/dollar_black.png", "mobileweb/advisor_black.png", "mobileweb/marketing_black.png", "mobileweb/attorney_black.png", "mobileweb/banker_black.png" ];
    $.text.setText(roleNames[_data.role_id]);
    $.placename.setText("@ " + _data.placename);
    $.roleIcon.setImage(roleIcons[_data.role_id]);
    __defers["$.__views.main!click!goToPlace"] && $.__views.main.addEventListener("click", goToPlace);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;