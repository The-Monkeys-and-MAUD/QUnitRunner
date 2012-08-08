
//alert("quinit-runner.js");

$('#qunit').css("visibility", "visible");

// This adds support for the extension that ui-tester.js:
// http://dsheiko.com/weblog/functional-testing-with-qunit/
// adds to QUnit
$.extend(window, {
    testNodes : function (queue) {
        var assertions =  {
            exists: function () {
                return this.length;
            },
            visible: function () {
                return this.is(":visible");
            },
            hidden: function () {
                return this.is(":hidden");
            },
            checked: function () {
                return this.is(":checked");
            }
        };
        $.each(queue, function (inx, request) {
            var node = $(request.node);
            //alert(request.assert);
            //alert(request.msg);
            //alert(assertions[request.assert].call(node));
            ok(assertions[request.assert].call(node), request.msg);
        });
    }
});


eval($('.ui-tester').text());

//alert($('.ui-tester'));

/*Create a dom injector for div fixtures / iframe*/