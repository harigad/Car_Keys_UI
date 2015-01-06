var login = require('Login');
		
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _answerObj = args._answerObj || {};
		var _callBack = args._callBack;

	$.send_to_server.open();

	var url = Alloy.Globals._search;	
	var _postData = {type:"addcar",cid:_data.cid,address:_answerObj.address,accessToken:login.getAccessToken()};
		
	Ti.API.debug("car.add sending data " + _data);
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("added car " + this.responseText);
 	 	 var response = JSON.parse(this.responseText);
 	 	 if(response.error){
 	 	 	var add_car_failed =  Alloy.createController("signup/add_car_failed",{_callBack:function(){
				_callBack();
      	 		$.send_to_server.close();
			}
			});
 	 	 }else{
      	 	login.setCars(response.cars);
      	 	_callBack();
      	 	$.send_to_server.close();
      	 }
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("User.load error " + e);
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(_postData);