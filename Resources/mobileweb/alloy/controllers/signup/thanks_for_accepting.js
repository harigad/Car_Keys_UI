function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/thanks_for_accepting";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    args._callBack;
    var roleNames = [ "", "Founder", "Investor", "Advisor", "Team Members", "Marketing/Web Guru", "Attorney", "Banker" ];
    $.rolename.setText(roleNames[_data.role_id]);
    $.placename.setText(_data.placename);
    $.thanks_for_accepting.open();
    Ti.App.addEventListener("goHome", function() {
        $.thanks_for_accepting.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;