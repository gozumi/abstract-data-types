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

	if (this.isEmpty()) {
		SuperClass.prototype.setRootItem.call(this, item);
	} else {

		var rootKey = utils.getKey(this.getRootItem());
		if (key > rootKey) {
			this.getRightTree().insert(item);
		} else if (key < rootKey) {
			this.getLeftTree().insert(item);
		} else if (key == rootKey) {
			throw new Error('adt-binary-search-tree.insert(): Tried to insert a key more than once');
		}

	}

};
/*---------------------------------------------------

	This method remove the item identified by 'key' 
	from the tree

---------------------------------------------------*/
BinarySearchTree.prototype.delete = function(key) {

	if (this.isEmpty()) {
		throw new Error('adt-binary-search-tree.delete(): The key is not in the tree');
	}

	var rootKey = utils.getKey(this.getRootItem());
	if (key == rootKey) {
		var deletedResultTree = utils.deleteNode(this);
		SuperClass.prototype.setRootItem.call(this, deletedResultTree.getRootItem());
		SuperClass.prototype.attachLeft.call(this, deletedResultTree.getLeftTree());
		SuperClass.prototype.attachRight.call(this, deletedResultTree.getRightTree());
	} else if (key < rootKey) {
		this.getLeftTree().delete(key);
	} else if (key > rootKey) {
		this.getRightTree().delete(key);
	}
};


/*---------------------------------------------------

	Return thd module

---------------------------------------------------*/
module.exports = BinarySearchTree;