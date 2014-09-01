/*
	Binary Tree implementation class
*/
/*===================================================================

	The Tree Node constructor function

===================================================================*/
var TreeNode = function ADT_TreeNode(item) {

	// Define the _item property to store the data.
	Object.defineProperty(this, '_item', {
		value: item || null,
		writable: true,
		enumerable: false,
		configurable: false
	});

	// Define the _left property to store the left sub tree.
	Object.defineProperty(this, '_left', {
		value: new BinaryTree(),
		writable: true,
		enumerable: false,
		configurable: false
	});

	// Define the _right property to store the right sub tree.
	Object.defineProperty(this, '_right', {
		value: new BinaryTree(),
		writable: true,
		enumerable: false,
		configurable: false
	});

};


/*---------------------------------------------------

	This method returns the item in the tree node

---------------------------------------------------*/
TreeNode.prototype.getItem = function() {

	return this._item;

};


/*---------------------------------------------------

	This method returns the left tree in the tree node

---------------------------------------------------*/
TreeNode.prototype.getLeft = function() {

	return this._left;

};


/*---------------------------------------------------

	This method returns the Right tree in the tree node

---------------------------------------------------*/
TreeNode.prototype.getRight = function() {

	return this._right;

};



/*===================================================================

	The Binary Tree constructor function

===================================================================*/
var BinaryTree = function ADT_BinaryTree(arg) {

	// Define the _datastore property to store the data.
	// In this case the _datastore is an array
	Object.defineProperty(this, '_root', {
		value: null,
		writable: true,
		enumerable: false,
		configurable: false
	});

	// add a node to the tree if an argument has been
	// passed as a parameter
	if (arg) {
		this._root = new TreeNode(arg);
	}

};


/*---------------------------------------------------

	This method returns 'true' if the tree is empty
	and false otherwise

---------------------------------------------------*/
BinaryTree.prototype.isEmpty = function() {

	return this._root === null;

};


/*---------------------------------------------------

	This method returns the item at the root of the
	tree

---------------------------------------------------*/
BinaryTree.prototype.getRootItem = function() {

	if (this.isEmpty()) {
		throw new Error('adt-binary-tree.getRootItem(): Tried to get the root item of an empty tree');
	} else {

		return this._root.getItem();

	}

};


/*---------------------------------------------------

	This method sets the item at the root of the
	tree

---------------------------------------------------*/
BinaryTree.prototype.setRootItem = function(item) {

	if (this.isEmpty()) {

		this._root = new TreeNode(item);

	} else {

		return this._root.setItem(item);
	
	}

};


/*---------------------------------------------------

	This method returns the left sub tree

---------------------------------------------------*/
BinaryTree.prototype.getLeftTree = function() {

	if (this.isEmpty()) {
		throw new Error('adt-binary-tree.getLeftTree(): Tried to get the left tree of an empty tree');
	} else {

		return this._root.getLeft();

	}

};


/*---------------------------------------------------

	This method returns the right sub tree

---------------------------------------------------*/
BinaryTree.prototype.getRightTree = function() {

	if (this.isEmpty()) {
		throw new Error('adt-binary-tree.getLeftTree(): Tried to get the left tree of an empty tree');
	} else {

		return this._root.getRight();

	}

};


/*---------------------------------------------------

	This method makes a given tree the left sub tree 

---------------------------------------------------*/
BinaryTree.prototype.attachLeft = function(tree) {



} ;


/*---------------------------------------------------
	Return the module
---------------------------------------------------*/
module.exports = BinaryTree;