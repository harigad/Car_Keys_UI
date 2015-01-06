function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function invite() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "components/nofriends_invite";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.nofriends_invite = Ti.UI.createTableViewRow({
        id: "nofriends_invite"
    });
    $.__views.nofriends_invite && $.addTopLevelView($.__views.nofriends_invite);
    $.__views.main = Ti.UI.createView({
        top: 50,
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: Ti.UI.FILL,
        bubbleParent: false,
        id: "main"
    });
    $.__views.nofriends_invite.add($.__views.main);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        color: "#ccc",
        text: "you currently don't have any friends",
        id: "__alloyId47"
    });
    $.__views.main.add($.__views.__alloyId47);
    $.__views.desc = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        color: "#ccc",
        id: "desc"
    });
    $.__views.main.add($.__views.desc);
    $.__views.btn = Ti.UI.createView({
        bubbleParent: false,
        top: 20,
        backgroundColor: "#2179ca",
        borderRadius: 4,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "btn"
    });
    $.__views.main.add($.__views.btn);
    invite ? $.__views.btn.addEventListener("click", invite) : __defers["$.__views.btn!click!invite"] = true;
    $.__views.btn_label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 40,
        bottom: 20,
        left: 20,
        right: 20,
        color: "#fff",
        font: {
            fontSize: 24
        },
        text: "invite friends",
        id: "btn_label"
    });
    $.__views.btn.add($.__views.btn_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.desc.setText("that drive " + args._txt);
    __defers["$.__views.btn!click!invite"] && $.__views.btn.addEventListener("click", invite);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;