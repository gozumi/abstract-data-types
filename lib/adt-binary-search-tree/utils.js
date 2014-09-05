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

	if (typeof item == 'object' && !item.key) {
		throw new Error('adt-binary-search-tree utils.getKey(): item has no key');
	}

	if (typeof item == 'object' && typeof item.key == 'object') {
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
exports.getLeftmostItem =  function(tree) {

};


/*------------------------------------------------------------------------------

	Identifies if a tree node is a leaf

------------------------------------------------------------------------------*/
exports.isLeaf =  function(tree) {

	return tree.getLeftTree().isEmpty() && tree.getRightTree().isEmpty();

};