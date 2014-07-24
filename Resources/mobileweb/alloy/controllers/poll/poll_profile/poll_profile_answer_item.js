function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "poll/poll_profile/poll_profile_answer_item";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: 10,
        bottom: 10,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.topView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "topView"
    });
    $.__views.main.add($.__views.topView);
    $.__views.photo = Ti.UI.createView({
        top: 0,
        bottom: 0,
        left: 10,
        width: 15,
        height: 15,
        borderRadius: 2,
        backgroundColor: "#eee",
        borderWidth: 2,
        id: "photo"
    });
    $.__views.topView.add($.__views.photo);
    $.__views.topRight = Ti.UI.createView({
        left: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "topRight",
        width: "200"
    });
    $.__views.topView.add($.__views.topRight);
    $.__views.desc = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: 12
        },
        id: "desc"
    });
    $.__views.topRight.add($.__views.desc);
    $.__views.users = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "users",
        layout: "horizontal",
        top: "5"
    });
    $.__views.topRight.add($.__views.users);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _answer = args._answer || {};
    var _countObj = args._countObj || null;
    var _users = _countObj.users || null;
    $.desc.setText(_answer);
    if (_users) {
        for (var i = 0; 7 > i; i++) {
            var user = Alloy.createController("car/radio/radio_main", {
                _data: _users[0]
            });
            $.users.add(user.getView());
        }
        if (_users.length > 0) {
            var _showall = Alloy.createController("car/radio/radio_main", {
                _data: {
                    _showall: true,
                    _callBack: function() {}
                }
            });
            $.users.add(_showall.getView());
        }
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;