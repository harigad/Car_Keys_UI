var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};

var gender = "his";
_data.year = "2004";

var date = new Date(_data.created);

$.date.setText(date.toDateString());
$.photo.setBackgroundImage(_data.photo);
$.logo.setBackgroundImage("logos/48/" + _data.logo);
$.name.setText(_data.name);
$.desc.setText("is sharing " +  gender + " "  + _data.year  + " "  + _data.make + " " + _data.model + " with " + _data.oname);

function goToUser(){
	var profile =  Alloy.createController("profile/profile",{_data:{id:_data.uid,photo:_data.photo,name:_data.name,plate:_data.plate}});
}

function goToModel(){
	if(!login.canSeeModel(_data.moid)){
		var model =  Alloy.createController("model/model",{_data:_data});
	}else{
		var make =  Alloy.createController("make/make",{_data:_data});
	}
}