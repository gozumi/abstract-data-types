/* jshint expr: true */

var chai = require('chai');
var adt = require('../index');

chai.should();

describe('adt-linked-list', function () {

	var ll;

	beforeEach(function () {
		ll = adt.createLinkedList();
	});


	it('should instantiate an empty list', function() {

		ll.isEmpty().should.be.true;

	});


	it('should not be empty if at least 1 item is in the list', function() {

		ll.add(0, {item: 1});

		ll.isEmpty().should.be.false;

	});


	it('should add an item to an empty list and have size 1', function() {

		ll.add(0, {item: 1});

		ll.size().should.equal(1);

	});


	it('should leave the list empty when an item is added and then removed from an empty list', function () {

		ll.add(0, {item: 1});

		ll.remove(0);

		ll.isEmpty().should.be.true;

	});


	describe('operations on non-empty lists', function () {
		
		beforeEach(function () {
			
			// create a list containing 10 items
			for (var i = 0; i < 10 ; i++) {

				var item = {};
				item['item-' + i] = i;

				ll.add(i, item);
				
			}

		});


		it('should add an item to a list of size \'n\' and have size \'n + 1\'', function() {

			// get the size of the list
			var n = ll.size();

			// now add a new item to the list
			ll.add(n, {"item-n": n});

			ll.size().should.equal(n + 1);

		});


		it('should add an item to the correct position in the list', function() {

			var newItem = { newItem: 'new'};
			var pos = Math.floor(ll.size() / 2);
			
			ll.add(pos, newItem);

			ll.get(pos).should.deep.equal(newItem);

		});


		it('should thow an error if asked to remove an item that does not exist', function() {
			
			(function() {
				ll.remove(100);
			}).should.throw(Error);

		});


		it('should have the correct size after a remove opertion', function () {

			var size = ll.size();
			var pos = Math.floor(ll.size() / 2);

			ll.remove(pos);

			ll.size().should.equal(size - 1);
			
		});


		it('should leave the list empty after all items have been removed', function () {
			
			var size = ll.size();

			for (var i = 0; i < size; i++) {
			
				ll.remove(0);
			
			}

			ll.isEmpty().should.be.true;
			ll.size().should.equal(0);

		});


		it('should return the correct item when get() is called with an index that exists', function() {

			var pos = Math.floor(ll.size() / 2);

			var item = ll.get(pos);

			item.hasOwnProperty('item-' + pos).should.be.true;

		});


		it('should throw an error when get() is called with an index that does not exist', function() {

			var index = ll.size() * 2;

			(function() {
				ll.get(index);
			}).should.throw(Error);

		});


		it('should return the correct size of the list', function() {

			ll.size().should.equal(10);

		});


	});


});