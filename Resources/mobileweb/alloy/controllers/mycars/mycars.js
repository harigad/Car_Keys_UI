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
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "#eee",
        borderRadius: 4,
        bottom: 10,
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    init();
    exports.refresh = function() {
        _refresh();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;