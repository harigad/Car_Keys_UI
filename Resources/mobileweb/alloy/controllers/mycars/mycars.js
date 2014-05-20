function Controller() {
    function init() {
        var cars = login.getCars();
        if (cars.length > 0) build(cars); else {
            var _new = {
                logo: "logo.png",
                model: "ADD NEW CAR",
                "new": true
            };
            var car = Alloy.createController("car/newcar", {
                _editable: true,
                _data: _new,
                _callBack: function() {
                    _refresh();
                }
            });
            $.main.add(car.getView());
        }
    }
    function build(cars) {
        for (var i = 0; cars.length > i; i++) {
            var car = Alloy.createController("car/car", {
                _editable: true,
                _data: cars[i],
                _callBack: function() {
                    _refresh();
                }
            });
            $.main.add(car.getView());
        }
    }
    function _refresh() {
        try {
            clear();
        } catch (e) {}
        init();
    }
    function clear() {
        var len = $.main.children.length;
        for (var i = 0; len > i; i++) $.main.remove($.main.children[0]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mycars/mycars";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mycars = Ti.UI.createWindow({
        backgroundColor: "#666",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "mycars"
    });
    $.__views.mycars && $.addTopLevelView($.__views.mycars);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.mycars.add($.__views.scroll);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: 10,
        right: 10,
        top: 10,
        id: "main"
    });
    $.__views.scroll.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.mycars
    });
    $.__views.header.setParent($.__views.mycars);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args._callBack;
    var login = require("Login");
    exports.open = function() {
        $.header.openWindow($.mycars);
    };
    init();
    exports.refresh = function() {
        _refresh();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;