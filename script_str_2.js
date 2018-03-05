function compare10LenString(str) {
	var len = str.length;
	if ( len > 10 ) return 1;
}

var letter = prompt("Введите любое слово");
compare10LenString(letter) == 1 ? 
		document.write("В этом слове больше 10 символов ") :
		document.write("В этом слове меньше или равно 10 символов ");