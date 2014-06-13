var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data;

$.photo.setImage(_data.photo_big);

function goToUser(){
	var profile =  Alloy.createController("profile/profile",{_data:_data});
}