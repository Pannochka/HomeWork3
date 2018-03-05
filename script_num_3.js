function sum1() {
	var num1 = +prompt("Введите число",'');
	var num2 = +prompt("и еще одно", '');
	var sum = num1 + num2;
	alert (sum);
}
//sum1();
function sum2() {
	var num1 = Number(prompt("Введите число", ''));
	var num2 = Number(prompt("и еще одно", ''));
	var sum = num1 + num2;
	alert (sum);
}
//sum2();
function sum3() {
	var num1 = parseFloat(prompt("Введите число", ''));
	var num2 = parseFloat(prompt("и еще одно", ''));
	var sum = num1 + num2;
	alert (sum);
}
//sum3();
