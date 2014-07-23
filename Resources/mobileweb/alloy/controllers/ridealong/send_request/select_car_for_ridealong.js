function Controller() {
    function onCancel() {
        _callBack(false);
        $.select_car_for_ridealong.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/send_request/select_car_for_ridealong";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.select_car_for_ridealong = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        width: "320",
        height: "500",
        id: "select_car_for_ridealong"
    });
    $.__views.select_car_for_ridealong && $.addTopLevelView($.__views.select_car_for_ridealong);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.select_car_for_ridealong.add($.__views.scroll);
    $.__views.main = Ti.UI.createView({
        id: "main",
        height: Ti.UI.SIZE,
        left: "20",
        right: "20",
        layout: "vertical"
    });
    $.__views.scroll.add($.__views.main);
    $.__views.__alloyId108 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: "10",
        id: "__alloyId108"
    });
    $.__views.main.add($.__views.__alloyId108);
    $.__views.photo = Ti.UI.createView({
        backgroundColor: "#fff",
        left: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#cecece",
        id: "photo"
    });
    $.__views.__alloyId108.add($.__views.photo);
    $.__views.plate_container = Ti.UI.createView({
        left: 110,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "plate_container"
    });
    $.__views.__alloyId108.add($.__views.plate_container);
    $.__views.name = Ti.UI.createLabel({
        color: "#eee",
        left: 10,
        font: {
            fontSize: 20
        },
        id: "name"
    });
    $.__views.plate_container.add($.__views.name);
    $.__views.__alloyId109 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#fff",
        right: "30",
        top: "5",
        bottom: "5",
        id: "__alloyId109"
    });
    $.__views.plate_container.add($.__views.__alloyId109);
    $.__views.plate = Ti.UI.createLabel({
        color: "#fff",
        left: 10,
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        id: "plate"
    });
    $.__views.plate_container.add($.__views.plate);
    $.__views.cars = Ti.UI.createView({
        id: "cars",
        left: "10",
        right: "10",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderRadius: "4"
    });
    $.__views.main.add($.__views.cars);
    $.__views.__alloyId110 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#f49033",
        top: "0",
        id: "__alloyId110"
    });
    $.__views.select_car_for_ridealong.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        left: "10",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    onCancel ? $.__views.__alloyId111.addEventListener("click", onCancel) : __defers["$.__views.__alloyId111!click!onCancel"] = true;
    $.__views.__alloyId112 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#fff",
        opacity: .5,
        text: "RideAlong",
        id: "question"
    });
    $.__views.__alloyId110.add($.__views.question);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    $.photo.setBackgroundImage(_data[0].photo);
    $.name.setText(_data[0].name);
    $.plate.setText(_data[0].plate);
    for (var i = 0; _data.length > i; i++) {
        var car = Alloy.createController("ridealong/send_request/select_car_for_ridealong_btn", {
            _data: _data[i],
            _callBack: function(success) {
                _callBack(success);
                $.select_car_for_ridealong.close();
            }
        });
        $.cars.add(car.getView());
    }
    $.select_car_for_ridealong.open();
    __defers["$.__views.__alloyId111!click!onCancel"] && $.__views.__alloyId111.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;