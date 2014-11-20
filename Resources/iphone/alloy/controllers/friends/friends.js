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
        var url = "http://services.ridealong.mobi/search.php";
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
        backgroundColor: "#ffa633",
        navBarHidden: true,
        id: "friends"
    });
    $.__views.friends && $.addTopLevelView($.__views.friends);
    $.__views.search_container = Ti.UI.createView({
        id: "search_container",
        height: "60",
        backgroundColor: "#fff",
        layout: "horizontal"
    });
    $.__views.friends.add($.__views.search_container);
    $.__views.__alloyId61 = Ti.UI.createImageView({
        image: "common/search.png",
        width: "20",
        height: "20",
        left: "20",
        top: "20 ",
        id: "__alloyId61"
    });
    $.__views.search_container.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        text: "friends and cars",
        left: "10",
        color: "#999",
        height: "20",
        top: "20 ",
        id: "__alloyId62"
    });
    $.__views.search_container.add($.__views.__alloyId62);
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
    $.__views.main = Ti.UI.createTableView({
        top: 10,
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
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