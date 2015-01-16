var args = arguments[0] || {};
$.question.setText(args._ask.name);
$.form_place.open();
$.plate.focus();
$.results.setData([makeRow({name:"example: firestone dallas"})]);
var _pleaseWaitTimeout = null;

function onChange(e){
	if(e.value.length===0){
		eval("$." + e.source.id + "_label").setText(e.source.hint);
	}else{
		eval("$." + e.source.id + "_label").setText(""); 
		if(e.value.indexOf(" ") > 2){
			if(_pleaseWaitTimeout){
				clearTimeout(_pleaseWaitTimeout);
			}
			_pleaseWaitTimeout = setTimeout(function(){
		  		pleaseWait(e.value);	
			},500);
		}
	}
}

var _fetchTimeout = null;
var _dontShowPleaseWait = false;
function pleaseWait(query){
	if(_fetchTimeout){
		clearTimeout(_fetchTimeout);
	}
	if(!_dontShowPleaseWait){
		$.results.setData([makeRow({name:"searching..."})]);
	}
	_fetchTimeout = setTimeout(function(){
		  fetch(query);	
	},2500);
}

function fetch(query){
		 var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
         url = url + "&key=AIzaSyAqYsZa6MJ97_Q-8NlafqfvIAki3W8pRQU";
		 url = url +  "&sensor=false&types=car_dealer|car_repair";
		 url = url + "&query=" + query;
	
	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	 var response = JSON.parse(this.responseText);
 	 	 Ti.API.info(this.responseText);
 	 	 Ti.API.info(response);
 	 	 var rows = [];
      	 for(var i=0;i<response.results.length;i++){
      	 	rows.push(makeRow(response.results[i]));
      	 }
      	 $.results.setData(rows);
      	 if(rows.length > 4){
      	 	_dontShowPleaseWait = true;
      	 }
      	 
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("User.load error " + e);
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("GET", url);
 	// Send the request.
 		client.send({});
}

function makeRow(data){
	var h = Ti.UI.createView({
		height:Ti.UI.SIZE,
		top:5,bottom:5,left:5,
		layout:"horizontal"});
	var icon = Ti.UI.createImageView({
		image:"common/map_icon_25_25.png",
		width:25, height:25,borderRadius:2,top:0,
		backgroundColor:"#eee"
	});
	h.add(icon);
	
	var v = Ti.UI.createView({
		height:Ti.UI.SIZE,
		top:0,bottom:0,left:5,
		layout:"vertical"});
	var l = Ti.UI.createLabel({
		color:"#333",left:0,
		font:{
				fontSize:14,
		},
		text:data.name,
		height:Ti.UI.SIZE
	});
	v.add(l);
	if(data.formatted_address){
		var s = Ti.UI.createLabel({
			color:"#777",left:0,
			font:{
				fontSize:12,
			},
			text:data.formatted_address,
			height:Ti.UI.SIZE
		});
		v.add(s);
	}
	h.add(v);
	var r = Ti.UI.createTableViewRow({height:Ti.UI.SIZE});
	r.add(h);
	
	r.addEventListener("click",function(){
		onNext();
	});	
	return r;
}

function onCancel(){
	$.form_place.close();
}

function onNext(){
  var miles = $.plate.getValue();
  args._callBack(miles);	
}

function help(){
	
}

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

exports.close = function(){
	$.form_place.close();
};