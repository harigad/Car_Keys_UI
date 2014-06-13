var args = arguments[0] || {};
var _data = args._data || {};

$.photo.setBackgroundImage(_data.photo);
$.name.setText(_data.name);

function goToUser(){
	Alloy.createController("profile/profile",{_data:_data});
}