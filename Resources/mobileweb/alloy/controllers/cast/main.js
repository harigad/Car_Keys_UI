function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cast/main";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        top: 0,
        bottom: 10,
        width: Ti.UI.FILL,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    if (login.isAdmin(_data.pid)) {
        var new_cast = Alloy.createController("cast/cast_views/add_new_cast", {
            pid: _data.id
        });
        $.main.add(new_cast.getView());
        for (var i = 0; _data.cast.length > i; i++) {
            var cast = Alloy.createController("cast/cast_views/normal_cast", {
                _data: _data.cast[i],
                pid: _data.id
            });
            $.main.add(cast.getView());
        }
    } else if (_data.cast.length > 0) for (var i = 0; _data.cast.length > i; i++) {
        var cast = Alloy.createController("cast/cast_views/normal_cast", {
            _data: _data.cast[i],
            pid: _data.id
        });
        $.main.add(cast.getView());
    } else {
        var not_joined = Alloy.createController("cast/not_joined", {
            _data: _data
        });
        $.main.add(not_joined.getView());
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;