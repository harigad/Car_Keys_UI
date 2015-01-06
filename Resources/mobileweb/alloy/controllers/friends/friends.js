function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function load() {
        showPleaseWait();
        fb.getFriends(function(friends) {
            build(friends);
        }, function() {});
    }
    function build(data) {
        _loaded = true;
        var currentMake;
        var rows = [];
        for (var i = 0; data.length > i; i++) {
            if (currentMake !== data[i].make) {
                var separator = Alloy.createController("friends/friend_separator", {
                    _data: data[i]
                });
                rows.push(separator.getView());
                currentMake = data[i].make;
            }
            var feed_item_left = Alloy.createController("friends/friend", {
                _data: data[i]
            });
            rows.push(feed_item_left.getView());
        }
        $.main.setData(rows);
    }
    function showPleaseWait() {
        $.main.setData([]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "friends/friends";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.friends = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "friends"
    });
    $.__views.friends && $.addTopLevelView($.__views.friends);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.friends.add($.__views.scroll);
    $.__views.main = Ti.UI.createTableView({
        top: 10,
        separatorStyle: Alloy.Globals._params.TableViewSeparatorStyle.NONE,
        id: "main"
    });
    $.__views.scroll.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.friends
    });
    $.__views.header.setParent($.__views.friends);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var fb = require("Friends");
    var _loaded = false;
    load();
    exports.open = function() {
        _loaded || load();
        $.header.openWindow($.friends);
    };
    exports.refresh = function() {
        load();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;