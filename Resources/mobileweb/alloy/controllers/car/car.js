function Controller() {
    function goToModel() {
        Alloy.createController("model/model", {
            _data: _data
        });
    }
    function goToMake() {
        Alloy.createController("make/make", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/car";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        top: 0,
        bottom: 10,
        borderRadius: 4,
        backgroundColor: "#eee",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.model_container = Ti.UI.createView({
        top: 0,
        bottom: 10,
        height: Ti.UI.SIZE,
        id: "model_container"
    });
    $.__views.main.add($.__views.model_container);
    goToModel ? $.__views.model_container.addEventListener("click", goToModel) : __defers["$.__views.model_container!click!goToModel"] = true;
    $.__views.bar = Ti.UI.createView({
        backgroundColor: "#fff",
        height: 30,
        left: 0,
        top: 0,
        opacity: .5,
        id: "bar"
    });
    $.__views.model_container.add($.__views.bar);
    $.__views.__alloyId0 = Ti.UI.createView({
        top: "0",
        height: Ti.UI.SIZE,
        id: "__alloyId0"
    });
    $.__views.model_container.add($.__views.__alloyId0);
    $.__views.logo_container = Ti.UI.createView({
        left: 25,
        width: 50,
        height: 50,
        backgroundColor: "#333",
        borderRadius: 25,
        borderColor: "#ccc",
        borderWidth: 3,
        bubbleParent: false,
        id: "logo_container"
    });
    $.__views.__alloyId0.add($.__views.logo_container);
    goToMake ? $.__views.logo_container.addEventListener("click", goToMake) : __defers["$.__views.logo_container!click!goToMake"] = true;
    $.__views.logo = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundImage: "logos/48/logo.png",
        id: "logo"
    });
    $.__views.logo_container.add($.__views.logo);
    $.__views.topLine = Ti.UI.createView({
        left: 85,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "topLine"
    });
    $.__views.__alloyId0.add($.__views.topLine);
    $.__views.model = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#2179ca",
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        id: "model"
    });
    $.__views.topLine.add($.__views.model);
    $.__views.year = Ti.UI.createLabel({
        left: 85,
        bottom: 10,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#999",
        font: {
            fontSize: 11
        },
        id: "year"
    });
    $.__views.model_container.add($.__views.year);
    $.__views.data_container = Ti.UI.createView({
        id: "data_container",
        layout: "vertical",
        height: Ti.UI.SIZE
    });
    $.__views.main.add($.__views.data_container);
    $.__views.__alloyId1 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 10,
        id: "__alloyId1"
    });
    $.__views.data_container.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: 75,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: 75,
        color: "#999",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "owned:",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: 190,
        height: Ti.UI.SIZE,
        left: 5,
        top: 0,
        layout: "vertical",
        id: "__alloyId4"
    });
    $.__views.__alloyId1.add($.__views.__alloyId4);
    $.__views.owned = Ti.UI.createLabel({
        left: 0,
        color: "#999",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        width: Ti.UI.SIZE,
        id: "owned"
    });
    $.__views.__alloyId4.add($.__views.owned);
    $.__views.__alloyId5 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 10,
        id: "__alloyId5"
    });
    $.__views.data_container.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: 75,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: 75,
        color: "#999",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "shares with:",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.shares = Ti.UI.createView({
        width: 190,
        height: Ti.UI.SIZE,
        left: 5,
        top: 0,
        layout: "vertical",
        id: "shares"
    });
    $.__views.__alloyId5.add($.__views.shares);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 10,
        id: "__alloyId8"
    });
    $.__views.data_container.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: 75,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: 75,
        color: "#999",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "ride along:",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.radios = Ti.UI.createView({
        width: 190,
        height: Ti.UI.SIZE,
        left: 5,
        top: 0,
        layout: "vertical",
        id: "radios"
    });
    $.__views.__alloyId8.add($.__views.radios);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _editable = args._editable;
    var _callBack = args._callBack;
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    $.logo.setBackgroundImage("logos/48/" + _data.logo);
    $.model.setText(_data.model);
    _data.year && $.year.setText("'" + _data.year);
    if (_data.titledate) {
        var d = new Date(_data.titledate);
        d && $.owned.setText("since " + monthNames[d.getMonth() + 1] + " " + d.getFullYear());
    }
    var shares = _data.shares || [];
    for (var i = 0; shares.length > i; i++) {
        var share = Alloy.createController("car/share/share_main", {
            _editable: _editable,
            _cid: _data.cid,
            _data: shares[i],
            _callBack: function() {
                _callBack();
            }
        });
        $.shares.add(share.getView());
    }
    if (_editable) {
        var new_share = Alloy.createController("car/share/share_main", {
            _editable: _editable,
            _cid: _data.cid,
            _callBack: function() {
                _callBack();
            }
        });
        $.shares.add(new_share.getView());
    }
    _data.radios || [];
    var new_radio = Alloy.createController("car/radio/radio_main", {
        _editable: true,
        _cid: _data.cid,
        _callBack: function() {
            _callBack();
        }
    });
    $.radios.add(new_radio.getView());
    __defers["$.__views.model_container!click!goToModel"] && $.__views.model_container.addEventListener("click", goToModel);
    __defers["$.__views.logo_container!click!goToMake"] && $.__views.logo_container.addEventListener("click", goToMake);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;