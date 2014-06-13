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
        height: "480",
        id: "select_car_for_ridealong"
    });
    $.__views.select_car_for_ridealong && $.addTopLevelView($.__views.select_car_for_ridealong);
    $.__views.main = Ti.UI.createView({
        id: "main",
        height: Ti.UI.SIZE,
        left: "20",
        right: "20",
        layout: "vertical"
    });
    $.__views.select_car_for_ridealong.add($.__views.main);
    $.__views.__alloyId81 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: "10",
        id: "__alloyId81"
    });
    $.__views.main.add($.__views.__alloyId81);
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
    $.__views.__alloyId81.add($.__views.photo);
    $.__views.plate_container = Ti.UI.createView({
        left: 100,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "plate_container"
    });
    $.__views.__alloyId81.add($.__views.plate_container);
    $.__views.name = Ti.UI.createLabel({
        color: "#eee",
        left: 10,
        font: {
            fontSize: 20
        },
        id: "name"
    });
    $.__views.plate_container.add($.__views.name);
    $.__views.__alloyId82 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#fff",
        right: "30",
        top: "5",
        bottom: "5",
        id: "__alloyId82"
    });
    $.__views.plate_container.add($.__views.__alloyId82);
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
    $.__views.cancel_btn = Ti.UI.createView({
        id: "cancel_btn",
        left: "10",
        right: "10",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        borderRadius: "4"
    });
    $.__views.main.add($.__views.cancel_btn);
    onCancel ? $.__views.cancel_btn.addEventListener("click", onCancel) : __defers["$.__views.cancel_btn!click!onCancel"] = true;
    $.__views.__alloyId83 = Ti.UI.createLabel({
        text: "CANCEL",
        top: "20",
        bottom: "20",
        color: "#eee",
        height: Ti.UI.SIZE,
        id: "__alloyId83"
    });
    $.__views.cancel_btn.add($.__views.__alloyId83);
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
    __defers["$.__views.cancel_btn!click!onCancel"] && $.__views.cancel_btn.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;