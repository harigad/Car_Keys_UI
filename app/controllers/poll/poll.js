var login = require('Login');
var args = arguments[0] || {};
var _data = args._data;
var _colors = ["#009900","#990000"];
var option_objects = [];

$.desc.setText(_data.question);
$.name.setText(_data.name);
$.photo.setBackgroundImage(_data.photo);

var date = new Date(_data.created);
$.date.setText(date.toDateString());

var options = JSON.parse(_data.options);
var _selectedItem = null;
/*
for(var i=0;i<options.length;i++){
		var poll_option = Alloy.createController("poll/poll_option",{_pollid:_data.pollid,_id:i,_data:options[i],_onUpdate:function(id,selected){
		
			if(_selectedItem !== null && _selectedItem !== id){
				option_objects[_selectedItem].unSelect();
				_selectedItem = null;
			}
			
			if(selected){
				_selectedItem = id;
			}
			
		}});
		
		$.options.add(poll_option.getView());
	
		if(options[i] === _data.answer){
			_selectedItem = i;
			 poll_option.select();
		}
		
		option_objects[i] = poll_option; 
}

var comments = JSON.parse(_data.data);
for(var i=0;i<comments.length;i++){
		var comment_item = Alloy.createController("comment/comment_item",{_pollid:_data.pollid,_data:comments[i]});
		$.comments.add(comment_item.getView());
}
*/
function goToUser(){
	var profile =  Alloy.createController("profile/profile",{_data:_data});
}

function addComment(){
	var comment =  Alloy.createController("comment/comment",{_pollid:_data.pollid,_callBack:function(comment_item){
		$.comments.add(comment_item.getView());
	},
	_errBack:function(){
		
	}});
}