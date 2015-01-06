var args = arguments[0] || {};

$.signup_or_skip.open({});

function add(){
	var signup =  Alloy.createController("signup/signup",{_callBack:function(){
		args._callBack();
		$.signup_or_skip.close();
	}});	
}

function skip(){
	args._callBack();
	$.signup_or_skip.close();
	args._callBack();
}