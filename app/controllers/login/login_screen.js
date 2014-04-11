		var args = arguments[0] || {};
		var _callBack = args._callBack || {};

$.login_screen.open();
function onClick(){
	_callBack();
}

exports.loading = function(){
	$.login.setBackgroundImage("common/login/bg1_loading.png");
};
