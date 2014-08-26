var adt = require('../index');

suite('adt-queue', function() {


	bench('1000 Enqueue opertions', function() {

		var q = adt.createQueue();

		for (var i = 0; i < 1000; i++) {
			q.enqueue(i);
		}

	});

	bench('1000 enqueues and 1000 dequeues opertions', function() {

		var q = adt.createQueue();

		for (var i = 0; i < 1000; i++) {
			q.enqueue(i);
		}

		for (i = 0; i < 1000; i++) {
			q.dequeue();
		}

	});


});