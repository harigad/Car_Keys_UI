function Controller() {
    function more() {
        $.more.setText("please wait...");
        load(_created);
    }
    function load(created) {
        var url = "http://flair.me/carkey/search.php";
        var _data = {
            type: "feed",
            accessToken: login.getAccessToken()
        };
        _id && (_data.uid = _id);
        created && (_data.created = created);
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var response = JSON.parse(this.responseText);
                build(response, created);
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
                break;

              case "5":
                feed_item = Alloy.createController("feed/feed_poll_answer", {
                    _data: data[i]
                });
            }
            if (feed_item) {
                $.main.add(feed_item.getView());
                _created = data[i].created;
            }
        }
        $.more.setText("load more");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        borderRadius: 4,
        backgroundColor: "#fff",
        layout: "vertical",
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
    $.__views.__alloyId44 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId44"
    });
    $.__views.container.add($.__views.__alloyId44);
    more ? $.__views.__alloyId44.addEventListener("click", more) : __defers["$.__views.__alloyId44!click!more"] = true;
    $.__views.more = Ti.UI.createLabel({
        text: "please wait..",
        id: "more",
        top: "10",
        bottom: "10",
        color: "#ffa633",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId44.add($.__views.more);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _id = args._id || null;
    var _created;
    _created = null;
    load();
    exports.refresh = function() {
        load();
    };
    __defers["$.__views.__alloyId44!click!more"] && $.__views.__alloyId44.addEventListener("click", more);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;