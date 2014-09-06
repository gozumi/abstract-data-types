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
		this._deleteNode();
	} else if (key < rootKey) {
		this.getLeftTree().delete(key);
	} else if (key > rootKey) {
		this.getRightTree().delete(key);
	}

	return this;
};


/*------------------------------------------------------------------------------

	This function removes a node from the tree

------------------------------------------------------------------------------*/
BinarySearchTree.prototype.retrieve =  function(key) {

	if (this.isEmpty()) {
		return null;
	}

	var rootKey = utils.getKey(this.getRootItem());
	if (key < rootKey) {
		return this.getLeftTree().retrieve(key);
	} else if (key > rootKey) {
		return this.getRightTree().retrieve(key);
	} else {
		return this.getRootItem();
	}

};


/*------------------------------------------------------------------------------

	This function removes a node from the tree

------------------------------------------------------------------------------*/
BinarySearchTree.prototype._deleteNode =  function() {

	if (utils.isLeaf(this)) {
		this._root = null;
	} else if (!this.getLeftTree().isEmpty() && this.getRightTree().isEmpty()) {
		SuperClass.prototype.setRootItem.call(this, this.getLeftTree().getRootItem());
		SuperClass.prototype.attachLeft.call(this, this.getLeftTree().getLeftTree());
		SuperClass.prototype.attachRight.call(this, this.getLeftTree().getRightTree());
	} else if (!this.getRightTree().isEmpty() && this.getLeftTree().isEmpty()) {
		SuperClass.prototype.setRootItem.call(this, this.getRightTree().getRootItem());
		SuperClass.prototype.attachLeft.call(this, this.getRightTree().getLeftTree());
		SuperClass.prototype.attachRight.call(this, this.getRightTree().getRightTree());
	} else {
		var replacementItem = utils.getLeftMostItem(this.getRightTree());
		var newRight = utils.deleteLeftMost(this.getRightTree());

		SuperClass.prototype.setRootItem.call(this, replacementItem);
		SuperClass.prototype.attachRight.call(this, newRight);
	}

};


/*------------------------------------------------------------------------------

	Identifies if a tree node is a leaf

------------------------------------------------------------------------------*/
BinarySearchTree.prototype.isLeaf =  function() {

	return this.getLeftTree().isEmpty() && this.getRightTree().isEmpty();

};
/*---------------------------------------------------

	Return thd module

---------------------------------------------------*/
module.exports = BinarySearchTree;