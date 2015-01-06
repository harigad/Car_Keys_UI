var login = require('Login');
var parentWindow;
var _callBack = null;
var isHome = false;

Ti.App.addEventListener("goHome",function(e){
	if(!isHome && parentWindow){
		parentWindow.close();
	}
});

exports.setTitle = function(name){
	$.title.setText(name);
};

exports.openWindow = function(win,rightText,callBack){
	parentWindow = win;
	if(rightText){
		$.right_label_text.setText(rightText);
		$.right_btn.hide();
		$.right_label.show();
		
	}else{
		$.right_label.hide();
	}
	if(callBack){
		_callBack = callBack;
	}
	//Ti.App.fireEvent("openWindow",win);
	login.openWindow(parentWindow);
};

exports.back = function(){
	goBack();
};

function goBack(){
    //Ti.App.fireEvent("closeWindow",parentWindow);
    login.closeWindow(parentWindow);
}

function goHome(){
	if(!_callBack){
		Ti.App.fireEvent("goHome");
	}else{
		_callBack();
	}
}
