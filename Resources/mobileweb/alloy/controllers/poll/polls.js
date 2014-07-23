function Controller() {
    function more() {
        $.more.setText("please wait...");
        load(_created);
    }
    function load(created) {
        var url = "http://flair.me/carkey/search.php";
        var data = {
            type: "poll",
            moid: _data.moid,
            action: "get",
            accessToken: login.getAccessToken()
        };
        created && (data.created = created);
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
        client.send(data);
    }
    function build(response) {
        for (var i = 0; response.length > i; i++) {
            var feed_item = Alloy.createController("poll/poll", {
                _data: response[i]
            });
            $.main.add(feed_item.getView());
            _created = response[i].created;
        }
        $.more.setText("load more");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "poll/polls";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.polls = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "polls"
    });
    $.__views.polls && $.addTopLevelView($.__views.polls);
    $.__views.__alloyId74 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "0",
        left: "0",
        right: "10",
        id: "__alloyId74"
    });
    $.__views.polls.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        color: "#cecece",
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        shadowColor: "#fff",
        shadowOffset: {
            x: 2,
            y: 2
        },
        shadowRadius: 2,
        text: "Surveys/Polls",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        color: "#ffa633",
        font: {
            fontSize: 14
        },
        text: "( create new )",
        left: "5",
        visible: "false",
        id: "__alloyId76"
    });
    $.__views.__alloyId74.add($.__views.__alloyId76);
    $.__views.container = Ti.UI.createView({
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        borderRadius: 4,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "container"
    });
    $.__views.polls.add($.__views.container);
    $.__views.main = Ti.UI.createView({
        id: "main",
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "0",
        bottom: "10"
    });
    $.__views.container.add($.__views.main);
    $.__views.__alloyId77 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId77"
    });
    $.__views.container.add($.__views.__alloyId77);
    more ? $.__views.__alloyId77.addEventListener("click", more) : __defers["$.__views.__alloyId77!click!more"] = true;
    $.__views.more = Ti.UI.createLabel({
        text: "please wait..",
        id: "more",
        top: "10",
        bottom: "10",
        color: "#ffa633",
        height: Ti.UI.SIZE
    });
    $.__views.polls.add($.__views.more);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _created;
    _created = null;
    exports.init = function(data) {
        _data = data;
        load();
    };
    exports.refresh = function() {
        load();
    };
    __defers["$.__views.__alloyId77!click!more"] && $.__views.__alloyId77.addEventListener("click", more);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;