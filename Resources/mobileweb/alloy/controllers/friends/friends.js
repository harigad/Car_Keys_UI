function Controller() {
    function load() {
        showPleaseWait();
        var url = "http://flair.me/carkey/search.php";
        var _data = {
            type: "friends",
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.debug("User.load recieved data " + this.responseText);
                var response = JSON.parse(this.responseText);
                response.length > 0 && login.setFriendsCars(response);
                build(response);
            },
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(_data);
    }
    function build(data) {
        loaded = true;
        var currentMake;
        var currentItem;
        for (var i = 0; data.length > i; i++) {
            if (currentMake !== data[i].make) {
                var separator = Alloy.createController("friends/friend_separator", {
                    _data: data[i]
                });
                $.main.add(separator.getView());
                var feed_item_left = Alloy.createController("friends/friend", {
                    _data: data[i]
                });
                $.main.add(feed_item_left.getView());
                currentItem = "left";
            } else if ("left" === currentItem) {
                var feed_item_right = Alloy.createController("friends/friend", {
                    _data: data[i]
                });
                $.main.add(feed_item_right.getView());
                currentItem = "right";
            } else {
                var feed_item_left = Alloy.createController("friends/friend", {
                    _data: data[i]
                });
                $.main.add(feed_item_left.getView());
                currentItem = "left";
            }
            currentMake = data[i].make;
        }
    }
    function showPleaseWait() {
        var len = $.main.children.length;
        for (var i = 0; len > i; i++) $.main.remove($.main.children[0]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "friends/friends";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.friends = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "friends"
    });
    $.__views.friends && $.addTopLevelView($.__views.friends);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.friends.add($.__views.scroll);
    $.__views.container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: 10,
        left: 10,
        right: 10,
        backgroundColor: "#fff",
        borderRadius: 4,
        id: "container"
    });
    $.__views.scroll.add($.__views.container);
    $.__views.bar = Ti.UI.createView({
        top: 0,
        backgroundColor: "#fff",
        height: 30,
        borderRadius: 4,
        opacity: .5,
        id: "bar"
    });
    $.__views.container.add($.__views.bar);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.container.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.friends
    });
    $.__views.header.setParent($.__views.friends);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var loaded = false;
    load();
    $.header.setTitle("my friends");
    exports.open = function() {
        loaded || load();
        $.header.openWindow($.friends);
    };
    exports.refresh = function() {
        load();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;