var login = require('Login');
		
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _zipcode = args._zipcode || "";
		var _callBack = args._callBack;
		var step = _data.step || 3;
		

//$.logo.setBackgroundImage("logos/48/" + _data.logo);

$.city.setText(_data.city + ", " + _data.state + " - " + _zipcode);

$.signup_verify_address.open();

function onReturn(e){
	var address = $.address.getValue();
	_callBack(address);
	$.signup_verify_address.close();
}

function onClick(e){
	
}

function onCancel(){
	_callBack();
	$.signup_verify_address.close();
}
