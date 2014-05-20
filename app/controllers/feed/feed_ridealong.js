var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};

var gender = "his";
_data.year = "2004";

var date = new Date(_data.created);

$.date.setText(date.toDateString());
$.photo.setBackgroundImage(_data.photo);
$.logo.setBackgroundImage(_data.ophoto);
$.name.setText(_data.name);
$.desc.setText("was riding along with " + _data.oname);

function goToUser(){
	
}

function goToModel(){
	var profile =  Alloy.createController("profile/profile",{_data:{id:_data.ouid,photo:_data.ophoto,name:_data.oname,plate:_data.oplate}});
}
