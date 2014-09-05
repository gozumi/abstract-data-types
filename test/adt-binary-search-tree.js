/* jshint expr: true */

var adt = require('../index'),
	chai = require('chai');

chai.should();


describe.only('adt-binary-search-tree', function () {


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
			

			it('should throw an error');


		});


	});


	describe('delete()', function () {
		

		it('should thow an error if the tree is empty');


		describe('when tree ha a single node', function () {


			it('should leave the tree empty when the item is at the root');


			it('should throw an error when the item is not at the root');

					
		});


		describe('when the tree has many arbitrary nodes', function () {
			

			it('should remove the item from the tree');


			it('should leave the tree as a valid search tree');


			it('should throw an error when the item is not at the root');


		});


	});


	describe('retrieve()', function () {
		

		describe('when the tree is empty', function () {


			it('should throw an error');

			
		});


		describe('when tree has a single node', function () {


			it('should return the item when the key is at the root');


			it('should return null when the item is not at the root');

					
		});


		describe('when the tree has many arbitrary nodes', function () {
			

			it('should return the item if the key exists');


			it('should return null if the key does not exists');


			it('should throw an error when the key does not exist');


		});


	});


	// describe('getRootItem()', function () {


	// 	it('should return the item at the root of the tree', function() {

	// 		var rootItem = {root: 'item'};
	// 		bst.insert(rootItem);

	// 		bst.getRootItem().should.deep.equal(rootItem);

	// 	});


	// 	it('should throw an error if the tree is empty', function() {

	// 		(function() {
	// 			bst.getRootItem();
	// 		}).should.throw(Error);

	// 	});

		
	// });


	// describe('getLeftTree()', function () {


	// 	it('should return the left sub tree', function() {

	// 		var rootItem = {root: 'item'};
	// 		bt.setRootItem(rootItem);

	// 		var rootItemLeft = {left: 'left'},
	// 			btLeft = new adt.createBinaryTree(rootItemLeft);
			
	// 		bt.attachLeft(btLeft);

	// 		bt.getLeftTree().getRootItem().should.deep.equal(rootItemLeft);

	// 	});


	// 	it('should throw an error if the tree is empty', function() {

	// 		(function() {
	// 			bt.getLeftTree();
	// 		}).should.throw(Error);

	// 	});


	// });


	// describe('getRightTree()', function () {


	// 	it('should return the right sub tree', function() {

	// 		var rootItem = {root: 'item'};
	// 		bt.setRootItem(rootItem);

	// 		var rootItemRight = {right: 'left'},
	// 			btRight = new adt.createBinaryTree(rootItemRight);
			
	// 		bt.attachRight(btRight);

	// 		bt.getRightTree().getRootItem().should.deep.equal(rootItemRight);

	// 	});


	// 	it('should throw an error if the tree is empty', function() {

	// 		(function() {
	// 			bt.getRightTree();
	// 		}).should.throw(Error);

	// 	});


	// });


});