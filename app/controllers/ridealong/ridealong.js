		var login = require('Login');
		var args = arguments[0] || {};
		var _callBack = args._callBack;


$.ridealong.open();

function onFocus(){
	
}

function onEdit(){
	var carkey = $.plate.getValue();
	var confirm =  Alloy.createController("ridealong/send_request/search_carkey_for_ridealong",{_data:carkey,_callBack:function(success){
		_callBack(success);
		$.ridealong.close();
	}});
}

function onCancel(){
	$.ridealong.close();
}
