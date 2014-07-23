function Controller() {
    function onChange() {
        _selected = _selected ? false : true;
        _draw();
        _onUpdate(_id, _selected);
        save();
    }
    function _draw() {
        _selected ? $.circle.setBackgroundColor("#ffa633") : $.circle.setBackgroundColor("#dedede");
    }
    function save() {
        var url = "http://flair.me/carkey/search.php";
        var data = {
            type: "poll",
            pollid: _pollid,
            answer: _data,
            action: "save",
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {},
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "poll/poll_option";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.poll_option = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: "1",
        left: "10",
        layout: "horizontal",
        id: "poll_option"
    });
    $.__views.poll_option && $.addTopLevelView($.__views.poll_option);
    onChange ? $.__views.poll_option.addEventListener("click", onChange) : __defers["$.__views.poll_option!click!onChange"] = true;
    $.__views.circle = Ti.UI.createView({
        height: "15",
        width: "15",
        borderRadius: "7.5",
        backgroundColor: "#dedede",
        id: "circle"
    });
    $.__views.poll_option.add($.__views.circle);
    $.__views.desc = Ti.UI.createLabel({
        font: {
            fontSize: "12"
        },
        id: "desc",
        top: "5",
        bottom: "5",
        left: "10",
        height: Ti.UI.SIZE,
        color: "#999"
    });
    $.__views.poll_option.add($.__views.desc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _pollid = args._pollid;
    var _data = args._data;
    var _selected = null;
    var _onUpdate = args._onUpdate;
    var _id = args._id;
    $.desc.setText(_data);
    exports.select = function() {
        _selected = true;
        _draw();
    };
    exports.unSelect = function() {
        _selected = false;
        _draw();
    };
    __defers["$.__views.poll_option!click!onChange"] && $.__views.poll_option.addEventListener("click", onChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;