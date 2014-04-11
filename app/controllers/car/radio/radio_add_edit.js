var login = require('Login');
		var args = arguments[0] || {};
		var _cid = args._cid || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
	
$.radio_add_edit.open();

function onEdit(){
	var radio_name = $.plate.getValue();
	var send_to_server =  Alloy.createController("car/radio/radio_send_to_server",{_cid:_cid,_radio_name:radio_name,_callBack:function(){
			_callBack();
			$.radio_add_edit.close();
	}});
}

function onCancel(){
	$.radio_add_edit.close();
}

function onFocus(){
	$.plate.focus();
}
