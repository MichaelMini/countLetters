var aString = "lighthouse in the house";


function countLetters(input) {
	var letterCounts = {};
	for ( var i = 0; i < input.length; i++ ) {

		var letter = input[i];

		if (letter === " ") {
			continue;
		}
		if (!letterCounts[letter]) {
			letterCounts[letter] = 0;
		}
		letterCounts[letter] += 1;


	}
	return letterCounts;
}

var result = countLetters(aString);

console.log("after function letterCounts :", result);

