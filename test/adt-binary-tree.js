/* jshint expr: true */

var adt = require('../index'),
	chai = require('chai');

chai.should();


describe.only('adt-binary-tree', function () {
	
	
	var bt;

	beforeEach(function () {
		bt = adt.creatBinaryTree();		
	});


	it('should instantiate an empty tree');


	it('should instantiate a one node tree');


	it('should instantiate a complete tree');


	describe('getRootItem()', function () {


		it('should return the item at the root of the tree');


		it('should throw an error if the tree is empty');

		
	});


	describe('getLeftTree()', function () {


		it('should return the left sub tree');

		
	});


	describe('gertRightTree()', function () {


		it('should return the right sub tree');

		
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