function Controller() {
    function send_to_server(name, email, mode) {
        var btnText = $._join_btn_label.getText();
        $._join_btn_label.setText("saving...please wait..");
        $._error.setHeight(0);
        $._error.setText("");
        var url = "http://flair.me/search.php";
        var _dataStr = {};
        _dataStr.type = "_invite";
        _dataStr.inviteid = _data.inviteid;
        _dataStr.pid = _data.pid;
        _dataStr.role_id = _data.role_id;
        _dataStr.mode = mode;
        _dataStr.name = name;
        _dataStr.email = email;
        _dataStr.accessToken = login.getAccessToken();
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var _response = JSON.parse(this.responseText);
                if (_response.inviteid) {
                    $._join_btn_label.setText(btnText);
                    _callBack({
                        inviteid: _response.inviteid,
                        pid: _data.pid,
                        name: name,
                        email: email,
                        role_id: _data.role_id
                    });
                    $.find_friends.close();
                } else {
                    $._join_btn_label.setText(btnText);
                    $._error.setText("Sorry! Ooops!");
                }
            },
            onerror: function() {
                $._join_btn_label.setText(btnText);
                $._error.setHeight(Ti.UI.SIZE);
                $._error.setText("Sorry! Ooops!");
            },
            timeout: 5e3
        });
        client.open("POST", url);
        client.send(_dataStr);
    }
    function onSubmit() {
        login.init(function() {
            processSubmit();
        });
    }
    function processSubmit() {
        var name = $._name.getValue();
        var email = $._email.getValue();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if ("" !== name) if (reg.test(email)) send_to_server(name, email); else {
            $._error.setHeight(Ti.UI.SIZE);
            $._error.setText("Please enter a valid email");
        } else {
            $._error.setHeight(Ti.UI.SIZE);
            $._error.setText("Please enter a name");
        }
    }
    function onDelete() {
        _callBack();
        $.find_friends.close();
    }
    function onCancel() {
        $.find_friends.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "find_friends/find_friends";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.find_friends = Ti.UI.createWindow({
        modal: true,
        id: "find_friends"
    });
    $.__views.find_friends && $.addTopLevelView($.__views.find_friends);
    $.__views.main_container = Ti.UI.createView({
        width: 620,
        height: Ti.UI.SIZE,
        id: "main_container"
    });
    $.__views.find_friends.add($.__views.main_container);
    $.__views.main = Ti.UI.createView({
        left: 0,
        width: 620,
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderRadius: 4,
        id: "main"
    });
    $.__views.main_container.add($.__views.main);
    $.__views._textField_container = Ti.UI.createView({
        left: 0,
        right: 0,
        layout: "vertical",
        top: 10,
        height: Ti.UI.SIZE,
        id: "_textField_container"
    });
    $.__views.main.add($.__views._textField_container);
    $.__views._name = Ti.UI.createTextField({
        height: "75",
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
        backgroundColor: "#ccc",
        borderRadius: 4,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        layout: "horizontal",
        font: {
            fontSize: 36
        },
        paddingLeft: 10,
        id: "_name",
        hintText: "name"
    });
    $.__views._textField_container.add($.__views._name);
    $.__views._email = Ti.UI.createTextField({
        height: "75",
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
        backgroundColor: "#ccc",
        borderRadius: 4,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        layout: "horizontal",
        font: {
            fontSize: 36
        },
        paddingLeft: 10,
        id: "_email",
        hintText: "email address"
    });
    $.__views._textField_container.add($.__views._email);
    $.__views._error = Ti.UI.createLabel({
        color: "#990000",
        height: 0,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "_error"
    });
    $.__views._textField_container.add($.__views._error);
    $.__views._join_btn = Ti.UI.createView({
        backgroundColor: "#2179ca",
        borderRadius: 4,
        top: 10,
        left: 10,
        right: 10,
        height: 50,
        id: "_join_btn"
    });
    $.__views.main.add($.__views._join_btn);
    onSubmit ? $.__views._join_btn.addEventListener("click", onSubmit) : __defers["$.__views._join_btn!click!onSubmit"] = true;
    $.__views._join_btn_label = Ti.UI.createLabel({
        color: "#fff",
        text: "",
        id: "_join_btn_label"
    });
    $.__views._join_btn.add($.__views._join_btn_label);
    $.__views._delete_btn = Ti.UI.createView({
        backgroundColor: "#770000",
        borderRadius: 4,
        top: 5,
        left: 10,
        right: 10,
        height: 0,
        id: "_delete_btn"
    });
    $.__views.main.add($.__views._delete_btn);
    onDelete ? $.__views._delete_btn.addEventListener("click", onDelete) : __defers["$.__views._delete_btn!click!onDelete"] = true;
    $.__views._delete_btn_label = Ti.UI.createLabel({
        color: "#fff",
        text: "remove request",
        id: "_delete_btn_label"
    });
    $.__views._delete_btn.add($.__views._delete_btn_label);
    $.__views._cancel_btn = Ti.UI.createView({
        backgroundColor: "#999",
        borderRadius: 4,
        top: 5,
        left: 10,
        bottom: 10,
        right: 10,
        height: 50,
        id: "_cancel_btn"
    });
    $.__views.main.add($.__views._cancel_btn);
    onCancel ? $.__views._cancel_btn.addEventListener("click", onCancel) : __defers["$.__views._cancel_btn!click!onCancel"] = true;
    $.__views._cancel_btn_label = Ti.UI.createLabel({
        color: "#fff",
        text: "cancel",
        id: "_cancel_btn_label"
    });
    $.__views._cancel_btn.add($.__views._cancel_btn_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var role = [ "", "founder", "team member", "investor", "advisor", "marketing/web guru", "attorney", "banker" ];
    var _callBack;
    var args = arguments[0] || {};
    var _data = args._data;
    var role_id;
    role_id = _data.role_id ? _data.role_id : 1;
    if (_data.inviteid) {
        $._name.setValue(_data.name);
        $._email.setValue(_data.email);
        $._join_btn_label.setText("re-send request email");
        $._delete_btn.setHeight(50);
    } else $._join_btn_label.setText("invite " + role[role_id]);
    exports.init = function(callBack) {
        _callBack = callBack;
        $.find_friends.open();
    };
    __defers["$.__views._join_btn!click!onSubmit"] && $.__views._join_btn.addEventListener("click", onSubmit);
    __defers["$.__views._delete_btn!click!onDelete"] && $.__views._delete_btn.addEventListener("click", onDelete);
    __defers["$.__views._cancel_btn!click!onCancel"] && $.__views._cancel_btn.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;