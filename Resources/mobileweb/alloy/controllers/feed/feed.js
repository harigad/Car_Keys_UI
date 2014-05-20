function Controller() {
    function load() {
        showPleaseWait();
        var url = "http://flair.me/carkey/search.php";
        var _data = {
            type: "feed",
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
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
        for (var i = 0; data.length > i; i++) {
            var feed_item;
            switch (data[i].typeid) {
              case "0":
                feed_item = Alloy.createController("feed/feed_car_new", {
                    _data: data[i]
                });
                break;

              case "1":
                feed_item = Alloy.createController("feed/feed_car_added", {
                    _data: data[i]
                });
                break;

              case "2":
                feed_item = Alloy.createController("feed/feed_plate", {
                    _data: data[i]
                });
                break;

              case "3":
                feed_item = Alloy.createController("feed/feed_share", {
                    _data: data[i]
                });
                break;

              case "4":
                feed_item = Alloy.createController("feed/feed_ridealong", {
                    _data: data[i]
                });
            }
            $.main.add(feed_item.getView());
        }
    }
    function showPleaseWait() {
        var len = $.main.children.length;
        for (var i = 0; len > i; i++) $.main.remove($.main.children[0]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        borderRadius: 4,
        backgroundColor: "#fff",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.main = Ti.UI.createView({
        id: "main",
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "0"
    });
    $.__views.container.add($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    load();
    exports.refresh = function() {
        load();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;