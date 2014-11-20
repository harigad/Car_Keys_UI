var login = require('Login');
	
		var args = arguments[0] || {};
		
		var _cid = args._cid;
		var _radio_name = args._radio_name || "";
		var _rid = args._rid;
		
		var _callBack = args._callBack;

	$.radio_send_to_server.open();

	var url = "http://services.ridealong.mobi/search.php";	
	var _postData = {type:"editradio",cid:_cid,radio_name:_radio_name,accessToken:login.getAccessToken()};
	
	if(_rid){
		_postData.rid = _rid;//deleting record
	}
		
	Ti.API.debug("adding radio " + _postData);
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("radio added");
 	 	 var response = JSON.parse(this.responseText);
      	 login.setCars(response.cars);
      	 _callBack();
      	 $.radio_send_to_server.close();
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("add radio error " + e);
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(_postData);