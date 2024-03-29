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
	$.photo.setBackgroundImage("common/plus_with_10_margin.png");
	$.text.setText("add new");
}

if(_editable){
	$.edit_icon.setVisible(true);
}

function goToUser(){
	if(_data){
		var profile =  Alloy.createController("profile/profile",{_data:_data});
	}else if(_editable){
		onEdit();
	}
}

function onEdit(){
	if(_data){
		var delete_share =  Alloy.createController("car/share/share_delete",{_cid:_cid,_data:_data,_callBack:function(){
			_callBack();
		}});
	}else{
		var show_all_friends =  Alloy.createController("car/share/share_add_edit",{_cid:_cid,_callBack:function(){
			_callBack();
		}});
	}
}
