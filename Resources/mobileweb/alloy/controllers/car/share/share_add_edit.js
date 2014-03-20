function Controller() {
    function onSuccess(friends) {
        for (var i = 0; friends.length > i; i++) {
            var friend = Alloy.createController("car/share/share_friend", {
                _cid: _cid,
                _data: friends[i],
                _callBack: function() {
                    _callBack();
                    $.share_add_edit.close();
                }
            });
            $.friends.add(friend.getView());
        }
    }
    function onError() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/share/share_add_edit";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.share_add_edit = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "share_add_edit"
    });
    $.__views.share_add_edit && $.addTopLevelView($.__views.share_add_edit);
    $.__views.__alloyId20 = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        id: "__alloyId20"
    });
    $.__views.share_add_edit.add($.__views.__alloyId20);
    $.__views.friends = Ti.UI.createView({
        layout: "vertical",
        id: "friends",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId20.add($.__views.friends);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _cid = args._cid || {};
    var _callBack = args._callBack;
    $.share_add_edit.open();
    login.getFriends(onSuccess, onError);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;