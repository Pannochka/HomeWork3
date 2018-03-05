var students = ["Илья","Greg", "Алина"];
var wordNotRus = [];

for (var i = 0; i < students.length; i++) {
	var marker = 0;                          //русская буква
	var str = students[i];
	for ( var j = 0; j < str.length; j++) {
		var letNum = str.charCodeAt(j);
		if (((letNum < "А".charCodeAt(0) || letNum > "я".charCodeAt(0)) &&
			letNum != "Ё".charCodeAt(0) && letNum != "ё".charCodeAt(0))) {
			marker = 1;                     //не русская буква
			break;
		}
	}
	wordNotRus.push(marker);
}
document.write(wordNotRus);