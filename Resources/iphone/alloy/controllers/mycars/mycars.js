function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init() {
        var cars = login.getCars();
        if (cars.length > 0) build(cars); else {
            var _new = {
                logo: "logo.png",
                model: "ADD NEW CAR",
                _new: true
            };
            var car = Alloy.createController("car/newcar", {
                _editable: true,
                _data: _new,
                _callBack: function() {
                    _refresh();
                }
            });
            $.main.appendRow(car.getView());
        }
    }
    function addNew() {
        Alloy.createController("signup/signup", {
            _callBack: function() {
                _refresh();
            }
        });
    }
    function build(cars) {
        var rows = [];
        for (var i = 0; cars.length > i; i++) {
            var car = Alloy.createController("car/car", {
                _editable: true,
                _data: cars[i],
                _callBack: function() {
                    _refresh();
                }
            });
            rows.push(car.getView());
        }
        $.main.setData(rows);
    }
    function _refresh() {
        try {
            clear();
        } catch (e) {}
        init();
    }
    function clear() {
        $.main.removeAllChildren();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mycars/mycars";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.mycars = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "mycars"
    });
    $.__views.mycars && $.addTopLevelView($.__views.mycars);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50",
        backgroundColor: "#eee"
    });
    $.__views.mycars.add($.__views.scroll);
    $.__views.main = Ti.UI.createTableView({
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        left: 10,
        right: 10,
        top: "20",
        borderRadius: 4,
        scrollable: false,
        height: Ti.UI.SIZE,
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
    $.header.setTitle("my vehichles");
    exports.open = function(refresh) {
        refresh && _refresh();
        $.header.openWindow($.mycars, "common/plus.png", addNew);
    };
    exports.refresh = function() {
        _refresh();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;