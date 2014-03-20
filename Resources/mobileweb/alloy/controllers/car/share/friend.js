function Controller() {
    function onClick() {
        Alloy.createController("car/share/send_share_to_server", {
            _cid: _cid,
            _data: _data,
            _callBack: function() {
                _callBack();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/share/friend";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    onClick ? $.__views.main.addEventListener("click", onClick) : __defers["$.__views.main!click!onClick"] = true;
    $.__views.photo = Ti.UI.createView({
        width: 50,
        height: 50,
        backgroundColor: "#eee",
        id: "photo"
    });
    $.__views.main.add($.__views.photo);
    $.__views.name = Ti.UI.createLabel({
        left: 10,
        height: Ti.UI.SIZE,
        color: "#2179ca",
        id: "name"
    });
    $.__views.main.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _cid = args._cid;
    var _callBack = args._callBack;
    $.name.setText(_data.name);
    __defers["$.__views.main!click!onClick"] && $.__views.main.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;