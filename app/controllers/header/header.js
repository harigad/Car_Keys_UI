var parentWindow;
var isHome = false;

Ti.App.addEventListener("goHome",function(e){
	if(!isHome){
		parentWindow.close();
	}
});

exports.setTitle = function(name){
	$.title.setText(name);
};

exports.setHome = function(){
	isHome = true;
	$.left_btn.setVisible(false);
	$.right_btn.setVisible(false);
};

exports.openWindow = function(win){
	parentWindow = win;
	Ti.App.fireEvent("openWindow",win);
};

function goBack(){
    Ti.App.fireEvent("closeWindow",parentWindow);
}

function goHome(){
	Ti.App.fireEvent("goHome");
}
