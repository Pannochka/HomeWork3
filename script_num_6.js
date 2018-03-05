var randomArray = new Array(10);

function Random(minVar, maxVar) {
    return Math.floor(Math.random()*(maxVar - minVar + 1)) + minVar;
}

function numToRoundArr(arr, minVar, maxVar) {
	for ( var i = 0; i < arr.length; i++) {
		arr[i] = Random(minVar, maxVar);
	}
}
