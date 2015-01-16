var login = require('Login');
var nav;
var _menuStatus=false;

var overLay = Ti.UI.createView();
overLay.addEventListener("click",function(){
	//closeMenu();
});

Alloy.createController("menu/menu");

Ti.App.addEventListener("openMenu",function(){
	openMenu();
});

Ti.App.addEventListener("closeMenu",function(dontAnimate){
	closeMenu(dontAnimate);
});


function onClick(){
	debugger;
		closeMenu();
}

function openMenu(){
		var animation = Titanium.UI.createAnimation();
		animation.left = 280;
		animation.duration = 300;
	    $.nav.animate(animation);
	    $.home.addEventListener("touchstart",closeMenu);
	    
	  //  $.home.add(Ti.UII)
}

function closeMenu(dontAnimate){
	debugger;
//	if(dontAnimate){
//		$.nav.setLeft(0);
//	}else{
		var animation = Titanium.UI.createAnimation();
		animation.left = 0;
		animation.duration = 200;
	    $.nav.animate(animation);
//	}
	 $.home.removeEventListener("touchstart",closeMenu);
	 Ti.App.fireEvent("showpoints");
}

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

