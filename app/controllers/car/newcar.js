var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;

function addCar(){
	var signup =  Alloy.createController("signup/signup",{_callBack:function(){
		_callBack();
	}});
}
