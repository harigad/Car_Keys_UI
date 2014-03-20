var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data;
		var _cid = args._cid;
		var _editable = args._editable;
		var _callBack = args._callBack;

$.share_delete.open();

function onDelete(){
	var send_to_server =  Alloy.createController("car/share/share_send_to_server",{_delete:true,_cid:_cid,_data:_data,_callBack:function(){
			_callBack();
			$.share_delete.close();
	}});
}

function onCancel(){
	$.share_delete.close();
}
