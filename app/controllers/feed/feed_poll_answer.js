var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};

var poll_data = JSON.parse(_data.data);

var gender;
if(_data.gender === "1"){
	gender = "her";
}else{
	gender = "his";
}

var date = new Date(_data.created);

//$.photo.setBackgroundImage(_data.photo);
$.name.setText(_data.name);
$.title.setText("answered a survey about " +  gender + " " + poll_data.model);
$.question.setText(poll_data.question);
$.answer.setText('Answered: "' + poll_data.answer + '"');

function goToUser(){
	var profile =  Alloy.createController("profile/profile",{_data:{uid:_data.uid,photo:_data.photo,photo_big:_data.photo_big,name:_data.name,plate:_data.plate}});
}

function goToPoll(){
	var poll = Alloy.createController("poll/poll_profile/poll_profile",{_data:_data});
}
