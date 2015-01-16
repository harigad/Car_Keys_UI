function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "form/form_save";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.form_save = Ti.UI.createWindow({
        opacity: "0",
        id: "form_save"
    });
    $.__views.form_save && $.addTopLevelView($.__views.form_save);
    $.__views.layer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundImage: "common/blue_bg.png",
        id: "layer",
        backgroundColor: "#40a3ff"
    });
    $.__views.form_save.add($.__views.layer);
    $.__views.points = Ti.UI.createLabel({
        width: 300,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 50
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "calculating..",
        id: "points"
    });
    $.__views.form_save.add($.__views.points);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var animation = Titanium.UI.createAnimation();
    animation.opacity = 1;
    animation.duration = 300;
    animation.addEventListener("complete", function() {
        args._callBack();
        setTimeout(function() {
            $.points.setText("");
            $.points.setFont({
                fontSize: 70
            });
            $.points.setText("250 points earned");
        }, 700);
    });
    $.form_save.open(animation);
    Ti.App.fireEvent("closeMenu", true);
    setTimeout(function() {
        var animation = Titanium.UI.createAnimation();
        animation.opacity = 0;
        animation.duration = 1e3;
        animation.addEventListener("complete", function() {
            $.form_save.close();
        });
        $.layer.animate(animation);
    }, 2500);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;