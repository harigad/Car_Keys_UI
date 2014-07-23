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

$.date.setText("is sharing " + gender + " " + _data.model + " with");//date.toDateString());
$.photo.setBackgroundImage(_data.photo);
$.logo.setBackgroundImage(_data.ophoto);
$.name.setText(_data.name);
$.desc.setText(_data.oname);

function goToUser(){
	var profile =  Alloy.createController("profile/profile",{_data:{uid:_data.uid,photo:_data.photo,photo_big:_data.photo_big,name:_data.name,plate:_data.plate}});
}

function goToModel(){
	var profile =  Alloy.createController("profile/profile",{_data:{uid:_data.ouid,photo:_data.ophoto,photo_big:_data.ophoto_big,name:_data.oname,plate:_data.oplate}});
}
