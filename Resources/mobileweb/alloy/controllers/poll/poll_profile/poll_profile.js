function Controller() {
    function load(created) {
        var url = "http://flair.me/carkey/search.php";
        var data = {
            type: "poll",
            pollid: _data.ouid,
            action: "summary",
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
        var poll_info = response.info;
        var options = JSON.parse(poll_info.options);
        var countObjArr = response.feed;
        for (var i = 0; options.length > i; i++) {
            var countObj = getCountObjForOption(options[i], countObjArr);
            var feed_item = Alloy.createController("poll/poll_profile/poll_profile_answer_item", {
                _answer: options[i],
                _countObj: countObj
            });
            $.main.add(feed_item.getView());
        }
    }
    function getCountObjForOption(option, countObjArr) {
        for (var i = 0; countObjArr.length > i; i++) if (countObjArr[i].answer == option) return countObjArr[i];
        return {};
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "poll/poll_profile/poll_profile";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.poll_profile = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "poll_profile"
    });
    $.__views.poll_profile && $.addTopLevelView($.__views.poll_profile);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.poll_profile.add($.__views.scroll);
    $.__views.__alloyId78 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        id: "__alloyId78"
    });
    $.__views.scroll.add($.__views.__alloyId78);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        id: "question",
        left: "10",
        right: "10",
        bottom: "5"
    });
    $.__views.__alloyId78.add($.__views.question);
    $.__views.main = Ti.UI.createView({
        id: "main",
        borderRadius: "4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        left: "10",
        right: "10",
        top: "5"
    });
    $.__views.__alloyId78.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.poll_profile
    });
    $.__views.header.setParent($.__views.poll_profile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var poll_data = JSON.parse(_data.data);
    $.question.setText(poll_data.question);
    load();
    $.header.openWindow($.poll_profile);
    exports.refresh = function() {
        load();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;