var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals._search = "http://services.ridealong.mobi/search.php";

var _web = {
    TableViewSeparatorStyle: Titanium.UI.MobileWeb.TableViewSeparatorStyle
};

Alloy.Globals._params = _web;

Alloy.createController("index");