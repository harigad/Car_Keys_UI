function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cast/cast";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: 5,
        bottom: 5,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var that = this;
    var args = arguments[0] || {};
    var _data = args._data;
    var _onNewRowAdded = args._onNewRowAdded;
    var castView;
    castView = login.isAdmin(_data.pid) ? _data.inviteid ? Alloy.createController("cast/cast_views/pending_cast", {
        _data: _data,
        _onUpdate: function(updatedData) {
            updatedData ? _data = updatedData : _onNewRowAdded(that);
        }
    }) : _data.uid ? Alloy.createController("cast/cast_views/normal_cast", {
        _data: _data
    }) : Alloy.createController("cast/cast_views/add_new_cast", {
        _data: _data,
        _onNewRowAdded: function(newInvite) {
            _onNewRowAdded(that, newInvite, true);
        }
    }) : Alloy.createController("cast/cast_views/normal_cast", {
        _data: _data
    });
    $.endorse_view && 3 > _data.role_id && $.endorse_view.setVisible(true);
    castView.getView("userPhoto").setBackgroundImage(_data.photo);
    castView.getView("userName").setText(_data.name);
    $.main.add(castView.getView());
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;