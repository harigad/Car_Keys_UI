var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};

var gender;
if(_data.gender === "1"){
	gender = "her";
}else{
	gender = "his";
}
var date = new Date(_data.created);

$.date.setText(date.toDateString());
$.photo.setBackgroundImage(_data.ophoto);
$.logo.setBackgroundImage(_data.photo);
$.name.setText(_data.oname);
$.desc.setText("was riding along in a " + _data.model + " with " + _data.name);

function goToUser(){
	var profile =  Alloy.createController("profile/profile",{_data:{id:_data.ouid,photo:_data.ophoto,photo_big:_data.ophoto_big,name:_data.oname,plate:_data.oplate}});
}

function goToModel(){
	var profile =  Alloy.createController("profile/profile",{_data:{id:_data.uid,photo:_data.photo,photo_big:_data.photo_big,name:_data.name,plate:_data.plate}});
}
