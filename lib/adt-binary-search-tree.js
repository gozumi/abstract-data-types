/*
	Binary Tree implementation class
*/

// Load the super class
var BinaryTree = require('./adt-binary-tree'),
	SuperClass = BinaryTree;



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
BinarySearchTree.prototype.constructor = BinarySearchTree;


/*---------------------------------------------------

	This method inserts an item into the search tree

---------------------------------------------------*/
BinarySearchTree.prototype.insert = function(item) {

	if (this.isEmpty()) {
		SuperClass.prototype.setRootItem.call(this, item);
	}

};


/*---------------------------------------------------

	Return thd module

---------------------------------------------------*/
module.exports = BinarySearchTree;