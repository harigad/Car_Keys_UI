function Controller() {
    function onSuccess(friends) {
        for (var i = 0; friends.length > i; i++) {
            var friend = Alloy.createController("car/share/friend", {
                _cid: _cid,
                _data: friends[i],
                _callBack: function() {
                    _callBack();
                    $.show_all_friends.close();
                }
            });
            $.friends.add(friend.getView());
        }
    }
    function onError() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/share/show_all_friends";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.show_all_friends = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "show_all_friends"
    });
    $.__views.show_all_friends && $.addTopLevelView($.__views.show_all_friends);
    $.__views.__alloyId19 = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        id: "__alloyId19"
    });
    $.__views.show_all_friends.add($.__views.__alloyId19);
    $.__views.friends = Ti.UI.createView({
        layout: "vertical",
        id: "friends",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId19.add($.__views.friends);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _cid = args._cid || {};
    var _callBack = args._callBack;
    $.show_all_friends.open();
    login.getFriends(onSuccess, onError);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;