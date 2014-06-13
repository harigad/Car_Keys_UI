var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _editable = args._editable;
		var _callBack = args._callBack;
		
if(_editable){
//	$.edit_icon.setVisible(true);	
var now = new Date();
var expires = new Date(_data.regexpdate);
var days_remaining = Math.round((expires-now)/(1000 * 60 * 60 * 24));

	//if(days_remaining > 90){
	//	$.expires_lbl.setText("Registration Renewal BEGINS in " + (days_remaining - 90) + " days");
	if(days_remaining > 0){
		$.expires_lbl.setText("Registration Exipres in " + days_remaining + " days");
	}else{
		$.expires.setBackgroundColor("#990000");
		$.expires_lbl.setText("Registration Expired  " + Math.abs(days_remaining) + " days ago");
	}
	
	$.expires.setBottom(10);
	$.expires.setHeight("Ti.UI.SIZE");
}		
		
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

$.logo.setBackgroundImage("logos/48/" + _data.logo);

if(!login.canSeeModel(_data.moid)){
	$.model.setColor("#333");
}

$.model.setText(_data.model);

if(_data.year){
	$.year.setText("'" + _data.year);
}

if(_data.titledate){
	var d = new Date(_data.titledate);
	if(d){
		$.owned.setText("since " + monthNames[d.getMonth()] + " " + d.getFullYear());
	}
}

	var shares = _data.shares || [];
	for(var i=0;i<shares.length;i++){
		var share =  Alloy.createController("car/share/share_main",{_editable:_editable,_cid:_data.cid,_data:shares[i],_callBack:function(){
			_callBack();
		}});
		$.shares.add(share.getView());
	}
	
	if(_editable){
		var new_share =  Alloy.createController("car/share/share_main",{_editable:_editable,_cid:_data.cid,_callBack:function(){
			_callBack();
		}});
		$.shares.add(new_share.getView());
	}
	
	var rides = _data.rides || [];
	for(var i=0;i<rides.length;i++){
		var ride =  Alloy.createController("car/radio/radio_main",{_data:rides[i]});
		$.radios.add(ride.getView());
	}

	if(rides.length === 6){
		var ride =  Alloy.createController("car/radio/radio_main",{_data:_data,_showall:true});
		$.radios.add(ride.getView());
	}
	
function goToModel(){
	if(login.canSeeModel(_data.moid)){
		var model =  Alloy.createController("model/model",{_data:_data});
	}else{
		goToMake();
	}
}

function goToMake(){
	var make =  Alloy.createController("make/make",{_data:_data});
}

function onEdit(){
	
}

function explain_expires(){
	
}
