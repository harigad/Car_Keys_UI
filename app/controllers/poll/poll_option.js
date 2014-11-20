var login = require('Login');
var args = arguments[0] || {};
var _pollid = args._pollid;
var _data = args._data;
var _selected = null;
var _onUpdate = args._onUpdate;
var _id = args._id;

$.desc.setText(_data);

function onChange(){
	if(_selected){
		_selected = false;	
	}else{
		_selected = true;
	}
	_draw();
	_onUpdate(_id,_selected);
	save();
}

function _draw(){
	if(!_selected){
		$.circle.setBackgroundColor("#dedede");
	}else{
		$.circle.setBackgroundColor("#ffa633");
	}
}

exports.select = function(){
	_selected = true;
	_draw();
};

exports.unSelect = function(){
	_selected = false;
	_draw();
};


function save(){
	var url = "http://services.ridealong.mobi/search.php";	
	var data = {type:"poll",pollid:_pollid,answer:_data,action:"save",accessToken:login.getAccessToken()};
	
	
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("User.load error " + e);
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(data);
}


