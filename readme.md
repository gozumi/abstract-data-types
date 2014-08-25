<img src="logo.png" alt="Gozumi abstact data types" align="right">

adt-queue
=========

This module implememnts the abstract data type Queue. All the standard Queue operations have been implemented. These are:

- __create__	instatiates an empty queue
- __enqueue__	adds a new item to the back of the queue
- __dequeue__	returns the item at the front of the queue and removes it from the queue
- __front__		returns the item at the front of the queue
- __isEmpty__	determines whether the queue is empty and returns true if it is and false otherwise


installation
============

$ npm install adt-queue

Getting Satarted
================

The constructor can be added to your code using the require statement.

	var Queue = require('adt-queue');




Create
------

To create an empty queue simply instanitate and _adt-queue_ object.

	var q = new Queue();

Enqueue
-------

The _enqueue_ operation adds a new item to the back of the queue. To do this call the _enqueue_ method on a Queue instance passing it the data item you wish to add to the Queue.

	q.enqueue({data: 'item'});
