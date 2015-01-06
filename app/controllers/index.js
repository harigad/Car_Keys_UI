var login = require('Login');
var nav;

function openHome(){
	var home = Alloy.createController('home/home_squares');
  	$.home.add(home.getView());
  	$.nav.open();
}

function launchSignup(_callBack){
	var signup =  Alloy.createController("signup/signup_or_skip",{_callBack:_callBack});
}

login.init(function(){
	if(login.getCars().length > 0){
      			openHome();
      	}else{
      	 		launchSignup(function(){
      	 			openHome();
      	 		});
    }
},

function(win){
	$.nav.openWindow(win);
},
function(win){
	$.nav.closeWindow(win);
}
);

