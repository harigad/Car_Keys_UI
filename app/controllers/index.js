var login = require('Login');
var _url = login.url();
var nav;
$.index.open();

login.init(function(){
  	var home = Alloy.createController('home/home');
  	/*nav = Titanium.UI.MobileWeb.createNavigationGroup({
   		window:home.getView()
	});
	$.index.add(nav);
	$.index.open();*/
	home.getView().open();
},

function(win){
	win.open();
},
function(win){
	win.close();
}
);

