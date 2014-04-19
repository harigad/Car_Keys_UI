		var args = arguments[0] || {};
		var _data = args._data;

if(_data){
	$.photo.setBackgroundImage(_data.photo);
}else{
	$.text.setText("none");
}

function goToUser(){
	if(_data){
		var profile =  Alloy.createController("profile/profile",{_data:_data});
	}
}