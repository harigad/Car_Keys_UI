function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onWindowFocus() {
        $.search.focus();
    }
    function onSearch() {
        $.friends.setData(friends);
    }
    function onEdit() {
        var carkey = $.plate.getValue();
        "" !== carkey && Alloy.createController("ridealong/send_request/search_carkey_for_ridealong", {
            _data: carkey,
            _callBack: function(success) {
                _callBack(success);
                $.ridealong.close();
            }
        });
    }
    function onCancel() {
        $.ridealong.close();
    }
    function onFocus(e) {
        eval("$." + e.source.id + "_label").setOpacity(.6);
        "" === e.source.getValue() ? eval("$." + e.source.id + "_label").setText(e.source.hint) : eval("$." + e.source.id + "_label").setText("");
    }
    function onBlur(e) {
        eval("$." + e.source.id + "_label").setOpacity(0);
    }
    function onChange(e) {
        "" === e.source.getValue() ? eval("$." + e.source.id + "_label").setText(e.source.hint) : eval("$." + e.source.id + "_label").setText("");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/ridealong";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.ridealong = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        id: "ridealong"
    });
    $.__views.ridealong && $.addTopLevelView($.__views.ridealong);
    onWindowFocus ? $.__views.ridealong.addEventListener("focus", onWindowFocus) : __defers["$.__views.ridealong!focus!onWindowFocus"] = true;
    $.__views.search_bar = Ti.UI.createView({
        top: 0,
        height: 60,
        backgroundColor: "#fff",
        id: "search_bar"
    });
    $.__views.ridealong.add($.__views.search_bar);
    $.__views.__alloyId103 = Ti.UI.createView({
        top: "10",
        height: Ti.UI.SIZE,
        id: "__alloyId103"
    });
    $.__views.search_bar.add($.__views.__alloyId103);
    $.__views.search = Ti.UI.createTextField({
        left: 10,
        width: 210,
        height: 40,
        color: "#fff",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "search",
        hintText: "search friends"
    });
    $.__views.__alloyId103.add($.__views.search);
    onSearch ? $.__views.search.addEventListener("change", onSearch) : __defers["$.__views.search!change!onSearch"] = true;
    $.__views.cancel_btn = Ti.UI.createView({
        right: 10,
        height: 40,
        width: 80,
        backgroundColor: "#fff",
        borderRadius: 2,
        id: "cancel_btn"
    });
    $.__views.__alloyId103.add($.__views.cancel_btn);
    onCancel ? $.__views.cancel_btn.addEventListener("click", onCancel) : __defers["$.__views.cancel_btn!click!onCancel"] = true;
    $.__views.__alloyId104 = Ti.UI.createLabel({
        text: "cancel",
        color: "#999",
        id: "__alloyId104"
    });
    $.__views.cancel_btn.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        top: "50",
        id: "__alloyId105"
    });
    $.__views.ridealong.add($.__views.__alloyId105);
    $.__views.friends = Ti.UI.createTableView({
        id: "friends"
    });
    $.__views.__alloyId105.add($.__views.friends);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _callBack = args._callBack;
    var _people = [];
    $.ridealong.open();
    var _friends;
    login.getFriends(function(friends) {
        _friends = friends;
    });
    __defers["$.__views.ridealong!focus!onWindowFocus"] && $.__views.ridealong.addEventListener("focus", onWindowFocus);
    __defers["$.__views.search!change!onSearch"] && $.__views.search.addEventListener("change", onSearch);
    __defers["$.__views.cancel_btn!click!onCancel"] && $.__views.cancel_btn.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;