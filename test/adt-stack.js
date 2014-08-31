/* jshint expr: true */

var adt = require('../index'),
	chai = require('chai');

chai.should();


describe('adt-stack', function () {
	
	var s;

	beforeEach(function () {
		s = adt.createStack();
	});


	it('should create an empty stack', function () {

		s.isEmpty().should.be.true;
		
	});

	describe('push()', function () {
		

		it('should have a size of 1 when an item is pushed onto an empty stack', function() {

			s.push({item: 1});

			s.size().should.equal(1);

		});


		it('should have a size of n+1 when an item is pushed onto a stack of size n', function() {

			for (var i = 0; i < 10; i++) {
				var item = {};
				item['item-' + i] = i;
				s.push(item);
			}

			s.size().should.equal(10);

		});


		it('should push items to the top of the stack', function() {

			for (var i = 0; i < 10; i++) {
				var item = {};
				item['item-' + i] = i;
				s.push(item);
			}

			var topItem = {'item-top': 'top'};
			s.push(topItem);

			s.top().should.deep.equal(topItem);

		});


	});


	describe('pop()', function () {
		

		it('should return the item at the top of the stack and remove it from the stack', function() {

			// create an arbitrary stack
			for (var i = 0; i < 10; i++) {
				var item = {};
				item['item-' + i] = i;
				s.push(item);
			}

			// push a specific item onto the stack
			var topItem = {'item-top': 'top'};
			s.push(topItem);

			// check the stack is the right size
			s.size().should.equal(11);
			// pop the stack and check the correct item is returned 
			s.pop().should.deep.equal(topItem);
			// check the stack is the correct size
			s.size().should.equal(10);


			// make sure topItem does not exist anywhere in the stack
			while (!s.isEmpty()) {
				s.pop().should.not.deep.equal(topItem);
			}

		});


		it('should throw an error if the stack is empty', function() {

			(function() {
				s.pop();
			}).should.throw(Error);

		});


	});


	describe('top()', function () {


		it('should return the item at the top of the stack and leave it on the stack', function() {

			// create an arbitrary stack
			for (var i = 0; i < 10; i++) {
				var item = {};
				item['item-' + i] = i;
				s.push(item);
			}

			// check the stack is the right size
			s.size().should.equal(10);

			// push a specific item onto the stack
			var topItem = {'item-top': 'top'};
			s.push(topItem);

			// check the stack is the right size
			s.size().should.equal(11);
			// pop the stack and check the correct item is returned 
			s.top().should.deep.equal(topItem);
			// check the stack is the correct size
			s.size().should.equal(11);

		});


		it('should throw an error if the stack is empty', function() {

			(function() {
				s.top();
			}).should.throw(Error);

		});

		
	});


	describe('chaining', function () {

		it('should allow chaining of the push method', function() {

			s.push({'item-1': 1}).push({'item-2': 2}).push({'item-3': 3});

			s.size().should.equal(3);

		});
		
	});


});