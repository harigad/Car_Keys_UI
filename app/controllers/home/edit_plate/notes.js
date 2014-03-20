var login = require('Login');
var args = arguments[0] || {};
var _callBack = args._callBack || {};


if(login.getPlate()){
	onOk();	
}else{
	$.notes.open();
}

function onOk(){
	var edit_plate_notes =  Alloy.createController("home/edit_plate/edit_plate",{_callBack:function(){
		_callBack();
		$.notes.close();
	}});
}
