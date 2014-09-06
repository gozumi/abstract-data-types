/* jshint expr: true */

var adt = require('../index'),
	chai = require('chai'),
	expect = chai.expect,
	utils = require('../lib/adt-binary-search-tree/utils');

chai.should();


describe('adt-binary-search-tree', function () {


	var bst;

	beforeEach(function () {
		bst = adt.createBinarySearchTree();
	});


	describe('instantiation', function () {
			

		it('should instantiate an empty tree', function() {

			bst.isEmpty().should.be.true;

		});


		it('should instantiate an empty tree even if arguments are passed in', function() {


			bst = adt.createBinarySearchTree({item: 1});
			bst.isEmpty().should.be.true;

		});


		it('should have a constructor name of \'ADT_BinarySearchTree\'', function() {

			bst.constructor.name.should.equal('ADT_BinarySearchTree');

		});


	});


	describe('insert()', function () {
		

		describe('item validation', function () {


			it('should add strings to the tree', function() {

				var myString = 'some value';
				bst.insert(myString);

				bst.getRootItem().should.equal(myString);

			});


			it('should add numbers to the tree', function() {

				var myNumber = '5';
				bst.insert(myNumber);

				bst.getRootItem().should.equal(myNumber);

			});


			it('should insert objects with a \'key\' propperty', function() {

				var myObject = {my: 'object', key: 1};
				bst.insert(myObject);

				bst.getRootItem().should.equal(myObject);

			});


			it('should throw an error if given an object without a \'key\' property', function() {

				var myObject = {my: 'object'};

				(function() {
					bst.insert(myObject);
				}).should.throw(Error);

			});


			it('should throw an error if the item is an object with a \'key\' property, and the key property is an object', function() {

				var myObject = {my: 'object', key: {the: 'value'}};

				(function() {
					bst.insert(myObject);
				}).should.throw(Error);

			});


			it('should throw an error if the item is an object with a \'key\' property, and the key property is null', function() {

				var myObject = {my: 'object', key: null};

				(function() {
					bst.insert(myObject);
				}).should.throw(Error);

			});


		});


		describe('when the tree is empty', function () {


			it('should insert the item at the root of an empty tree', function() {

				var newItem = 'item';
				bst.insert(newItem);

				bst.getRootItem().should.equal(newItem);

			});


		});


		describe('when the right sub tree is empty', function () {


			it('should insert a greater item as the root of the right sub tree', function() {

				var rootItem = 'orange';
				bst.insert(rootItem);

				var newItem = 'pear';
				bst.insert(newItem);

				bst.getRightTree().getRootItem().should.equal(newItem);

			});
	

		});


		describe('when the left sub tree is empty', function () {
			
	
			it('should insert a lesser item as the root of the left sub tree', function() {

				var rootItem = 'pear';
				bst.insert(rootItem);

				var newItem = 'apple';
				bst.insert(newItem);

				bst.getLeftTree().getRootItem().should.equal(newItem);

			});
	

		});


		describe('when perfectly balanced data is given', function () {
			
	
			it('should create a perfectly balanced tree', function() {

				var data = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];

				for (var i = 0; i < data.length; i++) {
					bst.insert(data[i]);
				}


				bst.getRootItem().should.equal(8);
				bst.getLeftTree().getRootItem().should.equal(4);
				bst.getRightTree().getRootItem().should.equal(12);
				bst.getLeftTree()
					.getLeftTree()
					.getRootItem().should.equal(2);
				bst.getLeftTree()
					.getRightTree()
					.getRootItem().should.equal(6);
				bst.getLeftTree()
					.getLeftTree()
					.getLeftTree()
					.getRootItem().should.equal(1);
				bst.getLeftTree()
					.getLeftTree()
					.getRightTree()
					.getRootItem().should.equal(3);
				bst.getLeftTree()
					.getRightTree()
					.getLeftTree()
					.getRootItem().should.equal(5);
				bst.getLeftTree()
					.getRightTree()
					.getRightTree()
					.getRootItem().should.equal(7);
				bst.getRightTree()
					.getLeftTree()
					.getRootItem().should.equal(10);
				bst.getRightTree()
					.getRightTree()
					.getRootItem().should.equal(14);
				bst.getRightTree()
					.getLeftTree()
					.getLeftTree()
					.getRootItem().should.equal(9);
				bst.getRightTree()
					.getLeftTree()
					.getRightTree()
					.getRootItem().should.equal(11);
				bst.getRightTree()
					.getRightTree()
					.getLeftTree()
					.getRootItem().should.equal(13);
				bst.getRightTree()
					.getRightTree()
					.getRightTree()
					.getRootItem().should.equal(15);

			});
	

		});


		describe('when items are inserted', function () {


			it('all sub trees should be of type ADT_BinarySearchTree', function() {

				var data = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];

				for (var i = 0; i < data.length; i++) {
					bst.insert(data[i]);
				}


				bst.getLeftTree().constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getLeftTree().constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getRightTree().constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getLeftTree()
					.getLeftTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getLeftTree()
					.getRightTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getLeftTree()
					.getLeftTree()
					.getLeftTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getLeftTree()
					.getLeftTree()
					.getRightTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getLeftTree()
					.getRightTree()
					.getLeftTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getLeftTree()
					.getRightTree()
					.getRightTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getRightTree()
					.getLeftTree()
					.getRootItem().should.equal(10);
				bst.getRightTree()
					.getRightTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getRightTree()
					.getLeftTree()
					.getLeftTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getRightTree()
					.getLeftTree()
					.getRightTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getRightTree()
					.getRightTree()
					.getLeftTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');
				bst.getRightTree()
					.getRightTree()
					.getRightTree()
					.constructor.name.should.equal('ADT_BinarySearchTree');

			});

			
		});


		describe('when the item already exists in the tree', function () {
			

			it('should throw an error', function() {

				var item = 'value';

				bst.insert(item);
				(function() {
					bst.insert(item);
				}).should.throw(Error);

			});


		});


	});


	describe('retrieve()', function () {
		

		describe('when the tree is empty', function () {


			it('should return null', function() {

				expect(bst.retrieve(4)).to.be.null;

			});

			
		});


		describe('when tree has a single node', function () {

			var item = {
					key: 10,
					data: [1, 2, 3]
			};

			beforeEach(function () {
				bst.insert(item);
			});


			it('should return the item when the key is at the root', function() {

				bst.retrieve(10).should.equal(item);

			});


			it('should return null when the item is not at the root', function() {

				expect(bst.retrieve(4)).to.be.null;

			});

					
		});


		describe('when the tree has many arbitrary nodes', function () {
			

			var item22 = {key: 22, data: [1, 2, 3]},
				item9  = {key: 9, data: [1, 2, 3]},
				item14 = {key: 14, data: [1, 2, 3]},
				item11 = {key: 11, data: [1, 2, 3]},
				item26 = {key: 26, data: [1, 2, 3]},
				item5  = {key: 5, data: [1, 2, 3]},
				item30 = {key: 30, data: [1, 2, 3]};

			beforeEach(function () {

				var data = [16, 8, 24, 4, 12, 20, 28, 2, 6, 10, item14, 18, item22, item26, item30, 1, 3, item5, 7, item9, item11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];

				for (var i = 0; i < data.length; i++) {
					bst.insert(data[i]);
				}
			});


			it('should return the correct item if the key exists', function() {

				bst.retrieve(22).should.equal(item22);
				bst.retrieve(9).should.equal(item9);
				bst.retrieve(14).should.equal(item14);
				bst.retrieve(11).should.equal(item11);
				bst.retrieve(26).should.equal(item26);
				bst.retrieve(5).should.equal(item5);
				bst.retrieve(30).should.equal(item30);

			});


			it('should return null when the key does not exist and is geater than any other key', function() {

				expect(bst.retrieve(222)).to.be.null;

			});


			it('should return null when the key does not exist and is less than the greatest key value', function() {

				expect(bst.retrieve(parseFloat('27.5'))).to.be.null;

			});


		});


	});


	describe('delete()', function () {
		

		it('should thow an error if the tree is empty', function() {

			var key = 'orange';
			(function() {
				bst.delete(key);
			}).should.throw(Error);
		});


		describe('when the tree has a single node', function () {


			it('should leave the tree empty when the item is at the root', function() {

				var key = 'orange';
				bst.insert(key);

				bst.delete(key).isEmpty().should.be.true;

			});


			it('should throw an error when the item is not at the root', function() {

				var key = 'orange';
				bst.insert(key);

				(function() {
					bst.delete('apple');
				}).should.throw(Error);

			});

					
		});


		describe('when the tree has many arbitrary nodes', function () {
			
			
			beforeEach(function () {
				var data = [16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14, 18, 22, 26, 30, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];

				for (var i = 0; i < data.length; i++) {
					bst.insert(data[i]);
				}
			});


			it('should remove the item from the tree', function() {

				bst.retrieve(24).should.equal(24);
				bst.delete(24);
				expect(bst.retrieve(24)).to.be.null;
				bst.retrieve(12).should.equal(12);
				bst.delete(12);
				expect(bst.retrieve(12)).to.be.null;
				bst.retrieve(8).should.equal(8);
				bst.delete(8);
				expect(bst.retrieve(8)).to.be.null;
				bst.retrieve(10).should.equal(10);
				bst.delete(10);
				expect(bst.retrieve(10)).to.be.null;
				bst.retrieve(16).should.equal(16);
				bst.delete(16);
				expect(bst.retrieve(16)).to.be.null;

			});


			it('should leave the tree as a valid search tree', function() {

				utils.isValid(bst).should.be.true;

				bst.delete(16);
				bst.delete(10);
				bst.delete(8);
				bst.delete(24);

				utils.isValid(bst).should.be.true;

			});


			it('should throw an error when the item is not in the tree', function() {

				(function() {
					bst.delete(parseFloat('27.5'));
				}).should.throw(Error);

			});


		});


	});


	describe('getRootItem()', function () {


		beforeEach(function () {
			var data = [16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14, 18, 22, 26, 30, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];

			for (var i = 0; i < data.length; i++) {
				bst.insert(data[i]);
			}
		});


		it('should return the item at the root of the tree', function() {

			bst.getRootItem().should.equal(16);

		});


		it('should throw an error if the tree is empty', function() {

			// make sure the tree is empty
			var emptyTree = adt.createBinarySearchTree();

			(function() {
				emptyTree.getRootItem();
			}).should.throw(Error);

		});

		
	});


	describe('getLeftTree()', function () {


		it('should return the left sub tree', function() {

			var data = [16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14, 18, 22, 26, 30, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];

			for (var i = 0; i < data.length; i++) {
				bst.insert(data[i]);
			}

			bst.getLeftTree().getRootItem().should.equal(8);
			bst.getLeftTree().getLeftTree().getRootItem().should.equal(4);
			bst.getLeftTree().getLeftTree().getLeftTree().getRootItem().should.equal(2);
			bst.getLeftTree().getLeftTree().getLeftTree().getLeftTree().getRootItem().should.equal(1);

		});


		it('should throw an error if the tree is empty', function() {

			(function() {
				bst.getLeftTree();
			}).should.throw(Error);

		});


	});


	describe('getRightTree()', function () {


		it('should return the right sub tree', function() {

			var data = [16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14, 18, 22, 26, 30, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];

			for (var i = 0; i < data.length; i++) {
				bst.insert(data[i]);
			}

			bst.getRightTree().getRootItem().should.equal(24);
			bst.getRightTree().getRightTree().getRootItem().should.equal(28);
			bst.getRightTree().getRightTree().getRightTree().getRootItem().should.equal(30);
			bst.getRightTree().getRightTree().getRightTree().getRightTree().getRootItem().should.equal(31);

		});


		it('should throw an error if the tree is empty', function() {

			(function() {
				bst.getRightTree();
			}).should.throw(Error);

		});


	});


	describe('utils', function () {


		describe('isValid()', function () {


			beforeEach(function () {
				var data = [16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14, 18, 22, 26, 30, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];

				for (var i = 0; i < data.length; i++) {
					bst.insert(data[i]);
				}
			});


			it('should return true when the tree is valid', function() {

				utils.isValid(bst).should.be.true;

			});


			it('should return false when the tree is not valid', function () {
				
				// invalidate the tree
				bst.getRightTree().getLeftTree()._root.setItem(222);
				
				utils.isValid(bst).should.be.false;

			});

			
		});
		
	});

});