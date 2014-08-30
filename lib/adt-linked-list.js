/*
	Linked List implementation class
*/

/*---------------------------------------------------

	The Linked List constructor function

---------------------------------------------------*/
var LinkedList = function() {

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







module.exports = LinkedList;