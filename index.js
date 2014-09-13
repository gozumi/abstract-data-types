/*
	This module acts as a factory for the creation of instances
	of each of the abstract data types
*/

exports.createQueue = function() {

	var Queue = require('./lib/adt-queue');

	return new Queue(arguments);

};

exports.createLinkedList = function() {

	var LinkedList = require('./lib/adt-linked-list');

	return new LinkedList(arguments);

};

exports.createStack = function() {

	var Stack = require('./lib/adt-stack');

	return new Stack(arguments);

};

exports.createBinaryTree = function() {

	var BinaryTree = require('./lib/adt-binary-tree');

	if (arguments.length > 0) {
		return new BinaryTree(arguments[0]);
	} else {
		return new BinaryTree();
	}

};

exports.createBinarySearchTree = function() {

	var BinarySearchTree = require('./lib/adt-binary-search-tree');

	return new BinarySearchTree();

};

exports.createGraph = function() {

	var Graph = require('./lib/adt-graph');

	return new Graph();

};

exports.createHashTable = function() {

	// TODO: This functionality has yet to be implemented

};

exports.createHeap = function() {

	// TODO: This functionality has yet to be implemented

};



