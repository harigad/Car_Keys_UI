var login = require('Login');

var args = arguments[0] || {};
var _data = args._data || {};

if(!login.canSeeModel(_data.moid)){
	$.name.setColor("#333");	
}

$.name.setText(_data.model);
//$.friends.setText("friends (" + _data.count + ")");
$.count.setText(_data.count + " cars registered");


function goToModel(){
	if(login.canSeeModel(_data.moid)){
		var model =  Alloy.createController("model/model",{_data:_data});
	}
}
