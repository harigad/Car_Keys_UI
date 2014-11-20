function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function draw() {
        var i = 0;
        var cars = login.getCars();
        if (cars.length) for (var c = 0; cars.length > c; c++) {
            var car_btn = Alloy.createController("home/home_square", {
                _obj: cars[c],
                _data: {
                    image: "logos/48/" + cars[c].logo,
                    title: cars[c].model,
                    bg: _colors[i]
                },
                _callBack: function(obj) {
                    Alloy.createController("car/car", {
                        _data: obj,
                        _callBack: function() {}
                    });
                }
            });
            $.main.add(car_btn.getView());
            i++;
        } else {
            var no_car = Alloy.createController("home/home_square", {
                _data: {
                    title: "Add Car",
                    bg: _colors[i]
                },
                _callBack: noCar
            });
            $.main.add(no_car.getView());
            i++;
        }
        var rides_btn = Alloy.createController("home/home_square", {
            _data: {
                title: "Ride Alongs",
                bg: _colors[i]
            },
            _callBack: rides
        });
        $.main.add(rides_btn.getView());
        i++;
        var testdrives_btn = Alloy.createController("home/home_square", {
            _data: {
                title: "Test Drives",
                bg: _colors[i]
            },
            _callBack: testdrives
        });
        $.main.add(testdrives_btn.getView());
        i++;
        var media_btn = Alloy.createController("home/home_square", {
            _data: {
                title: "Media",
                bg: _colors[i]
            },
            _callBack: media
        });
        $.main.add(media_btn.getView());
        i++;
        var messages_btn = Alloy.createController("home/home_square", {
            _data: {
                title: "Messages",
                bg: _colors[i]
            },
            _callBack: messages
        });
        $.main.add(messages_btn.getView());
        i++;
        var invite_btn = Alloy.createController("home/home_square", {
            _data: {
                title: "Invite",
                bg: _colors[i]
            },
            _callBack: invite
        });
        $.main.add(invite_btn.getView());
        i++;
    }
    function noCar() {
        Alloy.createController("signup/signup", {
            _callBack: function() {
                refresh();
            }
        });
    }
    function refresh() {
        $.main.removeAllChildren();
        draw();
    }
    function rides() {}
    function testdrives() {}
    function media() {}
    function messages() {}
    function invite() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home/home_squares";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.home_squares = Ti.UI.createView({
        layout: "vertical",
        id: "home_squares"
    });
    $.__views.home_squares && $.addTopLevelView($.__views.home_squares);
    $.__views.search_container = Ti.UI.createView({
        id: "search_container",
        height: "60",
        backgroundColor: "#fff",
        layout: "horizontal"
    });
    $.__views.home_squares.add($.__views.search_container);
    $.__views.__alloyId64 = Ti.UI.createImageView({
        image: "common/search.png",
        width: "20",
        height: "20",
        left: "20",
        top: "20 ",
        id: "__alloyId64"
    });
    $.__views.search_container.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        text: "friends and cars",
        left: "10",
        color: "#999",
        height: "20",
        top: "20 ",
        id: "__alloyId65"
    });
    $.__views.search_container.add($.__views.__alloyId65);
    $.__views.main = Ti.UI.createView({
        backgroundColor: "#fff",
        layout: "horizontal",
        id: "main"
    });
    $.__views.home_squares.add($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var _colors = [ "ffce87", "ffba25", "fda75a", "f6c65f", "ffce87", "e2b26b" ];
    {
        Alloy.createController("mycars/mycars");
    }
    draw();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;