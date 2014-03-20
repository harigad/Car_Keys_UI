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
        var currentMake;
        var currentItem;
        for (var i = 0; data.length > i; i++) {
            if (currentMake !== data[i].make) {
                var separator = Alloy.createController("feed/separator", {
                    _data: data[i]
                });
                $.main.add(separator.getView());
                var feed_item_left = Alloy.createController("feed/feed_item_left", {
                    _data: data[i]
                });
                $.main.add(feed_item_left.getView());
                currentItem = "left";
            } else if ("left" === currentItem) {
                var feed_item_right = Alloy.createController("feed/feed_item_left", {
                    _data: data[i]
                });
                $.main.add(feed_item_right.getView());
                currentItem = "right";
            } else {
                var feed_item_left = Alloy.createController("feed/feed_item_left", {
                    _data: data[i]
                });
                $.main.add(feed_item_left.getView());
                currentItem = "left";
            }
            currentMake = data[i].make;
        }
    }
    function showPleaseWait() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: 0,
        backgroundColor: "#eee",
        borderRadius: 4,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    load();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;