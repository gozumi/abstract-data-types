/*
	Linked List implementation class
*/

/*---------------------------------------------------

	The Linked List constructor function

---------------------------------------------------*/
var LinkedList = function ADT_LinkedList() {

	// Define the _datastore property to store the data.
	// In this case the _datastore is an array
	Object.defineProperty(this, '_datastore', {
		value: [],
		writable: true,
		enumerable: false,
		configurable: false
	});

};


/*---------------------------------------------------

	This method returns 'true' if the list is empty
	and false otherwise

---------------------------------------------------*/
LinkedList.prototype.isEmpty = function() {

	return this._datastore.length === 0;

};


/*---------------------------------------------------

	This method returns adds an item to the list in
	a specific position.

---------------------------------------------------*/
LinkedList.prototype.add = function(index, item) {

	this._datastore.splice(index, 0, item);

	// return 'this' to allow chaining
	return this;

};


/*---------------------------------------------------

	This method returns the size of the list.

---------------------------------------------------*/
LinkedList.prototype.size = function() {

	return this._datastore.length;

};


/*---------------------------------------------------

	This method returns the item at a specfic
	position.

---------------------------------------------------*/
LinkedList.prototype.get = function(i) {

	// throw a error if the index is out of range
	if ((i > this._datastore.length -1) || (i < 0)) {

		throw new Error('adt-linked-list.get(): Tried to get an item outside the bounds of the list');

	}

	return this._datastore[i];

};


/*---------------------------------------------------

	This method removes an item at a specfic
	position.

---------------------------------------------------*/
LinkedList.prototype.remove = function(i) {

	// throw a error if the index is out of range
	if ((i > this._datastore.length -1) || (i < 0)) {

		throw new Error('adt-linked-list.remove(): Tried to remove an item outside the bounds of the list');
	
	} else {

		this._datastore.splice(i, 1);

	}

	return this;

};


/*---------------------------------------------------
	This method returns the string representation of 
	the list
---------------------------------------------------*/
LinkedList.prototype.toString = function() {
	return this._datastore.toString();
};


module.exports = LinkedList;