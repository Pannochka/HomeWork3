var mySite = "http://crispwp.com/";
var patt = "http://";
var pos = -1;

function checkProtocol(str) {
	pos = str.indexOf(patt);
}

checkProtocol(mySite);
if (pos != -1) {
	alert("В названии сайта присутствует указание протокола 'http://'");
}
else {
	alert("В названии сайта НЕ присутствует указание протокола 'http://'");
}
