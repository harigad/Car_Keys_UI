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
        var rows = [];
        for (var c = 0; cars.length > c; c++) {
            var car_btn = Alloy.createController("home/home_square", {
                _obj: cars[c],
                _data: {
                    subtext: 200,
                    image: "logos/48/" + cars[c].logo,
                    title: cars[c].model,
                    bg: _colors[i]
                },
                _callBack: function(obj) {
                    Alloy.createController("car/car", {
                        _owner_name: login.getUser().name,
                        _data: obj,
                        _callBack: function() {}
                    });
                }
            });
            rows.push(car_btn.getView());
            i++;
        }
        var rides_btn = Alloy.createController("home/home_square", {
            _data: {
                subtext: login.getPoints("friends"),
                image: "common/fb.png",
                title: "friends",
                bg: _colors[i]
            },
            _event: "friends_cars_updated",
            _callBack: function() {
                friends.open();
            }
        });
        rows.push(rides_btn.getView());
        i++;
        var rides_btn = Alloy.createController("home/home_square", {
            _data: {
                subtext: login.getPoints("rides"),
                image: "common/ride_along_36_36.png",
                title: "rides",
                bg: _colors[i]
            },
            _callBack: rides
        });
        rows.push(rides_btn.getView());
        i++;
        var testdrives_btn = Alloy.createController("home/home_square", {
            _data: {
                subtext: login.getPoints("testdrives"),
                image: "common/steering_36_36.png",
                title: "test drives",
                bg: _colors[i]
            },
            _callBack: testdrives
        });
        rows.push(testdrives_btn.getView());
        i++;
        var question_btn = Alloy.createController("home/home_square", {
            _data: {
                subtext: login.getPoints("questions"),
                image: "common/question_36_36.png",
                title: "questions",
                bg: _colors[i]
            },
            _callBack: questions
        });
        rows.push(question_btn.getView());
        i++;
        var question_btn = Alloy.createController("home/home_square", {
            _data: {
                image: "common/help_36_36.png",
                title: "help",
                bg: _colors[i]
            },
            _callBack: questions
        });
        rows.push(question_btn.getView());
        i++;
        var no_car = Alloy.createController("home/home_square", {
            _data: {
                image: "common/plus_with_10_margin.png",
                title: "Add Car",
                bg: _colors[i]
            },
            _callBack: addCar
        });
        0 === cars.length ? rows.unshift(no_car.getView()) : rows.push(no_car.getView());
        var header_row = Ti.UI.createTableViewRow();
        var header_label = Ti.UI.createLabel({
            height: Ti.UI.SIZE,
            left: 20,
            text: "650 points",
            color: "#40a3ff",
            font: {
                fontSize: 55
            }
        });
        header_row.add(header_label);
        rows.unshift(header_row);
        $.main.setData(rows);
    }
    function addCar() {
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
    function rides() {
        Alloy.createController("ridealong/rides", {
            _callBack: function() {
                refresh();
            }
        });
    }
    function testdrives() {
        Alloy.createController("testdrives/testdrives", {
            _callBack: function() {
                refresh();
            }
        });
    }
    function questions() {}
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
    $.__views.main = Ti.UI.createTableView({
        backgroundColor: "#fff",
        id: "main",
        separatorStyle: "NONE",
        top: "20"
    });
    $.__views.home_squares.add($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    require("Friends");
    var _colors = [ "ffce87", "ffba25", "fda75a", "f6c65f", "ffce87", "e2b26b" ];
    var friends = Alloy.createController("friends/friends");
    draw();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;