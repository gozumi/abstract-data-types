<img src="logo.png" alt="Gozumi abstract data types" align="right">

abstract-data-types
===================

The future of this module is that it will be able to return instances of the following abstract data types:

- __Queue__ _This is currently implemented_
- __Linked List__
- __Stack__
- __Binary Tree__
- __Binary Search Tree__
- __Graph__
- __Hash Table__
- __Heap__


Installation
============

	$ npm install abstract-data-types


Getting Started
================

The individual abstract data types are instantiated from constructors that exist as properties of the _abstract-data-types_ module. The module can be accessed as follows.

	var adt = require('abstract-data-types');


You can instantiate individual abstract data types like this.

	var q   = adt.createQueue();			// To create an empty Queue
	var ll  = adt.createLinkedList();		// To create an empty Linked List
	var s   = adt.createStack();			// To create an empty Stack
	var bt  = adt.createBinaryTree();		// To create an empty Queue
	var bst = adt.createBinarySearchTree();	// To create an empty Binary Search Tree
	var g   = adt.createGraph();			// To create an empty Queue
	var ht  = adt.createHashTable();		// To create an empty Queue
	var h   = adt.createHeap();				// To create an empty Queue



The rest of this document explains each of the operations that can be performed these abstract data type instances.




Queue
-----

This _Queue_ is implements all the standard Queue operations. These are:

- __enqueue__	adds a new item to the back of the queue
- __dequeue__	returns the item at the front of the queue and removes it from the queue
- __front__		returns the item at the front of the queue
- __isEmpty__	determines whether the queue is empty and returns true if it is and false otherwise




#### Enqueue

The _enqueue_ operation adds a new item to the back of the queue. To do this call the _enqueue_ method on a Queue instance passing it the data item you wish to add to the Queue.

	q.enqueue({data: 'item'});


#### Dequeue

The _dequeue_ method returns the item at the front of the queue and removes that item from the queue. To do this call _dequeue_ on a queue object.

	var frontItem = q.dequeue();

If _dequeue_ is called on an empty queue, the following error is thrown.

	new Error('adt-queue.dequeue(): Tried to dequeue an empty queue!');


#### Front


The _front_ method returns the item at the front of the queue, but unlike _dequeue_ it does not remove it from the queue.

	var frontItem = q.front();

If _front_ is called on an empty queue, the following error is thrown.

	new Error('adt-queue.front(): Tried to get the front of an empty queue!');


#### IsEmpty

The _isEmpty_ method is a boolean function that, when called on a queue, returns _true_ if the queue is empty and false otherwise.

	q.isEmpty();


Linked List
-----------

The _Linked List_ implements all of the standard Linked List functions. These are given below:

- __add__		adds a new item to the list at a specific position
- __remove__	removes an item from the list at a specific position
- __get__		returns the item at at a specific position in the list
-__size__		returns the number of items in the List
- __isEmpty__	determines whether the List is empty and returns true if it is and false otherwise


#### Add

The add method takes the item to be added to the list and the position that the item should be added in. If the position is less than or equal to 0, the item is added to the front of the list. If the position is greater than or equal to the size of the list, the item is added to the end of the list.
