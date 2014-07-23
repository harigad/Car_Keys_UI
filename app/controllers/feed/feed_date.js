var args = arguments[0] || {};
var _month = args._month || "";
var _year = args._year || "";

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

$.date.setText(monthNames[_month] + ", " + _year);
