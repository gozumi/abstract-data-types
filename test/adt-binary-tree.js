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


	describe('getLeftTree()', function () {


		it('should return the left sub tree', function() {

			var rootItem = {root: 'item'};
			bt.setRootItem(rootItem);

			var btLeft = new adt.createBinaryTree({left: 'left'});
			bt.attachLeft(btLeft);

			bt.getLeftTree().should.deep.equal(rootItem);


		});


		it('should throw an error if the tree is empty');

		
	});


	describe('gertRightTree()', function () {


		it('should return the right sub tree');


		it('should throw an error if the tree is empty');

		
	});


	describe('attachLeft()', function () {

		describe('when given an item', function () {
			

			it('should add the item to the tree as a single node left sub tree');


			it('should replace the original left sub tree');


		});


		describe('when given an ADT_Binary_Tree', function () {
			

			it('should add the given tree to the tree as a the left sub tree');


			it('should replace the original left sub tree');


		});


	});


	describe('attachRight()', function () {

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