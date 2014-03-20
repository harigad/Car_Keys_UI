function Controller() {
    function onClick() {
        var find_friends = Alloy.createController("find_friends/find_friends", {
            _data: _data
        });
        find_friends.init(function(data) {
            _onNewRowAdded && _onNewRowAdded(data);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cast/cast_views/add_new_cast";
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
    onClick ? $.__views.main.addEventListener("click", onClick) : __defers["$.__views.main!click!onClick"] = true;
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
        backgroundImage: "mobileweb/plus.png",
        width: 100,
        height: 100,
        right: 10,
        borderRadius: 50,
        borderColor: "#fff",
        borderWidth: 4,
        id: "userPhoto"
    });
    $.__views.firstRow.add($.__views.userPhoto);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId1"
    });
    $.__views.firstRow.add($.__views.__alloyId1);
    $.__views.userName = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        wordWrap: false,
        color: "#fff",
        width: Ti.UI.SIZE,
        font: {
            fontSize: 36
        },
        text: "Invite",
        id: "userName",
        left: "0"
    });
    $.__views.__alloyId1.add($.__views.userName);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _onNewRowAdded = args._onNewRowAdded;
    __defers["$.__views.main!click!onClick"] && $.__views.main.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;