var args = arguments[0] || {};
var _data = args._data;
var _callBack = args._callBack;
var login = require('Login');

$.header.openWindow($.carwindow);

var car =  Alloy.createController("car/car",{_data:_data,_callBack:function(){
	
}});
$.main.setData([car.getView()]);
