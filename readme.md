<img src="logo.png" alt="Gozumi abstract data types" align="right">

adt-queue
=========

This module implements the abstract data type _Queue_. All the standard Queue operations have been implemented. These are:

- __create__	instantiates an empty queue
- __enqueue__	adds a new item to the back of the queue
- __dequeue__	returns the item at the front of the queue and removes it from the queue
- __front__		returns the item at the front of the queue
- __isEmpty__	determines whether the queue is empty and returns true if it is and false otherwise


Installation
============

$ npm install adt-queue

Getting Satarted
================

The constructor can be added to your code using the require statement.

	var Queue = require('adt-queue');




Create
------

To create an empty queue simply instantiates and _adt-queue_ object.

	var q = new Queue();


Enqueue
-------

The _enqueue_ operation adds a new item to the back of the queue. To do this call the _enqueue_ method on a Queue instance passing it the data item you wish to add to the Queue.

	q.enqueue({data: 'item'});


Dequeue
-------

The _dequeue_ method returns the item at the front of the queue and removes that item fromt the queue. To do this call _dequeue_ on a queue object.

	var frontItem = q.dequeue();

If _dequeue_ is called on n empty queue, the following error is thrown.

	new Error('adt-queue.dequeue(): Tried to dequeue an empty queue!');


Front
-----

The _front_ method returns the item at the front of the queue, but unlike _dequeue_ it does not remove it from the queue.

	var frontItem = q.front();

If _front_ is called on an empty queue, the following error is thrown.

	new Error('adt-queue.front(): Tried to get the front of an empty queue!');


IsEmpty
-------

The _isEmpty_ method is a boolean function that, when called on a queue, returns _true_ if the queue is empty and false otherwise.

	q.isEmpty();

