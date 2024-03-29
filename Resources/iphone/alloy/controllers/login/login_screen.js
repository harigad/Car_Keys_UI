function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function authorize() {
        debugger;
        _callBack();
    }
    function _lock() {
        _loading = false;
        $.login.setBackgroundImage("common/login/bg1.png");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login/login_screen";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login_screen = Ti.UI.createWindow({
        backgroundColor: "#40a3ff",
        navBarHidden: true,
        id: "login_screen"
    });
    $.__views.login_screen && $.addTopLevelView($.__views.login_screen);
    $.__views.login = Ti.UI.createView({
        width: 280,
        height: 280,
        backgroundImage: "common/login/bg.png",
        id: "login"
    });
    $.__views.login_screen.add($.__views.login);
    authorize ? $.__views.login.addEventListener("click", authorize) : __defers["$.__views.login!click!authorize"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _callBack = args._callBack || {};
    var _loading = false;
    $.login_screen.open();
    _searchTime = setTimeout(function() {
        _loading || _lock();
    }, 1e3);
    exports.close = function() {
        $.login_screen.close();
    };
    exports.loading = function() {
        _loading = true;
        $.login.setBackgroundImage("common/login/bg1_loading.png");
    };
    exports.lock = function() {
        _lock();
    };
    __defers["$.__views.login!click!authorize"] && $.__views.login.addEventListener("click", authorize);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;