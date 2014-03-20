		var args = arguments[0] || {};
		var _data = args._data || {};

$.photo.setBackgroundImage(_data.photo);
//$.logo.setBackgroundImage(_data.logo);
$.name.setText(_data.name);
$.plate.setText(_data.plate);


function goToProfile(){
	var profile =  Alloy.createController("profile/profile",{_data:_data});
}
