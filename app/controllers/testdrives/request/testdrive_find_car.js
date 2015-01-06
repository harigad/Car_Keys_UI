		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;

var login = require('Login');
$.testdrive_find_car.open();
$.plate.focus();

function onFocus(e){
	eval("$." + e.source.id + "_label").setOpacity(.6);
	
	if(e.value.length===0){
		eval("$." + e.source.id + "_label").setText(e.source.hint);
	}else{
		eval("$." + e.source.id + "_label").setText(""); 
	}
}

function onBlur(e){
	eval("$." + e.source.id + "_label").setOpacity(0);
}

function onChange(e){
	if(e.value.length===0){
		eval("$." + e.source.id + "_label").setText(e.source.hint);
	}else{
		eval("$." + e.source.id + "_label").setText(""); 
	}
}

function process(){
	if($.plate.getValue() !== ""){
		/*var zipcode = $.zipcode.getValue();
		if(zipcode === "" || zipcode.length < 5){
			return;
		}*/
	}else{
		return;
	}
	
	login.openPleaseWait();
	var url = "http://services.ridealong.mobi/secure.php?page=signup2";	
	var _data = {vin:$.plate.getValue(),accessToken:login.getAccessToken()};

 	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
     	login.closePleaseWait();
         var response = JSON.parse(this.responseText);
         if(!response.status){
				    showError(response.error);     	
         }else{
         		var found_car =  Alloy.createController("testdrives/request/testdrive_found_car",{_data:response,_zipcode:"$.zipcode.getValue()",_callBack:function(){
         			_callBack();
         			$.testdrive_find_car.close();
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

function launchHelp(){
	var help =  Alloy.createController("testdrives/request/testdrive_vin_help",{_callBack: function(){
			$.plate.focus();
	}});
}

function showError(e){
		var not_found_car =  Alloy.createController("signup/not_found_car",{_e:e, _callBack: function(){
			login.closePleaseWait();
			$.plate.focus();
		}});
}

function onCancel(){
	$.testdrive_find_car.close();
}
