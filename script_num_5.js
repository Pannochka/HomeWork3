function numToRoundArr(arr, method) {
	for ( var i = 0; i < arr.length; i++) {
		switch (method) {
			case "round":
				arr[i] = Math.round(arr[i]);
				break;
			case "ceil":
				arr[i] = Math.ceil(arr[i]);
				break;
			case "floor":
				arr[i] = Math.floor(arr[i]);
				break;
		}
	}
}
