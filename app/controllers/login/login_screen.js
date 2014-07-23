		var args = arguments[0] || {};
		var _callBack = args._callBack || {};
		var _loading = false;
$.login_screen.open();

_searchTime = setTimeout(function(){
	if(!_loading){
		_lock();
	}
},1000);


function onClick(){
	_callBack();
}

exports.loading = function(){
	_loading = true;
	$.login.setBackgroundImage("common/login/bg1_loading.png");
};

exports.lock = function(){
	_lock();
};

function _lock(){
	_loading = false;
	$.login.setBackgroundImage("common/login/bg1.png");
}
