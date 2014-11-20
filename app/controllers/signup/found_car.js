	var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		var _zipcode = args._zipcode;
		
$.found_car.open();
$.logo.setBackgroundImage("logos/48/" + _data.logo);
$.model.setText(_data.model);

function onVerify(){
	//step_1();
	step_invite();	
}

var showing_invite = false;
function step_invite(){
	var animation = Titanium.UI.createAnimation();
	animation.height = '400';
	animation.duration = 1000;
	var animationHandler = function() {
		showing_invite = true;
  		animation.removeEventListener('complete',animationHandler);
  		$.invite_text.setHeight(100);
  		$.invite_text.setTop(10);
  		$.invite_text.setVisible(true);
  		$.btn_container_label.setText("INVITE NOW");
  		$.cancel_btn_label.setText("I WILL INVITE LATER!");
  		$.btn_container.setVisible(true);
		$.cancel_container.setVisible(true);
    };
	animation.addEventListener('complete',animationHandler);
	
	$.btn_container.setVisible(false);
	$.cancel_container.setVisible(false);
	$.main.animate(animation);
}


function step_1(){
	var _answer = parseInt(_data.year);
	var _question = "What year model is your " + _data.make + "?";
	var _answer1,_answer2,_answer3,_answer4,_answer5;
	_answer1 = _answer;
	_answer2 = _answer;
	_answer3 = _answer;
	_answer4 = _answer;
	_answer5 = _answer;
	
	while(_answer1 == _answer){
		_answer1 = Math.round(Math.random() *  5 + (_answer - 2));
	}
	
	while(_answer2 == _answer || _answer2 == _answer1){
		_answer2 = Math.round(Math.random() *  5 + (_answer - 2));
	}
	
	while(_answer3 == _answer || _answer3 == _answer2 || _answer3 == _answer1){
		_answer3 = Math.round(Math.random() *  5 + (_answer - 2));
	}
	
	while(_answer4 == _answer || _answer4 == _answer3 || _answer4 == _answer2 || _answer4 == _answer1){
		_answer4 = Math.round(Math.random() *  5 + (_answer - 2));
	}
	
	while(_answer5 == _answer || _answer5 == _answer4 || _answer5 == _answer3 || _answer5 == _answer2 || _answer5 == _answer1){
		_answer5 = Math.round(Math.random() *  5 + (_answer - 2));
	}

	eval("_answer" + (Math.round(4 * Math.random()) + 1) + "=_answer");
	
	var signup =  Alloy.createController("signup/signup_multiple_choice",{_data:{
		step: 1,
		logo:_data.logo,
		question: _question,
		answer1: _answer1,
		answer2: _answer2,
		answer3: _answer3,
		answer4: _answer4,
		answer5: _answer5
	},_callBack:function(answer){
		step_2({year:answer});
	}});
}


function step_2(answerObj){
	var colors =["red","white","marroon","blue","black","green","yellow","brown","silver","pink","purple"];
	var _answer = _data.color || "red";
	var _question = "What color is your " + _data.make + "?";
	var _answer1,_answer2,_answer3,_answer4,_answer5;
	
	_answer1=_answer2=_answer3=_answer4=_answer5=_answer;
	
	while(_answer1 == _answer){
		_answer1 = colors[Math.round(Math.random()*10)];
	}
	
	while(_answer2 == _answer || _answer2 == _answer1){
		_answer2 = colors[Math.round(Math.random()*10)];
	}
	
	while(_answer3 == _answer || _answer3 == _answer2 || _answer3 == _answer1){
		_answer3 = colors[Math.round(Math.random()*10)];
	}
	
	while(_answer4 == _answer || _answer4 == _answer3 || _answer4 == _answer2 || _answer4 == _answer1){
		_answer4 = colors[Math.round(Math.random()*10)];
	}
	
	while(_answer5 == _answer || _answer5 == _answer4 || _answer5 == _answer3 || _answer5 == _answer2 || _answer5 == _answer1){
		_answer5 = colors[Math.round(Math.random()*10)];
	}
	
	eval("_answer" + (Math.round(4 * Math.random()) + 1) + "=_answer");
	
	var signup =  Alloy.createController("signup/signup_multiple_choice",{_data:{
		step: 2,
		logo:_data.logo,
		question: _question,
		answer1: _answer1,
		answer2: _answer2,
		answer3: _answer3,
		answer4: _answer4,
		answer5: _answer5
	},_callBack:function(answer){
		answerObj.color = answer;
		step_4(answerObj);
	}});
}

function step_3(answerObj){
	var _answer = _data.titleYear || 2014;
		_answer = parseInt(_answer);
	var _question = "When did you BUY your " + _data.make + "?";
	var _answer1,_answer2,_answer3,_answer4,_answer5;
	_answer1 = _answer;
	_answer2 = _answer;
	_answer3 = _answer;
	_answer4 = _answer;
	_answer5 = _answer;
	
	while(_answer1 == _answer){
		_answer1 = Math.round(Math.random() *  5 + (_answer - 2));
	}
	
	while(_answer2 == _answer || _answer2 == _answer1){
		_answer2 = Math.round(Math.random() *  5 + (_answer - 2));
	}
	
	while(_answer3 == _answer || _answer3 == _answer2 || _answer3 == _answer1){
		_answer3 = Math.round(Math.random() *  5 + (_answer - 2));
	}
	
	while(_answer4 == _answer || _answer4 == _answer3 || _answer4 == _answer2 || _answer4 == _answer1){
		_answer4 = Math.round(Math.random() *  5 + (_answer - 2));
	}
	
	while(_answer5 == _answer || _answer5 == _answer4 || _answer5 == _answer3 || _answer5 == _answer2 || _answer5 == _answer1){
		_answer5 = Math.round(Math.random() *  5 + (_answer - 2));
	}

	eval("_answer" + (Math.round(4 * Math.random()) + 1) + "=_answer");
	
	var signup =  Alloy.createController("signup/signup_multiple_choice",{_data:{
		step: 3,
		logo:_data.logo,
		question: _question,
		answer1: _answer1,
		answer2: _answer2,
		answer3: _answer3,
		answer4: _answer4,
		answer5: _answer5
	},_callBack:function(answer){
		answerObj.titleYear = answer;
		step_4(answerObj);
	}});
}

function step_4(answerObj){
	var signup =  Alloy.createController("signup/signup_verify_address",{_data:_data,_zipcode:_zipcode,_callBack:function(answer){
		if(answer){
			answerObj.address = answer;
			send_to_server(answerObj);
		}else{
			onCancel();
		}
	}
	});
}

function send_to_server(answerObj){
	var sendToServer =  Alloy.createController("signup/send_to_server",{_data:_data,_answerObj:answerObj,_callBack:function(){
		$.found_car.close();
		_callBack();
	}
	});
}

function onCancel(){
	if(showing_invite){
		send_to_server();
	}else{
		_callBack();
		$.found_car.close();
	}
}
