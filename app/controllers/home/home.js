var login = require('Login');

onPlateChanged();

$.header.setHome();

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
		$.plate.setText("create your own plate");
	}
}