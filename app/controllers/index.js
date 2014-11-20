var login = require('Login');
//var _url = login.url();
var nav;

login.init(function(){
  	var home = Alloy.createController('home/home_squares');
  	
  	$.home.add(home.getView());
  	$.nav.open();
  	
},

function(win){
	$.nav.openWindow(win);
},
function(win){
	$.nav.closeWindow(win);
}
);

