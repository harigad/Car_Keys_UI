		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		
$.photo.setBackgroundImage(_data.photo);
$.name.setText(_data.name);


function onClick(e){
	_callBack();
}
