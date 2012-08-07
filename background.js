
var onOff = true;
var icon_off = 'Off';
var icon_on = 'On';
var current = icon_off;

function changeIcon(value) {

	"use strict";

	//alert("changeIcon(" + value + ")");
	if (value) {
		current	= icon_off;
	} else {
		current = icon_on;
	}
	//alert("icon" + current + ".png");
	chrome.browserAction.setIcon({path: "icon" + current + ".png"});
}

function runTest() {

	"use strict";

	//alert("runTest()");
	chrome.tabs.executeScript(null, {file: "qunit-runner.js"});
}

function hideTests() {

	"use strict";

	chrome.tabs.executeScript(null, {file: "qunit-hider.js"});
}

//setTimeout(hideTests(), 10000);

//chrome.tabs.executeScript(null, {file: "qunit.js"});
//chrome.browserAction.onClicked.addListener(changeIcon);


chrome.browserAction.onClicked.addListener(function (tab) {

	"use strict";

	// Do NOT forget that the method is ASYNCHRONOUS
	chrome.tabs.query({
		active: true,                              // Select active tabs
		windowId: chrome.windows.WINDOW_ID_CURRENT // In the current window
	}, function (array_of_Tabs) {
		// Since there can only be one active tab in one active window, 
		//  the array has only one element
		var tab = array_of_Tabs[0];
		// Example:
		var url = tab.url;
		// ... do something with url variable

		if (onOff) {

		//alert("onOff(): " + onOff);
			onOff = false;
			changeIcon(onOff);
			runTest();

		} else {

			//alert("onOff(): " + onOff);
			onOff = true;
			changeIcon(onOff);
			hideTests();
		}

		//chrome.history.deleteUrl({url: url}, function () {
		//	alert("Deleted " + url + " from history.");
		//});

		//chrome.history.deleteAll(function () {
		//	alert("Deleted everything from history.");
		//});
	});
});
