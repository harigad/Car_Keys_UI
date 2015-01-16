function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openMenu() {
        var animation = Titanium.UI.createAnimation();
        animation.left = 280;
        animation.duration = 300;
        $.nav.animate(animation);
        $.home.addEventListener("touchstart", closeMenu);
    }
    function closeMenu() {
        debugger;
        var animation = Titanium.UI.createAnimation();
        animation.left = 0;
        animation.duration = 200;
        $.nav.animate(animation);
        $.home.removeEventListener("touchstart", closeMenu);
        Ti.App.fireEvent("showpoints");
    }
    function openHome() {
        var home = Alloy.createController("home/home_squares");
        $.home.add(home.getView());
        $.nav.open();
    }
    function launchSignup(_callBack) {
        Alloy.createController("signup/signup_or_skip", {
            _callBack: _callBack
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "home"
    });
    $.__views.nav = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.home,
        id: "nav"
    });
    $.__views.nav && $.addTopLevelView($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var overLay = Ti.UI.createView();
    overLay.addEventListener("click", function() {});
    Alloy.createController("menu/menu");
    Ti.App.addEventListener("openMenu", function() {
        openMenu();
    });
    Ti.App.addEventListener("closeMenu", function(dontAnimate) {
        closeMenu(dontAnimate);
    });
    login.init(function() {
        login.getCars().length > 0 ? openHome() : launchSignup(function() {
            openHome();
        });
    }, function(win) {
        $.nav.openWindow(win);
    }, function(win) {
        $.nav.closeWindow(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;