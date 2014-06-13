var parentWindow;

Ti.App.addEventListener("goHome",function(e){
	if(!isHome){
		parentWindow.close();
	}
});

exports.setTitle = function(name){
	$.title.setText(name);
};

exports.openWindow = function(win,rightImage,callBack){
	parentWindow = win;
	if(rightImage){
		$.right_btn.setBackgroundImage(rightImage);
	}
	if(callBack){
		_callBack = callBack;
	}
	Ti.App.fireEvent("openWindow",win);
};

exports.back = function(){
	goBack();
};

function goBack(){
    Ti.App.fireEvent("closeWindow",parentWindow);
}

function goHome(){
	if(!_callBack){
		Ti.App.fireEvent("goHome");
	}else{
		_callBack();
	}
}
