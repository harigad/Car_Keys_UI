var args = arguments[0] || {};
var _cars = args._cars;
var _callBack = args._callBack;

$.question.setText(args._ask.name);
for(var i=0;i<_cars.length;i++){
	var car = Alloy.createController("form/form_car",{_car:_cars[i],_callBack:function(obj){
		_callBack(obj);
	}});
	$.main.add(car.getView());
}

$.form_car_selector.setLeft(280);

	var animation = Titanium.UI.createAnimation();
		animation.left = 0;
		animation.duration = 200;
	  


$.form_car_selector.open(animation);

function onCancel(){
	var animation = Titanium.UI.createAnimation();
		animation.left = 320;
		animation.duration = 300;
	$.form_car_selector.close(animation);
}

exports.close = function(){
	$.form_car_selector.close();
};
