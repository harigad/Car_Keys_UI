var login = require('Login');
		var args = arguments[0] || {};
		var _rid = args._rid;
		var _cid = args._cid;
		var _callBack = args._callBack;

$.radio_delete.open();

function onDelete(){
	var send_to_server =  Alloy.createController("car/radio/radio_send_to_server",{_delete:true,_rid:_rid,_cid:_cid,_callBack:function(){
			_callBack();
			$.radio_delete.close();
	}});
}

function onCancel(){
	$.radio_delete.close();
}
