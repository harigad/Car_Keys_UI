function Controller() {
    function onSuccess(friends) {
        clear();
        _friends = friends;
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
    function onSearch() {
        _searchTime && clearTimeout(_searchTime);
        clear();
        _searchTime = setTimeout(function() {
            _searchTime = null;
            search();
        }, 300);
    }
    function search() {
        var val = $.search.getValue();
        val && (val = val.toLowerCase());
        for (var i = 0; _friends.length > i; i++) {
            var lowerName = _friends[i].name.toLowerCase();
            if (-1 !== lowerName.indexOf(val)) {
                var friend = Alloy.createController("car/share/share_friend", {
                    _cid: _cid,
                    _data: _friends[i],
                    _callBack: function() {
                        _callBack();
                        $.share_add_edit.close();
                    }
                });
                $.friends.add(friend.getView());
            }
        }
    }
    function onCancel() {
        $.share_add_edit.close();
    }
    function onError() {}
    function clear() {
        var len = $.friends.children.length;
        for (var i = 0; len > i; i++) $.friends.remove($.friends.children[0]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/share/share_add_edit";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.share_add_edit = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "share_add_edit"
    });
    $.__views.share_add_edit && $.addTopLevelView($.__views.share_add_edit);
    $.__views.search_bar = Ti.UI.createView({
        top: 0,
        height: 50,
        backgroundColor: "#ffa633",
        id: "search_bar"
    });
    $.__views.share_add_edit.add($.__views.search_bar);
    $.__views.search = Ti.UI.createTextField({
        left: 10,
        width: 210,
        height: 40,
        color: "#fff",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "search",
        hintText: "search friends"
    });
    $.__views.search_bar.add($.__views.search);
    onSearch ? $.__views.search.addEventListener("change", onSearch) : __defers["$.__views.search!change!onSearch"] = true;
    $.__views.cancel_btn = Ti.UI.createView({
        right: 10,
        height: 40,
        width: 80,
        backgroundColor: "#fff",
        borderRadius: 2,
        id: "cancel_btn"
    });
    $.__views.search_bar.add($.__views.cancel_btn);
    onCancel ? $.__views.cancel_btn.addEventListener("click", onCancel) : __defers["$.__views.cancel_btn!click!onCancel"] = true;
    $.__views.__alloyId25 = Ti.UI.createLabel({
        text: "cancel",
        color: "#999",
        id: "__alloyId25"
    });
    $.__views.cancel_btn.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        top: "50",
        id: "__alloyId26"
    });
    $.__views.share_add_edit.add($.__views.__alloyId26);
    $.__views.friends = Ti.UI.createView({
        layout: "vertical",
        id: "friends",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId26.add($.__views.friends);
    $.__views.__alloyId27 = Ti.UI.createView({
        top: "20",
        left: "10",
        height: Ti.UI.SIZE,
        id: "__alloyId27"
    });
    $.__views.friends.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        text: "loading...",
        height: Ti.UI.SIZE,
        color: "#999",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _cid = args._cid || {};
    var _callBack = args._callBack;
    var _friends;
    var _searchTime;
    $.share_add_edit.open();
    login.getFriends(onSuccess, onError);
    __defers["$.__views.search!change!onSearch"] && $.__views.search.addEventListener("change", onSearch);
    __defers["$.__views.cancel_btn!click!onCancel"] && $.__views.cancel_btn.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;