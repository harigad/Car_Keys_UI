var login = require('Login');

draw();

function draw(){
	var requests = login.getRequests();
	if(requests.length > 0 ){
		for(var i=0;i<requests.length;i++){
			var request =  Alloy.createController("ridealong/request",{_data:requests[i],_callBack:function(requestView){
				refresh();
			}});
			$.main.add(request.getView());	
			
			if(i<requests.length-1){
				$.main.add(Ti.UI.createView({height:1,backgroundColor:"#fff",opacity:0.2}));
			}
			
		}
	}else{
		
	}
}

function refresh(){
	clear();
	draw();
}

function clear(){
	var len = $.main.children.length;
	for(var i=0;i<len;i++){
			$.main.remove($.main.children[0]);
	}
}
