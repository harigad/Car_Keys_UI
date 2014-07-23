		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _userIndex = args._userIndex;
		var _thisUserCars = [];
		var _callBack = args._callBack;
		
$.photo.setBackgroundImage(_data[_userIndex].photo);		
$.name.setText(_data[_userIndex].name);
$.plate.setText(_data[_userIndex].plate);

function onSelect(){
	for(var i=0;i<_data.length;i++){
		if(_data[i].id == _data[_userIndex].id)
		{
			_thisUserCars.push(_data[i]);
		}
	}

	var select_car =  Alloy.createController("ridealong/send_request/select_car_for_ridealong",{_data:_thisUserCars,_callBack:function(success){
 	 	 		_callBack(success);
 	}});
}
