var login = require('Login');

var args = arguments[0] || {};
var _data = args._data || {};
var friends = login.getFriendsWithModel(_data.moid);

if(!login.canSeeModel(_data.moid)){
	$.name.setOpacity(0.4);	
}

$.friends.setText("friends (" + friends.length + ")");
$.count.setText("users (" + _data.count + ")");
$.name.setText(_data.model);

function goToModel(){
	if(login.canSeeModel(_data.moid)){
		var model =  Alloy.createController("model/model",{_data:_data});
	}
}
