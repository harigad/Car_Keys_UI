		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;

var login = require('Login');
$.signup.open();
//$.plate.focus();

function process(){
	var url = "http://flair.me/carkey/secure.php?page=signup2";	
	var _data = {plate:$.plate.getValue(),state:"TX",accessToken:login.getAccessToken()};

 	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         var response = JSON.parse(this.responseText);
         if(!response.status){
				    showError(response.error);     	
         }else{
         		var found_car =  Alloy.createController("signup/found_car",{_data:response,_callBack:function(){
         			_callBack();
         			$.signup.close();
         		}});
         }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
       showError("Please check your network connection!");
     },
     timeout : 5000  // in milliseconds
 	});
 
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(_data); 
}

function showError(e){
		var not_found_car =  Alloy.createController("signup/not_found_car",{_e:e});
		$.signup.close();
}

function onCancel(){
	$.signup.close();
}
