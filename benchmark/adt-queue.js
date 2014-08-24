var Queue = require('../adt-queue');

suite('adt-queue', function() {

	var q = new Queue(),
		iterations = 1000;

	bench('1000 Enqueue opertions', function() {

		for (var i = 0; i < iterations; i++) {
			q.enqueue(i);
		}

	});

	bench('1000 dequeues opertions', function() {

		for (var i = 0; i < iterations; i++) {
			q.dequeue();
		}

	});

});