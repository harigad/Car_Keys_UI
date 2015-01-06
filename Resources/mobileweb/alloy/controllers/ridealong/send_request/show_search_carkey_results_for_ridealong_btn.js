function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onSelect() {
        for (var i = 0; _data.length > i; i++) _data[i].id == _data[_userIndex].id && _thisUserCars.push(_data[i]);
        Alloy.createController("ridealong/send_request/select_car_for_ridealong", {
            _data: _thisUserCars,
            _callBack: function(success) {
                _callBack(success);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/send_request/show_search_carkey_results_for_ridealong_btn";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.show_search_carkey_results_for_ridealong_btn = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "#f49033",
        borderRadius: "4",
        bottom: "10",
        id: "show_search_carkey_results_for_ridealong_btn"
    });
    $.__views.show_search_carkey_results_for_ridealong_btn && $.addTopLevelView($.__views.show_search_carkey_results_for_ridealong_btn);
    onSelect ? $.__views.show_search_carkey_results_for_ridealong_btn.addEventListener("click", onSelect) : __defers["$.__views.show_search_carkey_results_for_ridealong_btn!click!onSelect"] = true;
    $.__views.__alloyId136 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: "10",
        right: "10",
        layout: "horizontal",
        id: "__alloyId136"
    });
    $.__views.show_search_carkey_results_for_ridealong_btn.add($.__views.__alloyId136);
    $.__views.photo = Ti.UI.createView({
        top: 10,
        bottom: 10,
        backgroundColor: "#fff",
        left: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "#cecece",
        id: "photo"
    });
    $.__views.__alloyId136.add($.__views.photo);
    $.__views.plate_container = Ti.UI.createView({
        left: 0,
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "plate_container"
    });
    $.__views.__alloyId136.add($.__views.plate_container);
    $.__views.name = Ti.UI.createLabel({
        color: "#eee",
        left: 10,
        font: {
            fontSize: 16
        },
        id: "name"
    });
    $.__views.plate_container.add($.__views.name);
    $.__views.__alloyId137 = Ti.UI.createView({
        height: "1",
        opacity: "0.4",
        backgroundColor: "#fff",
        right: "30",
        top: "5",
        bottom: "5",
        id: "__alloyId137"
    });
    $.__views.plate_container.add($.__views.__alloyId137);
    $.__views.plate = Ti.UI.createLabel({
        color: "#fff",
        left: 10,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        id: "plate"
    });
    $.__views.plate_container.add($.__views.plate);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _userIndex = args._userIndex;
    var _thisUserCars = [];
    var _callBack = args._callBack;
    $.photo.setBackgroundImage(_data[_userIndex].photo);
    $.name.setText(_data[_userIndex].name);
    $.plate.setText(_data[_userIndex].plate);
    __defers["$.__views.show_search_carkey_results_for_ridealong_btn!click!onSelect"] && $.__views.show_search_carkey_results_for_ridealong_btn.addEventListener("click", onSelect);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;