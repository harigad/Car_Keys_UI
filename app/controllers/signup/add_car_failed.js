		var args = arguments[0] || {};
		var _callBack = args._callBack;
		
$.add_car_failed.open();

function onOk(){
	_callBack();
	$.add_car_failed.close();
}
