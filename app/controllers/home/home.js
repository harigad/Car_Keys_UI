var login = require('Login');

onPlateChanged();

function editPlate(){
	var edit_plate_notes =  Alloy.createController("home/edit_plate/notes",{_callBack:function(){
		onPlateChanged();
	}});
}

function onPlateChanged(){
	var plate = login.getPlate();
	if(plate && plate !==""){
		$.plate.setText(login.getPlate());	
	}else{
		$.plate.setText("create your CARKEY");
	}
}

function onAddNew(){
	var signup =  Alloy.createController("signup/signup",{_callBack:function(){
		$.mycars.refresh();
	}});
}


function onRideAlong(){
	var ridealong =  Alloy.createController("ridealong/ridealong",{_callBack:function(success){
		if(success){
			
		}
	}});
}

function onInvite(){
	
}

function onPost(){
	
}


