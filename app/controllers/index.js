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
});

Ti.App.addEventListener("openWindow",function(window){
	window.open();
	//nav.open(window,{animate:true,navBarHidden:true});
});

Ti.App.addEventListener("closeWindow",function(window){
	window.close();
	//nav.close(window);
});


