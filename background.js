var onOff = true;
var min = '';
var max = 'Rouge';
var current = min;

chrome.browserAction.onClicked.addListener(function(tab) {
	if(onOff)
	{
		onOff = false;
		changeIcon(onOff);
		runTest();	
	}else{
		onOff = true;
		changeIcon(onOff);
	}
});

function changeIcon(value){
	if(value){
		current	= min;
	}else{
		current = max;
	}
	chrome.browserAction.setIcon({path:"icon" + current + ".png"});
}

function runTest() {
	chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='red'"});
	chrome.tabs.executeScript(null, {file: "qunit-runner.js"});
}

chrome.browserAction.onClicked.addListener(updateIcon);