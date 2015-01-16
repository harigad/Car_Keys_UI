

$.menu.open();

//----------------
function test_drive(){
	//Ti.App.fireEvent("closeMenu",true);
	Alloy.createController("testdrives/request/testdrive_find_car");
}

function add_car(){
	//Ti.App.fireEvent("closeMenu",true);
	Alloy.createController("signup/signup",{animate:true});
}

function form(e){
	debugger;
	//Ti.App.fireEvent("closeMenu",true);
	Alloy.createController("form/form",{_ask:this.ask});
}
