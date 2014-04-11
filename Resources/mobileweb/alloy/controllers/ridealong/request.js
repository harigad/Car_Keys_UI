function Controller() {
    function onClick() {
        _callBack && Alloy.createController("ridealong/accept", {
            _data: _data,
            _callBack: function() {
                _callBack();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/request";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.request = Ti.UI.createView({
        bottom: "5",
        top: "5",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: Ti.UI.SIZE,
        id: "request"
    });
    $.__views.request && $.addTopLevelView($.__views.request);
    onClick ? $.__views.request.addEventListener("click", onClick) : __defers["$.__views.request!click!onClick"] = true;
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        width: "50",
        height: "50",
        borderRadius: "25",
        backgroundColor: "#ccc",
        borderWidth: "3",
        borderColor: "#a6c9ea"
    });
    $.__views.request.add($.__views.photo);
    $.__views.__alloyId62 = Ti.UI.createView({
        left: "10",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId62"
    });
    $.__views.request.add($.__views.__alloyId62);
    $.__views.name = Ti.UI.createLabel({
        left: "0",
        height: "Ti.UI.SIZE",
        color: "#fff",
        font: {
            fontSize: 14
        },
        id: "name"
    });
    $.__views.__alloyId62.add($.__views.name);
    $.__views.desc = Ti.UI.createLabel({
        height: "Ti.UI.SIZE",
        color: "#fff",
        opacity: "0.6",
        font: {
            fontSize: 11
        },
        text: "sent you a ride along request",
        left: "0",
        id: "desc"
    });
    $.__views.__alloyId62.add($.__views.desc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    $.photo.setBackgroundImage(_data.photo);
    $.name.setText(_data.name);
    __defers["$.__views.request!click!onClick"] && $.__views.request.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;