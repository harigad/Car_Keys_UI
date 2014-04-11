function Controller() {
    function goToUser() {
        _data || _editable && onEdit();
    }
    function onEdit() {
        _data ? Alloy.createController("car/radio/radio_delete", {
            _cid: _cid,
            _rid: _data.rid,
            _callBack: function() {
                _callBack();
            }
        }) : Alloy.createController("car/radio/radio_add_edit", {
            _cid: _cid,
            _callBack: function() {
                _callBack();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/radio/radio_main";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    goToUser ? $.__views.main.addEventListener("click", goToUser) : __defers["$.__views.main!click!goToUser"] = true;
    $.__views.photo = Ti.UI.createView({
        width: 0,
        height: 0,
        backgroundColor: "#ccc",
        borderRadius: 2,
        id: "photo"
    });
    $.__views.main.add($.__views.photo);
    $.__views.text = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        right: 5,
        top: 0,
        color: "#333",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        id: "text"
    });
    $.__views.main.add($.__views.text);
    $.__views.edit_icon = Ti.UI.createView({
        width: 16,
        height: 16,
        backgroundImage: "common/edit_icon.png",
        visible: false,
        bubbleParent: false,
        id: "edit_icon"
    });
    $.__views.main.add($.__views.edit_icon);
    onEdit ? $.__views.edit_icon.addEventListener("click", onEdit) : __defers["$.__views.edit_icon!click!onEdit"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _cid = args._cid;
    var _editable = args._editable;
    var _callBack = args._callBack;
    if (_data) {
        $.photo.setBackgroundImage(_data.photo);
        $.text.setText(_data.name);
    } else $.text.setText("none");
    _editable && _data && $.edit_icon.setVisible(true);
    __defers["$.__views.main!click!goToUser"] && $.__views.main.addEventListener("click", goToUser);
    __defers["$.__views.edit_icon!click!onEdit"] && $.__views.edit_icon.addEventListener("click", onEdit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;