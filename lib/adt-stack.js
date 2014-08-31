/*
	Stack implementation class
*/

/*---------------------------------------------------

	The Stack constructor function

---------------------------------------------------*/
var Stack = function() {

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

	This method returns 'true' if the stack is empty
	and false otherwise

---------------------------------------------------*/
Stack.prototype.isEmpty = function() {

	return this._datastore.length === 0;

};


/*---------------------------------------------------

	This allows an item to be spushed onto the top 
	of the stack

---------------------------------------------------*/
Stack.prototype.push = function(item) {

	this._datastore.push(item);

	return this;

};


/*---------------------------------------------------

	This method returns the item at the top of the
	stack and removes it from the stack.

---------------------------------------------------*/
Stack.prototype.pop = function() {

	if (this.isEmpty()) {

		throw new Error('adt-stack.pop(): Tried to pop an empty stack');

	} else {

		return this._datastore.splice(this._datastore.length - 1)[0];

	}

};


/*---------------------------------------------------

	This method returns the size of the stack.

---------------------------------------------------*/
Stack.prototype.size = function() {

	return this._datastore.length;

};


/*---------------------------------------------------

	This method returns the item at the top of the
	stack without removing it from the stack.

---------------------------------------------------*/
Stack.prototype.top = function() {

	if (this.isEmpty()) {

		throw new Error('adt-stack.top(): Tried to get the top of an empty stack');

	} else {

		return this._datastore[this._datastore.length - 1];

	}

};


module.exports = Stack;