function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function draw() {
        login.getCars();
        var rows = [];
        var car_btn = Alloy.createController("friends/friend", {
            _data: login.getUser()
        });
        rows.push(car_btn.getView());
        i++;
        $.main.setData(rows);
        load_friends();
    }
    function toggle() {
        Ti.App.fireEvent("openMenu");
        return;
    }
    function load_friends() {
        fb.getFriends(function(friends) {
            build_friends(friends);
        }, function() {});
    }
    function build_friends(data) {
        _friends_loaded = true;
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
        $.main.appendRow(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home/home_squares";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home_squares = Ti.UI.createView({
        layout: "vertical",
        id: "home_squares"
    });
    $.__views.home_squares && $.addTopLevelView($.__views.home_squares);
    $.__views.toggle_menu = Ti.UI.createLabel({
        width: 300,
        height: Ti.UI.SIZE,
        left: 35,
        color: "#40a3ff",
        font: {
            fontSize: 45
        },
        text: "+ ride along",
        id: "toggle_menu",
        top: "20"
    });
    $.__views.home_squares.add($.__views.toggle_menu);
    toggle ? $.__views.toggle_menu.addEventListener("touchstart", toggle) : __defers["$.__views.toggle_menu!touchstart!toggle"] = true;
    $.__views.main = Ti.UI.createTableView({
        backgroundColor: "#fff",
        id: "main",
        separatorStyle: "NONE",
        top: "20"
    });
    $.__views.home_squares.add($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var fb = require("Friends");
    Alloy.createController("friends/friends");
    var i = 0;
    draw();
    var _friends_loaded = false;
    __defers["$.__views.toggle_menu!touchstart!toggle"] && $.__views.toggle_menu.addEventListener("touchstart", toggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;