function Controller() {
    function onClick() {
        var find_friends = Alloy.createController("find_friends/find_friends", {
            _data: _data
        });
        find_friends.init(function() {
            $.invite.setText("Invitation Sent!");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cast/not_joined";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    onClick ? $.__views.main.addEventListener("click", onClick) : __defers["$.__views.main!click!onClick"] = true;
    $.__views.userphoto = Ti.UI.createView({
        top: 50,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 10,
        backgroundColor: "#ccc",
        borderColor: "#eee",
        id: "userphoto"
    });
    $.__views.main.add($.__views.userphoto);
    $.__views.icon = Ti.UI.createView({
        width: 40,
        height: 40,
        backgroundImage: "mobileweb/plus.png",
        id: "icon"
    });
    $.__views.userphoto.add($.__views.icon);
    $.__views.invite = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        top: 200,
        font: {
            fontSize: 26
        },
        color: "#eee",
        id: "invite"
    });
    $.__views.main.add($.__views.invite);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    $.invite.setText("Invite the Founder");
    __defers["$.__views.main!click!onClick"] && $.__views.main.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;