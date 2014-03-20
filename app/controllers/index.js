var login = require('Login');
var _url = login.url();
var nav;

login.init(function(){
  var home = Alloy.createController('home/home');
  	nav = Titanium.UI.MobileWeb.createNavigationGroup({
   		window:home.getView()
	});
	$.index.add(nav);
	$.index.open();
});

Ti.App.addEventListener("openWindow",function(window){
	nav.open(window,{animate:true,navBarHidden:true});
});

Ti.App.addEventListener("closeWindow",function(window){
	nav.close(window);
});


