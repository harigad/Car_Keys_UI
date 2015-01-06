function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function show_all() {
        draw(len, friends.length);
    }
    function draw(start, end) {
        for (var i = start; end > i; i++) {
            var friend = Alloy.createController("model/model_friend", {
                _data: friends[i]
            });
            $.list.add(friend.getView());
            friends.length - 1 > i && $.list.add(Ti.UI.createView({
                height: 1,
                backgroundColor: "#eee"
            }));
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "model/model_friends";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main",
        backgroundColor: "#fff",
        borderRadius: "4"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.header = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        left: 10,
        top: 5,
        bottom: 10,
        color: "#ccc",
        height: "Ti.UI.SIZE",
        text: "Common Friends",
        id: "header"
    });
    $.__views.main.add($.__views.header);
    $.__views.list = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "list",
        layout: "vertical",
        left: "10",
        right: "10",
        top: "5",
        bottom: "5"
    });
    $.__views.main.add($.__views.list);
    $.__views.show_all = Ti.UI.createView({
        height: 0,
        top: 0,
        visible: true,
        id: "show_all"
    });
    $.__views.main.add($.__views.show_all);
    $.__views.show_all_label = Ti.UI.createLabel({
        left: 10,
        top: 0,
        bottom: 5,
        height: Ti.UI.SIZE,
        color: "#ffa633",
        font: {
            fontSize: 12
        },
        text: "show all friends",
        id: "show_all_label"
    });
    $.__views.show_all.add($.__views.show_all_label);
    show_all ? $.__views.show_all_label.addEventListener("click", show_all) : __defers["$.__views.show_all_label!click!show_all"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var friends;
    var len = 2;
    exports.init = function(moid, model_name) {
        friends = login.getFriendsWithModel(moid);
        if (0 === friends.length) {
            var friend = Alloy.createController("model/model_friend", {
                _data: login.getUser()
            });
            $.list.add(friend.getView());
        }
        if (len >= friends.length) draw(0, friends.length); else {
            draw(0, len);
            $.show_all_label.setText("see all " + friends.length + " friends driving " + model_name);
        }
    };
    __defers["$.__views.show_all_label!click!show_all"] && $.__views.show_all_label.addEventListener("click", show_all);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;