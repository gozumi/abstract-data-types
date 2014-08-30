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


	it('should npt be empty if at least 1 item is in the list');


	it('should add an item to an empty list and have size 1');


	it('should add an item to a list of size \'n\' and have size \'n + 1\'');


	it('should add an item to the correct position in the list');


	it('should thow an error if asked to remove an item that does not exist');


	it('should return the correct item when get() is called with an index that exists');


	it('should throw an error when get() is called with an index that does not exist');


	it('should return the correct size of the list');


});