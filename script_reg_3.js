var tel = "8/927/31/10/765";
var sign = "-";
var result;

function replaceSign(str, sign) {
	return str.replace(/\//g, sign);
}

result = replaceSign(tel, sign);
document.write(result);
