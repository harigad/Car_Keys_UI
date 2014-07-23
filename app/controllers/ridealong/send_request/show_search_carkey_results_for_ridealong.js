		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;

	var id = 0;
	for(var i=0;i<_data.length;i++){
		if(_data[i].id != id)
		{
			var usr =  Alloy.createController("ridealong/send_request/show_search_carkey_results_for_ridealong_btn",{_data:_data,_userIndex:i,_callBack:function(success){
				_callBack(success);
				$.show_search_carkey_results_for_ridealong.close();
			}});
		$.usrs.add(usr.getView());
		id = _data[i].id;
		}
	}

$.show_search_carkey_results_for_ridealong.open();

function onCancel(){
	_callBack(false);
	$.show_search_carkey_results_for_ridealong.close();
}

