
//alert(qunit_div);
// ok, this is pretty weird, but i think it's necessary.
// the "qunit.js" which is loaded in manifest.js loads fine the first
// time a page is loaded. it also works if you completely clear the
// browser History manually. however, try as i might, i couldn't get it
// to work by clearing the History in code (see the "chrome.history.deleteAll" stuff
// in background.js - it works, apparently, but doesn't fist this issue).
// So here, I'm manually setting all the QUnit bumf that's normally dynamically
// inserted into:
//
// <div id="qunit">
//
// on page load. i'm setting the visibility:hidden to hide it from view. it's
// set to visibility:visible again in qunit-runner.js when it's toggled on
var qunit_div = '<div id="qunit" style="visibility: visible; "><h1 id="qunit-header"><a href="/?yyqq=true">Title</a> </h1><h2 id="qunit-banner" class="qunit-pass"></h2><div id="qunit-testrunner-toolbar"><input type="checkbox" id="qunit-filter-pass"><label for="qunit-filter-pass" title="Only show tests and assertons that fail. Stored in sessionStorage.">Hide passed tests</label><span><input id="qunit-urlconfig-noglobals" name="noglobals" type="checkbox" title="Enabling this will test if any test introduces new properties on the window object. Stored as query-strings."><label for="qunit-urlconfig-noglobals" title="Enabling this will test if any test introduces new properties on the window object. Stored as query-strings.">Check for Globals</label><input id="qunit-urlconfig-notrycatch" name="notrycatch" type="checkbox" title="Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."><label for="qunit-urlconfig-notrycatch" title="Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings.">No try-catch</label></span></div><h2 id="qunit-userAgent">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.57 Safari/537.1</h2><p id="qunit-testresult" class="result">Tests completed in 15 milliseconds.<br><span class="passed">0</span> tests of <span class="total">0</span> passed, <span class="failed">0</span> failed.</p><ol id="qunit-tests"></ol></div>';
$('body').append(qunit_div);