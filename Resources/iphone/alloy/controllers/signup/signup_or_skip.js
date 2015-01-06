function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function add() {
        Alloy.createController("signup/signup", {
            _callBack: function() {
                args._callBack();
                $.signup_or_skip.close();
            }
        });
    }
    function skip() {
        args._callBack();
        $.signup_or_skip.close();
        args._callBack();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/signup_or_skip";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup_or_skip = Ti.UI.createWindow({
        backgroundColor: "#f1f1f1",
        id: "signup_or_skip"
    });
    $.__views.signup_or_skip && $.addTopLevelView($.__views.signup_or_skip);
    $.__views.container = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "container"
    });
    $.__views.signup_or_skip.add($.__views.container);
    $.__views.__alloyId169 = Ti.UI.createView({
        backgroundColor: "#40a3ff",
        bottom: 10,
        borderRadius: 4,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId169"
    });
    $.__views.container.add($.__views.__alloyId169);
    add ? $.__views.__alloyId169.addEventListener("click", add) : __defers["$.__views.__alloyId169!click!add"] = true;
    $.__views.__alloyId170 = Ti.UI.createLabel({
        color: "#fff",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        font: {
            fontSize: 26
        },
        text: "ADD MY CAR",
        id: "__alloyId170"
    });
    $.__views.__alloyId169.add($.__views.__alloyId170);
    $.__views.skip_btn = Ti.UI.createView({
        backgroundColor: "#f1f1f1",
        bottom: 10,
        borderRadius: 4,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "skip_btn"
    });
    $.__views.container.add($.__views.skip_btn);
    skip ? $.__views.skip_btn.addEventListener("click", skip) : __defers["$.__views.skip_btn!click!skip"] = true;
    $.__views.skip_btn_label = Ti.UI.createLabel({
        color: "#40a3ff",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        font: {
            fontSize: 14
        },
        text: "skip",
        id: "skip_btn_label"
    });
    $.__views.skip_btn.add($.__views.skip_btn_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.signup_or_skip.open({});
    __defers["$.__views.__alloyId169!click!add"] && $.__views.__alloyId169.addEventListener("click", add);
    __defers["$.__views.skip_btn!click!skip"] && $.__views.skip_btn.addEventListener("click", skip);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;