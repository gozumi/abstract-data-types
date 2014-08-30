/*
	Queue implementation class
*/

/*---------------------------------------------------
	The Queue constructor function
---------------------------------------------------*/
var Queue = function() {

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
	This method tests whether the queue is empty
	or not
---------------------------------------------------*/
Queue.prototype.isEmpty = function() {
	return this._datastore.length === 0;
};


/*---------------------------------------------------
	This method performs the standard ADT Queue
	enqueue operation. That is, it adds an item to
	the back of the queue.
---------------------------------------------------*/
Queue.prototype.enqueue = function(item) {
	this._datastore.push(item);

	return this;
};


/*---------------------------------------------------
	This method performs the standard ADT Queue
	dequeue operation. That is, it returns the item
	at the front of the queue and removes it from
	the queue.
---------------------------------------------------*/
Queue.prototype.dequeue = function(item) {
	if (this._datastore.length === 0) {
		throw new Error('adt-queue.dequeue(): Tried to dequeue an empty queue!');
	}

	return this._datastore.shift();
};


/*---------------------------------------------------
	This method returns the item at the front of the
	queue, but unlike the method 'dequeue', does not
	remove the item from the queue.
---------------------------------------------------*/
Queue.prototype.front = function(item) {
	if (this._datastore.length === 0) {
		throw new Error('adt-queue.front(): Tried to get the front of an empty queue!');
	}

	return this._datastore[0];
};


/*---------------------------------------------------
	This method returns the number of items in the
	queue
---------------------------------------------------*/
Queue.prototype.size = function(item) {
	return this._datastore.length;
};


/*---------------------------------------------------
	This method returns the string representation of 
	the queue
---------------------------------------------------*/
Queue.prototype.toString = function() {
	return this._datastore.toString();
};



/*---------------------------------------------------
	Return the module
---------------------------------------------------*/
module.exports = Queue;