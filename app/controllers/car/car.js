var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _editable = args._editable;
		var _callBack = args._callBack;
		
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

$.logo.setBackgroundImage("logos/48/" + _data.logo);
$.model.setText(_data.model);

if(_data.year){
	$.year.setText("'" + _data.year);
}

if(_data.titledate){
	var d = new Date(_data.titledate);
	if(d){
		$.owned.setText("since " + monthNames[d.getMonth()+1] + " " + d.getFullYear());
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
	
	var radios = _data.radios || [];
	/*for(var i=0;i<radios.length;i++){
		var radio =  Alloy.createController("car/radio/radio_main",{_editable:_editable,_cid:_data.cid,_data:radios[i],_callBack:function(){
			_callBack();
		}});
		$.radios.add(radio.getView());
	}*/
	
	//if(_editable){
		var new_radio =  Alloy.createController("car/radio/radio_main",{_editable:true,_cid:_data.cid,_callBack:function(){
			_callBack();
		}});
		$.radios.add(new_radio.getView());
	//}
function goToModel(){
	var model =  Alloy.createController("model/model",{_data:_data});
}

function goToMake(){
	var make =  Alloy.createController("make/make",{_data:_data});
}
