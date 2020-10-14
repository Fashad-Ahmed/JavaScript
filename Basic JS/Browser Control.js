var location = window.location.href;
var domain = window.location.hostname;
var path = window.location.pathname;
var anchor = window.location.hash;

var currentSite = window.location.hostname;
var destination = "http://" + currentSite + "/wow.html";
window.location.href = destination;

var currentSite = window.location.hostname;
var currentPath = window.location.pathname;
var destination = "http://" + currentSite + currentPath + "#humidifier";
window.location.href = destination;

window.location.assign("http://www.me.com");
window.location.assign("http://www.me.com/lojack.html#guarantee");
window.location.replace("http://www.me.com/lojack.html#guarantee");