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

//$.date.setText("arlington,tx");
$.title.setText("changed " +  gender + " bumper sticker to");//date.toDateString());
//$.photo.setBackgroundImage(_data.photo);
$.name.setText(_data.name);
$.desc.setText('"' + _data.data + '"');

function goToUser(){
	var profile =  Alloy.createController("profile/profile",{_data:{uid:_data.uid,photo:_data.photo,photo_big:_data.photo_big,name:_data.name,plate:_data.plate}});
}

function goToModel(){
	var profile =  Alloy.createController("profile/profile",{_data:{uid:_data.uid,photo_big:_data.photo_big,name:_data.name,plate:_data.plate}});
}
