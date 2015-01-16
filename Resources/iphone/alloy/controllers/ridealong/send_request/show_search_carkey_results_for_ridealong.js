function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onCancel() {
        _callBack(false);
        $.show_search_carkey_results_for_ridealong.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/send_request/show_search_carkey_results_for_ridealong";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.show_search_carkey_results_for_ridealong = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        id: "show_search_carkey_results_for_ridealong"
    });
    $.__views.show_search_carkey_results_for_ridealong && $.addTopLevelView($.__views.show_search_carkey_results_for_ridealong);
    $.__views.__alloyId180 = Ti.UI.createView({
        top: "0",
        height: "60",
        backgroundColor: "#f49033",
        id: "__alloyId180"
    });
    $.__views.show_search_carkey_results_for_ridealong.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createView({
        top: "10",
        height: "50",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        left: "10",
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    onCancel ? $.__views.__alloyId182.addEventListener("click", onCancel) : __defers["$.__views.__alloyId182!click!onCancel"] = true;
    $.__views.__alloyId183 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#fff",
        opacity: .5,
        text: "RideAlong",
        id: "question"
    });
    $.__views.__alloyId181.add($.__views.question);
    $.__views.main = Ti.UI.createView({
        id: "main",
        height: Ti.UI.SIZE,
        left: "20",
        right: "20",
        layout: "vertical"
    });
    $.__views.show_search_carkey_results_for_ridealong.add($.__views.main);
    $.__views.usrs = Ti.UI.createView({
        id: "usrs",
        left: "10",
        right: "10",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderRadius: "4"
    });
    $.__views.main.add($.__views.usrs);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    var id = 0;
    for (var i = 0; _data.length > i; i++) if (_data[i].id != id) {
        var usr = Alloy.createController("ridealong/send_request/show_search_carkey_results_for_ridealong_btn", {
            _data: _data,
            _userIndex: i,
            _callBack: function(success) {
                _callBack(success);
                $.show_search_carkey_results_for_ridealong.close();
            }
        });
        $.usrs.add(usr.getView());
        id = _data[i].id;
    }
    $.show_search_carkey_results_for_ridealong.open();
    __defers["$.__views.__alloyId182!click!onCancel"] && $.__views.__alloyId182.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;