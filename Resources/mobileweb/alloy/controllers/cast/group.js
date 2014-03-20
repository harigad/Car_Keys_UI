function Controller() {
    function onNewRowAdded(row, data, showInviteBtn) {
        $.listView.remove(row.getView());
        data && addNew(data);
        showInviteBtn && addNew();
    }
    function addNew(emtpyData) {
        emtpyData || (emtpyData = {
            photo: "mobileweb/plus.png",
            name: "add " + role[role_id],
            role_id: role_id,
            pid: pid
        });
        var row = Alloy.createController("cast/cast", {
            _data: emtpyData,
            _onNewRowAdded: onNewRowAdded
        });
        $.listView.add(row.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cast/group";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        top: 0,
        bottom: 0,
        width: Ti.UI.FILL,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.header = Ti.UI.createView({
        height: 0,
        backgroundColor: "#eee",
        left: 0,
        layout: "horizontal",
        id: "header"
    });
    $.__views.main.add($.__views.header);
    $.__views.header_label = Ti.UI.createLabel({
        top: 5,
        bottom: 5,
        left: 10,
        color: "#aaa",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 14
        },
        id: "header_label"
    });
    $.__views.header.add($.__views.header_label);
    $.__views.listView = Ti.UI.createView({
        left: 10,
        right: 10,
        top: 0,
        bottom: 0,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "listView"
    });
    $.__views.main.add($.__views.listView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var role_id = args.role_id;
    var pid = args.pid;
    var cast = [];
    var roles = [ "", "Founders", "Team", "Investors", "Advisors", "Marketing/Web", "Attorney", "Banking" ];
    var role = [ "", "founder", "team member", "investor", "advisor", "marketing/web guru", "attorney", "banker" ];
    $.header_label.setText(roles[role_id]);
    for (var i = 0; _data.length > i; i++) _data[i].role_id == role_id && cast.push(_data[i]);
    for (var i = 0; cast.length > i; i++) {
        var row = Alloy.createController("cast/cast", {
            _data: cast[i],
            _onNewRowAdded: onNewRowAdded
        });
        $.listView.add(row.getView());
    }
    login.isAdmin(pid) && addNew();
    if (0 === cast.length && true !== login.isAdmin(pid)) {
        $.main.setHeight(0);
        $.main.setVisible(false);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;