var adt = require('../index');

suite('adt-stack', function() {


	bench('1000 push opertions', function() {

		var s = adt.createStack();

		for (var i = 0; i < 1000; i++) {
			s.push(i);
		}

	});


	bench('1000 push and 1000 pop opertions', function() {

		var s = adt.createStack();

		for (var i = 0; i < 1000; i++) {
			s.push(i);
		}

		for (i = 0; i < 1000; i++) {
			s.pop();
		}

	});

});