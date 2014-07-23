function Controller() {
    function goToUser() {
        Alloy.createController("profile/profile", {
            _data: _data
        });
    }
    function addComment() {
        Alloy.createController("comment/comment", {
            _pollid: _data.pollid,
            _callBack: function(comment_item) {
                $.comments.add(comment_item.getView());
            },
            _errBack: function() {}
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "poll/poll";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.topView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 0,
        bottom: 0,
        id: "topView"
    });
    $.__views.main.add($.__views.topView);
    goToUser ? $.__views.topView.addEventListener("click", goToUser) : __defers["$.__views.topView!click!goToUser"] = true;
    $.__views.photo = Ti.UI.createView({
        top: 10,
        bottom: 10,
        left: 10,
        width: 35,
        height: 35,
        borderRadius: 17.5,
        borderColor: "#cecece",
        borderWidth: 2,
        id: "photo"
    });
    $.__views.topView.add($.__views.photo);
    $.__views.topRight = Ti.UI.createView({
        left: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "topRight",
        width: "200"
    });
    $.__views.topView.add($.__views.topRight);
    $.__views.name = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#ffa633",
        font: {
            fontSize: 18
        },
        text: "Hari Krishna",
        id: "name"
    });
    $.__views.topRight.add($.__views.name);
    $.__views.date = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#aaa",
        font: {
            fontSize: 11
        },
        text: "january 2nd, 2003",
        id: "date"
    });
    $.__views.topRight.add($.__views.date);
    $.__views.__alloyId70 = Ti.UI.createView({
        width: "25",
        height: "25",
        backgroundImage: "common/pie_icon.png",
        left: "10",
        id: "__alloyId70"
    });
    $.__views.topView.add($.__views.__alloyId70);
    $.__views.bottomView = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: -5,
        id: "bottomView"
    });
    $.__views.main.add($.__views.bottomView);
    $.__views.desc = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        left: "10",
        color: "#333",
        bottom: 5,
        font: {
            fontSize: 12
        },
        id: "desc"
    });
    $.__views.bottomView.add($.__views.desc);
    $.__views.__alloyId71 = Ti.UI.createView({
        left: "2",
        right: "2",
        borderRadius: "2",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId71"
    });
    $.__views.bottomView.add($.__views.__alloyId71);
    $.__views.options = Ti.UI.createView({
        id: "options",
        layout: "vertical",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId71.add($.__views.options);
    $.__views.__alloyId72 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#f1f1f1",
        borderRadius: "2",
        left: "35",
        right: "10",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.comments = Ti.UI.createView({
        id: "comments",
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "10",
        right: "10"
    });
    $.__views.__alloyId72.add($.__views.comments);
    $.__views.__alloyId73 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    addComment ? $.__views.__alloyId73.addEventListener("click", addComment) : __defers["$.__views.__alloyId73!click!addComment"] = true;
    $.__views.add_comment = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            color: "#ccc"
        },
        text: "add comment",
        height: Ti.UI.SIZE,
        id: "add_comment",
        left: "10",
        color: "#ffa633",
        top: "5",
        bottom: "5"
    });
    $.__views.__alloyId73.add($.__views.add_comment);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var option_objects = [];
    $.desc.setText(_data.question);
    $.name.setText(_data.name);
    $.photo.setBackgroundImage(_data.photo);
    var date = new Date(_data.created);
    $.date.setText(date.toDateString());
    var options = JSON.parse(_data.options);
    var _selectedItem = null;
    for (var i = 0; options.length > i; i++) {
        var poll_option = Alloy.createController("poll/poll_option", {
            _pollid: _data.pollid,
            _id: i,
            _data: options[i],
            _onUpdate: function(id, selected) {
                if (null !== _selectedItem && _selectedItem !== id) {
                    option_objects[_selectedItem].unSelect();
                    _selectedItem = null;
                }
                selected && (_selectedItem = id);
            }
        });
        $.options.add(poll_option.getView());
        if (options[i] === _data.answer) {
            _selectedItem = i;
            poll_option.select();
        }
        option_objects[i] = poll_option;
    }
    var comments = JSON.parse(_data.data);
    for (var i = 0; comments.length > i; i++) {
        var comment_item = Alloy.createController("comment/comment_item", {
            _pollid: _data.pollid,
            _data: comments[i]
        });
        $.comments.add(comment_item.getView());
    }
    __defers["$.__views.topView!click!goToUser"] && $.__views.topView.addEventListener("click", goToUser);
    __defers["$.__views.__alloyId73!click!addComment"] && $.__views.__alloyId73.addEventListener("click", addComment);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;