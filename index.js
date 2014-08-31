/*
	This module acts as a factory for the creation of instances
	of each of the abstract data types
*/

exports.createQueue = function() {

	var Queue = require('./lib/adt-queue');

	return new Queue();

};

exports.createLinkedList = function() {

	var LinkedList = require('./lib/adt-linked-list');

	return new LinkedList();

};

exports.createStack = function() {

	var Stack = require('./lib/adt-stack');

	return new Stack();

};

exports.createBinaryTree = function() {

	// TODO: This functionality has yet to be implemented

};

exports.createBinarySearchTree = function() {

	// TODO: This functionality has yet to be implemented

};

exports.createGraph = function() {

	// TODO: This functionality has yet to be implemented

};

exports.createHashTable = function() {

	// TODO: This functionality has yet to be implemented

};

exports.createHeap = function() {

	// TODO: This functionality has yet to be implemented

};



