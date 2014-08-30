/* jshint expr: true */

var chai = require('chai');
var adt = require('../index');

chai.should();

describe('adt-queue', function() {
	var q,
		a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	beforeEach(function () {
		q = adt.createQueue();
	});


	describe('in normal conditions', function () {
		
		it('should instantiate an empty queue', function() {

			q.isEmpty().should.be.true;

		});


		it('should not be empty when an item is enqueued', function() {

			q.enqueue({some:'object'});
			q.isEmpty().should.be.false;

		});


		it('should be empty when an item is enqueued and then dequeued', function() {

			q.enqueue({some:'object'});

			q.dequeue();

			q.isEmpty().should.be.true;

		});



		it('should return the correct item when dequeued', function() {

			for (var i = 0; i < a.length; i++) {
				q.enqueue(a[i]);
			}

			for (i = 0; i < a.length; i++) {
				q.dequeue().should.equal(a[i]);
			}


		});


		it('should be empty when all the items in the queue have been dequeued', function() {

			q.isEmpty().should.be.true;

			for (var i = 0; i < a.length; i++) {
				q.enqueue(a[i]);
			}

			q.isEmpty().should.be.false;

			for (i = 0; i < a.length; i++) {
				q.dequeue();
			}

			q.isEmpty().should.be.true;

		});


		it('should return the correct front item of the queue', function() {

			for (var i = 0; i < a.length; i++) {
				q.enqueue(a[i]);
			}

			for (i = 0; i < a.length; i++) {
				q.front().should.equal(a[i]);
				q.dequeue();
			}

		});


		it('should return the correct number of items in the queue', function() {

			for (var i = 0; i < a.length; i++) {
				q.enqueue(a[i]);
			}

			q.size().should.equal(a.length);

		});


		it('should be possible to chain enqueue operations', function () {
			
			q.enqueue({item1: 1}).enqueue({item2: 2});

			q.size().should.equal(2);

		});


		describe('toString()', function () {
			
			it('should return the correct string repesentation of the queue', function() {

				for (var i = 0; i < a.length; i++) {
					q.enqueue(a[i]);
				}

				q.toString().should.equal(a.toString());

			});

		});

	
	});


	describe("in edge conditions", function() {

		it('should throw an error if dequeue is called on an empty queue', function() {

			q.isEmpty().should.be.true;

			(function(){
				q.dequeue();	
			}).should.throw(Error);

		});


		it('should throw an error if front() is called on an empty queue', function() {

			q.isEmpty().should.be.true;

			(function(){
				q.front();	
			}).should.throw(Error);

		});

	});

});