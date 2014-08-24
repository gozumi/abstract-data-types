var chai = require('chai');
var Queue = require('../adt-queue');

chai.should();

describe('adt-queue', function() {

	it('should instantiate an empty queue');

	it('should not be empty when an item is added');

	it('should be empty when all the items in the queue have been dequeued');

	it('should return the correct front item of the queue');

	it ('should return the correct number of items in the queue');


	describe("edge conditions", function() {
		// The philosphy used with edge conditions is to return 'undefined'
		// where this makes sense and raise an error in other cases

		it('should return "undefined" if front() is called on an empty queue');

		it('should return "undefined" if dequeue is called on an empty queue');

	});

});