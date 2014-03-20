function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile/circle_view";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.circle_view = Ti.UI.createView({
        layout: "vertical",
        width: "120",
        height: Ti.UI.SIZE,
        bottom: "10",
        top: "0",
        id: "circle_view"
    });
    $.__views.circle_view && $.addTopLevelView($.__views.circle_view);
    $.__views.circle = Ti.UI.createView({
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "#eee",
        id: "circle"
    });
    $.__views.circle_view.add($.__views.circle);
    $.__views.textContainer = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "textContainer"
    });
    $.__views.circle_view.add($.__views.textContainer);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId10"
    });
    $.__views.textContainer.add($.__views.__alloyId10);
    $.__views.roleIcon = Ti.UI.createImageView({
        id: "roleIcon",
        height: "15",
        right: "5"
    });
    $.__views.__alloyId10.add($.__views.roleIcon);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        color: "#fff",
        id: "name"
    });
    $.__views.__alloyId10.add($.__views.name);
    $.__views.date = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 11
        },
        text: "Bucca De Beppo",
        id: "date"
    });
    $.__views.textContainer.add($.__views.date);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var roleIcons = [ "", "mobileweb/bulb.png", "", "mobileweb/dollar.png", "mobileweb/advisor.png", "mobileweb/marketing.png", "mobileweb/attorney.png", "mobileweb/banker.png" ];
    $.circle.setBackgroundImage(_data.recipient_photo);
    $.roleIcon.setImage(roleIcons[_data.role_id]);
    $.name.setText(_data.recipientname);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;