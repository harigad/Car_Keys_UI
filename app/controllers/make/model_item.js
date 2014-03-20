var login = require('Login');

var args = arguments[0] || {};
var _data = args._data || {};


$.name.setText(_data.name);
$.friends.setText("friends (" + _data.count + ")");
$.count.setText("cars (" + _data.count + ")");

if(!_data.friends){
	$.name.setColor("#33");
	$.friends.setColor("#666");
}

function goToModel(){
	var model =  Alloy.createController("model/model",{_data:_data});
}
