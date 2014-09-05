/*
	Binary Tree implementation class
*/
/*===================================================================

	The Tree Node constructor function

===================================================================*/
var TreeNode = function ADT_TreeNode(item, TreeConstructor) {

	// Define the _item property to store the data.
	Object.defineProperty(this, '_item', {
		value: item || null,
		writable: true,
		enumerable: false,
		configurable: false
	});

	// Define the _left property to store the left sub tree.
	Object.defineProperty(this, '_left', {
		value: new TreeConstructor(),
		writable: true,
		enumerable: false,
		configurable: false
	});

	// Define the _right property to store the right sub tree.
	Object.defineProperty(this, '_right', {
		value: new TreeConstructor(),
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

	This method sets the item in the tree node

---------------------------------------------------*/
TreeNode.prototype.setItem = function(item) {

	this._item = item;

};


/*---------------------------------------------------

	This method returns the left tree in the tree node

---------------------------------------------------*/
TreeNode.prototype.getLeft = function() {

	return this._left;

};

/*---------------------------------------------------

	This method sets the left tree in the tree node

---------------------------------------------------*/
TreeNode.prototype.setLeft = function(tree) {

	this._left = tree;

};


/*---------------------------------------------------

	This method returns the Right tree in the tree node

---------------------------------------------------*/
TreeNode.prototype.getRight = function() {

	return this._right;

};


/*---------------------------------------------------

	This method sets the left tree in the tree node

---------------------------------------------------*/
TreeNode.prototype.setRight = function(tree) {

	this._right = tree;

};


/*===================================================================

	The Binary Tree constructor function

===================================================================*/
var BinaryTree = function ADT_BinaryTree(arg) {

	// Define root of the tree.
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

		this._root = new TreeNode(item, this.constructor);

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

	This method sets the given 'param' as the left
	sub tree. If the param is an ADT_BinaryTree,
	this is set directly as the left sub tree. If the
	param is anything else, a new tree is created
	with param as the item at the root and this new
	tree is set as the left sub tree.

---------------------------------------------------*/
BinaryTree.prototype.attachLeft = function(param) {

	if (this.isEmpty()) {
		throw new Error('adt-binary-tree.attachLeft(): Attempt to attach a left sub tree to an empty tree');
	} else if (typeof param == 'object' && param.constructor.name == this.constructor.name) {
		this._root.setLeft(param);
	} else {
		// this._root.setLeft(new BinaryTree(param));
		this._root.setLeft(new this.constructor(param));
	}

};


/*---------------------------------------------------

	This method sets the given 'param' as the right
	sub tree. If the param is an ADT_BinaryTree,
	this is set directly as the right sub tree. If the
	param is anything else, a new tree is created
	with param as the item at the root and this new
	tree is set as the right sub tree.

---------------------------------------------------*/
BinaryTree.prototype.attachRight = function(param) {

	if (this.isEmpty()) {
		throw new Error('adt-binary-tree.attachRight(): Attempt to attach a right sub tree to an empty tree');
	} else if (typeof param == 'object' && param.constructor.name == this.constructor.name) {
		this._root.setRight(param);
	} else {
		// this._root.setRight(new BinaryTree(param));
		this._root.setRight(new this.constructor(param));
	}

};


/*---------------------------------------------------

	This method removes the left sub tree from the
	tree. It also returns this sub tree.

---------------------------------------------------*/
BinaryTree.prototype.detachLeft = function() {

	if (this.isEmpty()) {
		throw new Error('adt-binary-tree.detachLeft(): Attempt to detach the left sub tree of an empty tree');
	}
	
	return this._root.getLeft();

};


/*---------------------------------------------------

	This method removes the right sub tree from the
	tree. It also returns this sub tree.

---------------------------------------------------*/
BinaryTree.prototype.detachRight = function() {

	if (this.isEmpty()) {
		throw new Error('adt-binary-tree.detachRight(): Attempt to detach the right sub tree of an empty tree');
	}
	
	return this._root.getRight();

};


/*---------------------------------------------------
	Return the module
---------------------------------------------------*/
module.exports = BinaryTree;