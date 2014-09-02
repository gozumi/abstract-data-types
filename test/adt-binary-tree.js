/* jshint expr: true */

var adt = require('../index'),
	chai = require('chai');

chai.should();


describe.only('adt-binary-tree', function () {
	
	
	var bt;

	beforeEach(function () {
		bt = adt.createBinaryTree();
	});


	it('should instantiate an empty tree', function() {

		bt.isEmpty().should.be.true;

	});


	it('should instantiate a one node tree', function() {

		var item = {item: 1};
			btWithItem = adt.createBinaryTree(item);

		btWithItem.getRootItem().should.deep.equal(item);
		btWithItem.getLeftTree().isEmpty().should.be.true;
		btWithItem.getRightTree().isEmpty().should.be.true;

	});


	describe('getRootItem()', function () {


		it('should return the item at the root of the tree', function() {

			var rootItem = {root: 'item'};
			bt.setRootItem(rootItem);

			bt.getRootItem().should.deep.equal(rootItem);

		});


		it('should throw an error if the tree is empty', function() {

			(function() {
				bt.getRootItem();
			}).should.throw(Error);

		});

		
	});


	describe('setRootItem()', function () {
		

		it('should set the root item of an empty tree', function () {
		
			var rootItem = {root: 'item'};
			bt.setRootItem(rootItem);
			bt.getRootItem().should.deep.equal(rootItem);
		
		});

 
 		describe('when used on an empty tree', function () {
 			

			it('should leave the tree with an empty left tree', function() {

				var rootItem = {root: 'item'};
				bt.setRootItem(rootItem);
				bt.getLeftTree().isEmpty().should.be.true;

			});


			it('should leave the tree with an empty right tree', function() {

				var rootItem = {root: 'item'};
				bt.setRootItem(rootItem);
				bt.getRightTree().isEmpty().should.be.true;

			});


 		});


 		describe('when used on a non empty tree', function () {
 			
			var rootItem = {root: 'item'},
				leftItem = {left: 'item'},
				rightItem = {right: 'item'},
				btNonEmpty;

			beforeEach(function () {
 				var btLeft = adt.createBinaryTree(leftItem),
 					btRight = adt.createBinaryTree(rightItem);

 				btNonEmpty = adt.createBinaryTree(rootItem);

 				btNonEmpty.attachLeft(btLeft);
 				btNonEmpty.attachRight(btRight);

			});


			it('should leave the left tree unchanged', function() {

				var newRootItem = {newRoot: 'item'};
				btNonEmpty.setRootItem(newRootItem);

				btNonEmpty.getLeftTree().getRootItem().should.deep.equal(leftItem);

			});


			it('should leave the right tree unchanged', function() {

				var newRootItem = {newRoot: 'item'};
				btNonEmpty.setRootItem(newRootItem);

				btNonEmpty.getRightTree().getRootItem().should.deep.equal(rightItem);

			});


 		});


	});


	describe('getLeftTree()', function () {


		it('should return the left sub tree', function() {

			var rootItem = {root: 'item'};
			bt.setRootItem(rootItem);

			var rootItemLeft = {left: 'left'},
				btLeft = new adt.createBinaryTree(rootItemLeft);
			
			bt.attachLeft(btLeft);

			bt.getLeftTree().getRootItem().should.deep.equal(rootItemLeft);

		});


		it('should throw an error if the tree is empty', function() {

			(function() {
				bt.getLeftTree();
			}).should.throw(Error);

		});


	});


	describe('getRightTree()', function () {


		it('should return the right sub tree', function() {

			var rootItem = {root: 'item'};
			bt.setRootItem(rootItem);

			var rootItemRight = {right: 'left'},
				btRight = new adt.createBinaryTree(rootItemRight);
			
			bt.attachRight(btRight);

			bt.getRightTree().getRootItem().should.deep.equal(rootItemRight);

		});


		it('should throw an error if the tree is empty', function() {

			(function() {
				bt.getRightTree();
			}).should.throw(Error);

		});


	});


	describe('attachLeft()', function () {


		it('should throw an error if the item passed is not a tree', function () {

			var rootItem = {root: 'item'};
			bt.setRootItem(rootItem);

			(function() {
				bt.attachLeft({});
			}).should.throw(Error);

		});


		it('should throw an error if the tree is empty', function() {

			(function() {
				var rootItemLeft = {left: 'left'},
					btLeft = new adt.createBinaryTree(rootItemLeft);
			
				bt.attachLeft(btLeft);
			}).should.throw(Error);

		});


		describe('when given an item', function () {
			

			it('should add the item to the tree as a single node left sub tree', function() {



			});


			it('should replace the original left sub tree');


		});


		describe('when given an ADT_Binary_Tree', function () {
			

			it('should add the given tree to the tree as a the left sub tree');


			it('should replace the original left sub tree');


		});


	});


	describe('attachRight()', function () {


		it('should throw an error if the item passed is not a tree', function () {

			var rootItem = {root: 'item'};
			bt.setRootItem(rootItem);

			(function() {
				bt.attachRight({});
			}).should.throw(Error);

		});


		it('should throw an error if the tree is empty', function() {

			(function() {
				var rootItemRight = {right: 'right'},
					btRight = new adt.createBinaryTree(rootItemRight);
			
				bt.attachRight(btRight);
			}).should.throw(Error);

		});


		describe('when given an item', function () {
			

			it('should add the item to the tree as a single node right sub tree');


			it('should replace the original right sub tree');


		});


		describe('when given an ADT_Binary_Tree', function () {
			

			it('should add the given tree to the tree as a the right sub tree');


			it('should replace the original right sub tree');


		});


	});


	describe('detachLeft()', function () {


		it('should return the left sub tree from the tree and return that sub tree');

		
	});


	describe('detachRight()', function () {


		it('should return the right sub tree from the tree and return that sub tree');

		
	});


});