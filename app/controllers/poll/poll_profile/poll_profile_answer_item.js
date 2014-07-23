var login = require('Login');
		var args = arguments[0] || {};
		var _answer = args._answer || {};
		var _countObj = args._countObj || null;
		var _users = _countObj.users || null;
//$.name.setText(_data.name);
//$.photo.setBackgroundImage(_data.photo);	
$.desc.setText(_answer);

if(_users){
	for(var i=0;i<7;i++){
		var user = Alloy.createController("car/radio/radio_main",{_data:_users[0]});
		$.users.add(user.getView());
	}
}

function goToUser(){
	//var profile =  Alloy.createController("profile/profile",{_data:_data});
}
