function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/signup_cc";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.signup_cc = Ti.UI.createWindow({
        backgroundColor: "#333",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "signup_cc"
    });
    $.__views.signup_cc && $.addTopLevelView($.__views.signup_cc);
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        id: "main"
    });
    $.__views.signup_cc.add($.__views.main);
    $.__views.logo = Ti.UI.createView({
        backgroundImage: "logos/48/Tata.png",
        width: 48,
        height: 48,
        id: "logo"
    });
    $.__views.main.add($.__views.logo);
    $.__views.model = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        color: "#999",
        text: "G35",
        id: "model"
    });
    $.__views.main.add($.__views.model);
    $.__views.explain = Ti.UI.createLabel({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#999",
        text: "Please enter a small amount to be charged onto a card with the same name and address as your car",
        id: "explain"
    });
    $.__views.main.add($.__views.explain);
    $.__views.amount = Ti.UI.createTextField({
        backgroundColor: "#333",
        color: "#777",
        left: 20,
        right: 20,
        font: {
            fontSize: 18
        },
        height: 40,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "amount",
        hintText: "$0.00"
    });
    $.__views.main.add($.__views.amount);
    $.__views.__alloyId90 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#555",
        id: "__alloyId90"
    });
    $.__views.main.add($.__views.__alloyId90);
    $.__views.credit = Ti.UI.createTextField({
        backgroundColor: "#333",
        color: "#777",
        left: 20,
        right: 20,
        font: {
            fontSize: 18
        },
        height: 40,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "credit",
        hintText: "credit/debit card number"
    });
    $.__views.main.add($.__views.credit);
    $.__views.__alloyId91 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#555",
        id: "__alloyId91"
    });
    $.__views.main.add($.__views.__alloyId91);
    $.__views.mmyy = Ti.UI.createTextField({
        backgroundColor: "#333",
        color: "#777",
        left: 20,
        right: 20,
        font: {
            fontSize: 18
        },
        height: 40,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "mmyy",
        hintText: "MMYY"
    });
    $.__views.main.add($.__views.mmyy);
    $.__views.btn = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "btn"
    });
    $.__views.main.add($.__views.btn);
    $.__views.btn_label = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 10,
        color: "#fff",
        text: "Veriify My Ownership",
        id: "btn_label"
    });
    $.__views.btn.add($.__views.btn_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    exports.open = function() {
        $.signup_cc.open();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;