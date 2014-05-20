var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};

var gender = "his";

var date = new Date(_data.created);

$.date.setText(date.toDateString());
$.photo.setBackgroundImage(_data.photo);
$.name.setText(_data.name);
$.desc.setText("changed " +  gender + " plate number to " + _data.platechanged);

function goToUser(){
	var profile =  Alloy.createController("profile/profile",{_data:{id:_data.uid,photo:_data.photo,name:_data.name,plate:_data.plate}});
}

function goToModel(){
	var profile =  Alloy.createController("profile/profile",{_data:{id:_data.uid,photo:_data.photo,name:_data.name,plate:_data.plate}});
}
