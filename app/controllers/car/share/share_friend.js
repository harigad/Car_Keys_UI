var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _cid = args._cid;
		var _callBack = args._callBack;
		
$.name.setText(_data.name);

function onClick(){
		var send_to_server =  Alloy.createController("car/share/share_send_to_server",{_cid:_cid,_data:_data,_callBack:function(){
			_callBack();
		}});
}
