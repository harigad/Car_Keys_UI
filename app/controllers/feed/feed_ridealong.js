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

if(_data.data == "1" || _data.data == 1){
	$.date_0.setText("test driving");//date.toDateString());
	$.date_1.setText("a");
	$.date_2.setText(_data.model);
	$.date_3.setText("at");
}else{
	$.date_0.setText("riding along");//date.toDateString());
	$.date_1.setText("in a");
	$.date_2.setText(_data.model);
	$.date_3.setText("with");
}
//$.photo.setBackgroundImage(_data.ophoto);
//$.logo.setBackgroundImage(_data.photo);
$.name.setText(_data.oname);
$.desc.setText(_data.name);

function goToUser(){
	var profile =  Alloy.createController("profile/profile",{_data:{uid:_data.ouid,photo:_data.ophoto,photo_big:_data.ophoto_big,name:_data.oname,plate:_data.oplate}});
}

function goToModel(){
	var profile =  Alloy.createController("profile/profile",{_data:{uid:_data.uid,photo:_data.photo,photo_big:_data.photo_big,name:_data.name,plate:_data.plate}});
}
