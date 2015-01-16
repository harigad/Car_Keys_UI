function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function step_miles() {
        _form_miles = Alloy.createController("form/form_miles", {
            _ask: _ask,
            _car: _result.car,
            _callBack: function(miles) {
                _result.miles = miles;
                step_place();
            }
        });
    }
    function step_place() {
        _form_place = Alloy.createController("form/form_place", {
            _ask: _ask,
            _car: _result.car,
            _callBack: function(place) {
                _result.pid = place.pid;
                step_save();
            }
        });
    }
    function step_save() {
        Alloy.createController("form/form_save", {
            _data: _result,
            _callBack: function() {
                _form_place.close();
                _form_miles.close();
                _form_cars && _form_cars.close();
                $.form.close();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "form/form";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.form = Ti.UI.createWindow({
        id: "form"
    });
    $.__views.form && $.addTopLevelView($.__views.form);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var login = require("Login");
    var _result = {};
    var cars = login.getCars();
    var _asks = {
        oil_change: {
            name: "oil change"
        },
        air_filter: {
            name: "air filter"
        },
        tire_pressure: {
            name: "tire pressure"
        },
        wheel_balance: {
            name: "wheel balancing"
        },
        wheel_alignment: {
            name: "wheel alignment"
        },
        new_tires: {
            name: "new tires"
        },
        brake_fluid: {
            name: "brake fluid"
        }
    };
    var _ask = _asks[args._ask];
    var _form_cars;
    if (cars.length > 1) _form_cars = Alloy.createController("form/form_car_selector", {
        _ask: _ask,
        _cars: cars,
        _callBack: function(car) {
            _result.car = car.cid;
            step_miles();
        }
    }); else if (1 == cars.length) {
        _result.car = cars[0].cid;
        step_miles();
    }
    var _form_miles;
    var _form_place;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;