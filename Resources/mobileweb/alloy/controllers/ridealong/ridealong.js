function Controller() {
    function onFocus() {
        $.plate.focus();
    }
    function onEdit() {
        var carkey = $.plate.getValue();
        "" !== carkey && Alloy.createController("ridealong/send_request/search_carkey_for_ridealong", {
            _data: carkey,
            _callBack: function(success) {
                _callBack(success);
                $.ridealong.close();
            }
        });
    }
    function onCancel() {
        $.ridealong.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/ridealong";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.ridealong = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "ridealong"
    });
    $.__views.ridealong && $.addTopLevelView($.__views.ridealong);
    onFocus ? $.__views.ridealong.addEventListener("focus", onFocus) : __defers["$.__views.ridealong!focus!onFocus"] = true;
    $.__views.__alloyId74 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId74"
    });
    $.__views.ridealong.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#f49033",
        top: "0",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        left: "10",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    onCancel ? $.__views.__alloyId76.addEventListener("click", onCancel) : __defers["$.__views.__alloyId76!click!onCancel"] = true;
    $.__views.__alloyId77 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
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
    $.__views.__alloyId75.add($.__views.question);
    $.__views.__alloyId78 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        right: "10",
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    onEdit ? $.__views.__alloyId78.addEventListener("click", onEdit) : __defers["$.__views.__alloyId78!click!onEdit"] = true;
    $.__views.__alloyId79 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "send",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.plate = Ti.UI.createTextField({
        height: 100,
        left: 10,
        right: 10,
        top: 10,
        color: "#fff",
        font: {
            fontSize: 60,
            fontWeight: "bold"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "plate",
        hintText: "Find by Bumper Sticker"
    });
    $.__views.__alloyId74.add($.__views.plate);
    onEdit ? $.__views.plate.addEventListener("return", onEdit) : __defers["$.__views.plate!return!onEdit"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _callBack = args._callBack;
    $.ridealong.open();
    __defers["$.__views.ridealong!focus!onFocus"] && $.__views.ridealong.addEventListener("focus", onFocus);
    __defers["$.__views.__alloyId76!click!onCancel"] && $.__views.__alloyId76.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId78!click!onEdit"] && $.__views.__alloyId78.addEventListener("click", onEdit);
    __defers["$.__views.plate!return!onEdit"] && $.__views.plate.addEventListener("return", onEdit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;