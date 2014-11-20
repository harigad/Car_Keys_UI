		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		var _obj = args._obj;

if(_data.title){
	$.title.setText(_data.title);
}else{
	$.main.remove($.title);
}

if(_data.image){
	$.icon.setImage(_data.image);
	if(_data.width)$.icon.setWidth(_data.width);
	if(_data.height)$.icon.setWidth(_data.height);
}

$.home_square.setBackgroundColor("#" + _data.bg);

function onClick(){
	if(_callBack){
		_callBack(_obj);
	}
}
