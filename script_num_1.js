var randSimbol = ["Молоко", 77, 11, "Мед", -88];

function isNumuricArr(array) {
	function isNumeric(data) {
		return !isNaN(parseFloat(data)) && isFinite(data);
	}

	for (var i = 0; i < array.length; i++) {
		alert ((i + "-й элемент массива - " + array[i]) +
			(isNumeric(array[i]) ? " - это число" : " - это не число"));
	}
}

isNumuricArr(randSimbol);

