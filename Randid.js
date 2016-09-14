var randid = {
	// Create a new random ID, using optional additional randomizer
	create: function newID(element = false) {
		var randidString = "" + Date.now() + Math.random();
		if (element) {
			randidString += element;
		}
		return randidString;
	},

	store: function store(identifier, overwrite = false) {
		if (localStorage.randid) {
			if (overwrite) {
				localStorage.randid = identifier;
			}
		} else {
			localStorage.randid = identifier;
		}
	},

	get: function get() {
		if (localStorage.randid) {
			return localStorage.randid;
		}
	},

	clear: function clear() {
		if (localStorage.randid) {
			localStorage.removeItem('randid');
		}
	}
};
