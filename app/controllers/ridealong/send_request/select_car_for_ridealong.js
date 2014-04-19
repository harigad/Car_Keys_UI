		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;

	$.photo.setBackgroundImage(_data[0].photo);
	$.name.setText(_data[0].name);
	$.plate.setText(_data[0].plate);

	for(var i=0;i<_data.length;i++){
		var car =  Alloy.createController("ridealong/send_request/select_car_for_ridealong_btn",{_data:_data[i],_callBack:function(success){
			_callBack(success);
			$.select_car_for_ridealong.close();
		}});
		$.cars.add(car.getView());
	}

$.select_car_for_ridealong.open();


function onCancel(){
	_callBack(false);
	$.select_car_for_ridealong.close();
}

