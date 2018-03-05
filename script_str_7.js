function truncate(str, maxlength) {
	var str1;
	
	(str.length < maxlength) ? str1 = str:
			str1 = str.slice(0, maxlength-3)+"...";
	return str1;
}
