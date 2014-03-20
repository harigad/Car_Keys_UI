var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data;
		var _cid = args._cid;
		var _editable = args._editable;
		var _callBack = args._callBack;

if(_data){
	$.photo.setBackgroundImage(_data.photo);
	$.text.setText(_data.name);
}else{
	$.text.setColor("#2179ca");
	$.text.setText("add new");
}

if(_editable && _data){
	$.edit_icon.setVisible(true);
}


function goToUser(){
	if(_data){
		//var profile =  Alloy.createController("profile/profile",{_data:_data});
	}else if(_editable){
		onEdit();
	}
}

function onEdit(){
	if(_data){
		var delete_share =  Alloy.createController("car/radio/radio_delete",{_cid:_cid,_rid:_data.rid,_callBack:function(){
			_callBack();
		}});
	}else{
		var show_all_friends =  Alloy.createController("car/radio/radio_add_edit",{_cid:_cid,_callBack:function(){
			_callBack();
		}});
	}
}
