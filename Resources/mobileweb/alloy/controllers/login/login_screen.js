function Controller() {
    function onClick() {
        _callBack();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login/login_screen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login_screen = Ti.UI.createWindow({
        backgroundColor: "#2179ca",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "login_screen"
    });
    $.__views.login_screen && $.addTopLevelView($.__views.login_screen);
    $.__views.login = Ti.UI.createView({
        width: 280,
        height: 280,
        backgroundImage: "common/login/bg1.png",
        id: "login"
    });
    $.__views.login_screen.add($.__views.login);
    onClick ? $.__views.login.addEventListener("click", onClick) : __defers["$.__views.login!click!onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _callBack = args._callBack || {};
    $.login_screen.open();
    exports.loading = function() {
        $.login.setBackgroundImage("common/login/bg1_loading.png");
    };
    __defers["$.__views.login!click!onClick"] && $.__views.login.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;