var login = require('Login');
		
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		var step = _data.step || 3;
		
eval("$.ball" + step).setBackgroundColor("#aaa");
eval("$.ball" + step).setBorderWidth(1);
eval("$.ball" + step).setBorderColor("#eee");

$.logo.setBackgroundImage("logos/48/" + _data.logo);
$.signup_verify_address.open();

function onReturn(e){
	var address = $.address.getValue();
	_callBack(address);
	$.signup_verify_address.close();
}

function onClick(e){
	
}

function onCancel(){
	
}
