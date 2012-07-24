chrome.browserAction.onClicked.addListener(function(tab) {
	alert("Clicked!");
  	chrome.tabs.executeScript(null, {file: "qunit-runner.js"});

  	var min = '';
	var max = 'RED';
	var current = min;

	function updateIcon() {
		chrome.browserAction.setIcon({path:"icon" + current + ".png"});
		current++;

		if (current > max)
			current = min;
	}

	chrome.browserAction.onClicked.addListener(updateIcon);
	updateIcon();
});