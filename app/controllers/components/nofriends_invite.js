var fb = require("Friends");

var args = arguments[0] || {};
$.desc.setText("that drive " + args._txt);

function invite(){
	fb.invite();
}