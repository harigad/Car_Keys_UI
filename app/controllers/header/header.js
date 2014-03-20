var parentWindow;

exports.setTitle = function(name){
	$.title.setText(name);
};

exports.setHome = function(){
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
	Ti.APP.fireEvent("goHome");
}
