//  to get current date
var a = new Date();
a;

// to get index of day

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
 
// milli seconds sicne january 1970
var a1 = a.getDate();
var a1 = (a/1000*3600*24*30*12);

var d = new Date();
var currentMonth = d.getMonth();

var dayOfMonth = d.getDate();
var currYr = d.getFullYear();
var currentHrs = d.getHours();
var currMins = d.getMinutes();
var currSecs = d.getSeconds()
var currMills = d.getMilliseconds();
//getTime gives you the number of milliseconds that have elapsed since midnight, Jan. 1,1970.
var millsSince = d.getTime();

// age calculator

var today = new Date();
var born = new Date("July 20, 2001");
var bday = today - born; 