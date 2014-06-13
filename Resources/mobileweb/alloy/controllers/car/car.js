function Controller() {
    function goToModel() {
        login.canSeeModel(_data.moid) ? Alloy.createController("model/model", {
            _data: _data
        }) : goToMake();
    }
    function goToMake() {
        Alloy.createController("make/make", {
            _data: _data
        });
    }
    function onEdit() {}
    function explain_expires() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/car";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        top: 5,
        bottom: 5,
        borderRadius: 4,
        backgroundColor: "#fff",
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
        id: "logo_container"
    });
    $.__views.__alloyId0.add($.__views.logo_container);
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
        color: "#ffa633",
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        id: "model"
    });
    $.__views.topLine.add($.__views.model);
    $.__views.edit_icon = Ti.UI.createView({
        width: 16,
        height: 16,
        backgroundImage: "common/edit_icon.png",
        visible: false,
        bubbleParent: false,
        id: "edit_icon"
    });
    $.__views.topLine.add($.__views.edit_icon);
    onEdit ? $.__views.edit_icon.addEventListener("click", onEdit) : __defers["$.__views.edit_icon!click!onEdit"] = true;
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
    $.__views.expires = Ti.UI.createView({
        id: "expires",
        height: "0",
        backgroundColor: "#333",
        bottom: "0",
        left: "10",
        right: "10",
        borderRadius: "2"
    });
    $.__views.main.add($.__views.expires);
    explain_expires ? $.__views.expires.addEventListener("click", explain_expires) : __defers["$.__views.expires!click!explain_expires"] = true;
    $.__views.expires_lbl = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#fff",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        top: "10",
        bottom: "10",
        id: "expires_lbl"
    });
    $.__views.expires.add($.__views.expires_lbl);
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
        layout: "horizontal",
        id: "radios"
    });
    $.__views.__alloyId8.add($.__views.radios);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _editable = args._editable;
    var _callBack = args._callBack;
    if (_editable) {
        var now = new Date();
        var expires = new Date(_data.regexpdate);
        var days_remaining = Math.round((expires - now) / 864e5);
        if (days_remaining > 0) $.expires_lbl.setText("Registration Exipres in " + days_remaining + " days"); else {
            $.expires.setBackgroundColor("#990000");
            $.expires_lbl.setText("Registration Expired  " + Math.abs(days_remaining) + " days ago");
        }
        $.expires.setBottom(10);
        $.expires.setHeight("Ti.UI.SIZE");
    }
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    $.logo.setBackgroundImage("logos/48/" + _data.logo);
    login.canSeeModel(_data.moid) || $.model.setColor("#333");
    $.model.setText(_data.model);
    _data.year && $.year.setText("'" + _data.year);
    if (_data.titledate) {
        var d = new Date(_data.titledate);
        d && $.owned.setText("since " + monthNames[d.getMonth()] + " " + d.getFullYear());
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
    var rides = _data.rides || [];
    for (var i = 0; rides.length > i; i++) {
        var ride = Alloy.createController("car/radio/radio_main", {
            _data: rides[i]
        });
        $.radios.add(ride.getView());
    }
    if (6 === rides.length) {
        var ride = Alloy.createController("car/radio/radio_main", {
            _data: _data,
            _showall: true
        });
        $.radios.add(ride.getView());
    }
    __defers["$.__views.model_container!click!goToModel"] && $.__views.model_container.addEventListener("click", goToModel);
    __defers["$.__views.edit_icon!click!onEdit"] && $.__views.edit_icon.addEventListener("click", onEdit);
    __defers["$.__views.expires!click!explain_expires"] && $.__views.expires.addEventListener("click", explain_expires);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;