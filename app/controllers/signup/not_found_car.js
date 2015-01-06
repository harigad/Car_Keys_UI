		var args = arguments[0] || {};
		var _e = args._e || "";
		var _callBack = args._callBack;


$.error_label.setText(_e);
$.not_found_car.open();

function onOk(){
	$.not_found_car.close();
	_callBack();
}
