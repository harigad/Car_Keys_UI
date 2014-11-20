var login = require('Login');
var _colors = ["#990000"];		
		
		var args = arguments[0] || {};
		var _data = args._data || {};
		var poll_data = JSON.parse(_data.data);
		
$.question.setText(poll_data.question);
load();
$.header.openWindow($.poll_profile);

function load(created){
	var url = "http://services.ridealong.mobi/search.php";	
	var data = {type:"poll",pollid:_data.ouid,action:"summary",accessToken:login.getAccessToken()};
	
	if(created){
		data.created = created;
	}
	
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	 var response = JSON.parse(this.responseText);
 	 	 build(response,created);
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


function build(response){
	var poll_info = response.info;
	var options = JSON.parse(poll_info.options);
	var countObjArr = response.feed;
	
	for(var i=0;i<options.length;i++){
		var countObj = getCountObjForOption(options[i],countObjArr);
		var feed_item = Alloy.createController("poll/poll_profile/poll_profile_answer_item",{_answer:options[i],_countObj:countObj});
		$.main.add(feed_item.getView());
	}
	
	drawPie();
	
}

function drawPie(){
			var data = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];


Ti.App.fireEvent("drawPie",{data:data});

}



function getCountObjForOption(option,countObjArr){
	for(var i=0;i<countObjArr.length;i++){
		if(countObjArr[i].answer == option){
			return  countObjArr[i];	
		}
	}
	return {};
}


exports.refresh = function(){
	load();
};

function more(){
	$.more.setText("please wait...");
	load(_created);
}

function clear(){
	var len = $.main.children.length;
	for(var i=0;i<len;i++){
			$.main.remove($.main.children[0]);
	}
}

