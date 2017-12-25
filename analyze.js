function histOfTitles(listOfTitles){
	var words = [];
	var counts = [];
	for(var i = 0; i < listOfTitles.length; i++){

		//add the new word the the current mapping of words
		if(words.indexOf(listOfTitles[i]) == -1) {
			words.push(listOfTitles[i])
			counts[words.length-1]++;
		} else {

			//or you can just increment the current count of the word
			counts[words.indexof(listOfTitles[i])]++;
		}

		var returnObj = {
			"words": words,
			"counts":counts
		}

		return returnObj;


		


	}
}