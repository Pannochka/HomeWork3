var strIn = "my-short-string";
var arrStrIn = strIn.split("-");
for (var i = 1; i < arrStrIn.length; i++) {
	arrStrIn[i] = arrStrIn[i].charAt(0).toUpperCase()+arrStrIn[i].slice(1);
}
var strOut = arrStrIn.join("");
