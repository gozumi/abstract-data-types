/*
	Binary Tree implementation class
*/

// Load the super class
var BinaryTree = require('../adt-binary-tree'),
	SuperClass = BinaryTree;

// Load the utility module
var utils = require('./utils');



/*===================================================================

	The Binary Search Tree constructor function

===================================================================*/
var BinarySearchTree = function ADT_BinarySearchTree() {

	// run the constructor of the super class
	SuperClass.call(this);

};


/*---------------------------------------------------

	Inherit specific methods from BinaryTree

---------------------------------------------------*/
BinarySearchTree.prototype.isEmpty  = BinaryTree.prototype.isEmpty;
BinarySearchTree.prototype.getRootItem = BinaryTree.prototype.getRootItem;
BinarySearchTree.prototype.getLeftTree = BinaryTree.prototype.getLeftTree;
BinarySearchTree.prototype.getRightTree = BinaryTree.prototype.getRightTree;
BinarySearchTree.prototype.constructor = BinarySearchTree;


/*---------------------------------------------------

	This method inserts an item into the search tree

---------------------------------------------------*/
BinarySearchTree.prototype.insert = function(item) {

	var key;

	try {
		key = utils.getKey(item);

	} catch (error) {
		throw new Error('adt-binary-search-tree.insert(): failed to insert - ' + error.message);
	}

	var singleNodeTree;
	if (this.isEmpty()) {
		SuperClass.prototype.setRootItem.call(this, item);
	} else if (key > utils.getKey(this.getRootItem())) {
		this.getRightTree().insert(item);
	} else if (key < utils.getKey(this.getRootItem())) {
		this.getLeftTree().insert(item);
	}

};


/*---------------------------------------------------

	Return thd module

---------------------------------------------------*/
module.exports = BinarySearchTree;