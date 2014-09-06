/*------------------------------------------------------------------------------

	Extract and return the key from a data item.

	If the item is an object without a 'key' property, the method will throw an 
	error.

	If the item is an object with a 'key' property,	and the key property is an
	object, the method will throw an error.

	If the item is an object with a 'key' property,	and the key property is not 
	an object, the method will return this propert.

	If the item is not an object, the item is returned.

------------------------------------------------------------------------------*/
exports.getKey = function(item) {

	if (typeof item === null) {
		throw new Error('adt-binary-search-tree utils.getKey(): item is null');
	}

	if (typeof item == 'object' && !item.hasOwnProperty('key')) {
		throw new Error('adt-binary-search-tree utils.getKey(): item has no key');
	}

	if (typeof item == 'object' && item.key === null) {
		throw new Error('adt-binary-search-tree utils.getKey(): item is null');
	} else if (typeof item == 'object' && typeof item.key == 'object') {
		throw new Error('adt-binary-search-tree utils.getKey(): item.key is an object');
	} else if (typeof item == 'object') {
		return item.key;
	} else {
		return item;
	}

};


/*------------------------------------------------------------------------------

	This function returns the leftmost item in a tree

------------------------------------------------------------------------------*/
exports.getLeftMostItem = function _getLeftMostItem(tree) {
	if (tree.getLeftTree().isEmpty()) {
		return tree.getRootItem();
	} else {
		return _getLeftMostItem(tree.getLeftTree());
	}
};


/*------------------------------------------------------------------------------

	This deletes the leftmost item from a tree

------------------------------------------------------------------------------*/
exports.deleteLeftMost = function _deleteLeftMost(tree) {

	if (tree.getLeftTree().isEmpty()) {
		return tree.getRightTree();
	} else {
		tree._root.setLeft(_deleteLeftMost(tree.getLeftTree()));
		return tree;
	}
};


/*------------------------------------------------------------------------------

	Identifies if a tree node is a leaf

------------------------------------------------------------------------------*/
exports.isLeaf =  function(tree) {

	return tree.getLeftTree().isEmpty() && tree.getRightTree().isEmpty();

};