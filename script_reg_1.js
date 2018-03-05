var forTesting = "8 пингвинов и 9 карасей.";

function isFirstNum(str) {
    str.search(/^\d/) == 0 ? alert("Yes") : alert("No");
}

isFirstNum(forTesting);
