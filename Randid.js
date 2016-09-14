var randid = {
	// Create a new random ID, using optional additional randomizer
	create: function newID(element = false) {
		var randidString = "" + Date.now() + Math.random();
		if (element) {
			randidString += element;
		}
		return randidString;
	},
};
