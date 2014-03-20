function Controller() {
    function updateMember() {
        var find_friends = Alloy.createController("find_friends/find_friends", {
            _data: _data
        });
        find_friends.init(function(data) {
            if (data) {
                _data = data;
                $.userName.setText(data.name);
                _onUpdate && _onUpdate(data);
            } else _onUpdate(null);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cast/cast_views/pending_cast";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        top: 0,
        bottom: 0,
        width: Ti.UI.FILL,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    updateMember ? $.__views.main.addEventListener("click", updateMember) : __defers["$.__views.main!click!updateMember"] = true;
    $.__views.firstRow = Ti.UI.createView({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        id: "firstRow"
    });
    $.__views.main.add($.__views.firstRow);
    $.__views.userPhoto = Ti.UI.createView({
        left: 0,
        width: 40,
        height: 40,
        right: 5,
        borderRadius: 20,
        backgroundColor: "#cecece",
        borderColor: "#eee",
        borderWidth: 3,
        id: "userPhoto"
    });
    $.__views.firstRow.add($.__views.userPhoto);
    $.__views.secondRow = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "secondRow"
    });
    $.__views.firstRow.add($.__views.secondRow);
    $.__views.userName = Ti.UI.createLabel({
        left: 50,
        height: Ti.UI.SIZE,
        wordWrap: false,
        color: "#999",
        font: {
            fontSize: 24
        },
        id: "userName"
    });
    $.__views.secondRow.add($.__views.userName);
    $.__views.pending_label = Ti.UI.createLabel({
        left: 50,
        height: Ti.UI.SIZE,
        wordWrap: false,
        color: "#2179ca",
        font: {
            fontSize: 12
        },
        text: "Invite Sent! Waiting for Acceptance",
        id: "pending_label"
    });
    $.__views.secondRow.add($.__views.pending_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _onUpdate = args._onUpdate;
    __defers["$.__views.main!click!updateMember"] && $.__views.main.addEventListener("click", updateMember);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;