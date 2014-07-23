		var args = arguments[0] || {};
		var _data = args._data;
		var _uid = args._uid || null;
		var _showall = args._showall || false;

if(!_showall){
	$.photo.setBackgroundImage(_data.photo);
}else{
	$.photo.setBackgroundImage("common/dot_dot_dot.png");
}

function goToUser(){
	if(!_showall){
		Alloy.createController("profile/profile",{_data:_data});
	}else{
		Alloy.createController("car/radio/radio_show_all",{_data:_data});
	}
}