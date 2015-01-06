var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals._search = "http://services.ridealong.mobi/search.php";

Alloy.Globals._params = {
    TableViewSeparatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle
};

Alloy.createController("index");