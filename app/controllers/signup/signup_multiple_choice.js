var login = require('Login');
		
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		var step = _data.step || 1;
		
eval("$.ball" + step).setBackgroundColor("#aaa");
eval("$.ball" + step).setBorderWidth(1);
eval("$.ball" + step).setBorderColor("#eee");

$.signup_multiple_choice.open();
$.logo.setBackgroundImage("logos/48/" + _data.logo);

$.question.setText(_data.question);
$.answer1.setText(_data.answer1);
$.answer2.setText(_data.answer2);
$.answer3.setText(_data.answer3);
$.answer4.setText(_data.answer4);
$.answer5.setText(_data.answer5);
	
function onClick(e){
	 _callBack(e.source.getText());	
	 $.signup_multiple_choice.close();
}

function onCancel(){
	$.found_car.close();
}
