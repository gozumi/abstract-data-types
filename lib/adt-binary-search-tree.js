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
BinarySearchTree.prototype.getLeftTree = BinaryTree.prototype.getLeftTree;
BinarySearchTree.prototype.constructor = BinarySearchTree;


/*---------------------------------------------------

	This method inserts an item into the search tree

---------------------------------------------------*/
BinarySearchTree.prototype.insert = function(item) {

	if (typeof item == 'object' && !item.key) {
		throw new Error('adt-binary-search-tree.insert(): Tried to insert an object without a key');
	}

	if (this.isEmpty()) {
		SuperClass.prototype.setRootItem.call(this, item);
	} else if (utlis.lessThan(item, this.getRootItem())) {

	}

};


/*---------------------------------------------------

	Return thd module

---------------------------------------------------*/
module.exports = BinarySearchTree;