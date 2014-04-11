var login = require('Login');

var args = arguments[0] || {};
var _data = args._data || {};

$.name.setText(_data.model);
//$.friends.setText("friends (" + _data.count + ")");
$.count.setText(_data.count + " cars registered");


function goToModel(){
	var model =  Alloy.createController("model/model",{_data:_data});
}
