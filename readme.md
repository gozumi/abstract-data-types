<img src="logo.png" alt="Gozumi abstract data types" align="right">

abstract-data-types
===================

The future of this module is that it will be able to return instances of the following abstract data types:

- __Queue__ _This is currently implemented_
- __Linked List__ _This is currently implemented_
- __Stack__ _This is currently implemented_
- __Binary Tree__ _This is currently implemented_
- __Binary Search Tree__
- __Graph__
- __Hash Table__
- __Heap__


Installation
============

	$ npm install abstract-data-types


Getting Started
================

The individual abstract data types are instantiated from factory functions that exist as properties of the _abstract-data-types_ module. The module can be accessed as follows.

	var adt = require('abstract-data-types');


The individual factory functions can be used to create instances of the abstract data types like this.

	var q   = adt.createQueue();            // To create an empty Queue
	var ll  = adt.createLinkedList();       // To create an empty Linked List
	var s   = adt.createStack();            // To create an empty Stack
	var bt  = adt.createBinaryTree();       // To create an empty Binary Tree
	var bst = adt.createBinarySearchTree(); // To create an empty Binary Search Tree
	var g   = adt.createGraph();            // To create an empty Graph
	var ht  = adt.createHashTable();        // To create an empty Hash Table
	var h   = adt.createHeap();             // To create an empty Heap



The rest of this document explains each of the operations that can be performed these abstract data type instances.




Queue
-----

This _Queue_ is implements all the standard Queue operations. These are:

- __enqueue__	adds a new item to the back of the queue
- __dequeue__	returns the item at the front of the queue and removes it from the queue
- __front__		returns the item at the front of the queue
- __size__		returns the number of items in the queue
- __isEmpty__	determines whether the queue is empty and returns true if it is and false otherwise




#### Enqueue

The _enqueue_ operation adds a new item to the back of the queue. To do this call the _enqueue_ method on a Queue instance passing it the data item you wish to add to the Queue.

	q.enqueue(item);


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
- __size__		returns the number of items in the List
- __isEmpty__	determines whether the List is empty and returns true if it is and false otherwise

The postion index starts from 0.


#### Add

The add method takes the item to be added to the list and the position that the item should be added in. If the position is less than or equal to 0, the item is added to the front of the list. If the position is greater than or equal to the size of the list, the item is added to the end of the list.

	ll.add(position, item);



#### Remove

The remove method removes the item at a specific position in the list. If the position requested is less than 0 or geater then or equal to the length of the list, an error is thrown.

	ll.remove(position);


#### Get

The get method returns the item at a specific position in the list. If the position requested is less than 0 or geater then or equal to the length of the list, an error is thrown.

	ll.get(position);


#### Size

The size method returns the number of items in the list.

	ll.size();


#### IsEmpty

The _isEmpty_ method is a boolean function that, when called on a list, returns _true_ if the list is empty and false otherwise.

	ll.isEmpty();


Stack
-----

The _Stack_ implements all of the standard Stack functions. These are given below:

- __push__		adds a new item to the top of the stack
- __pop__		returns the item at the top of the stack and removes it from the stack
- __top__		returns the item at the top of the stack and leaves it on the stack
- __size__		returns the number of items in the stack
- __isEmpty__	determines whether the stack is empty and returns true if it is and false otherwise



#### Push

The push method adds a new item to the top of the stack. It also returns the stack so that push opertations can be chained.

	s.push(item);



#### Pop

The pop method returns the item at the top of the stack and removed it from the stack.

	s.pop();


#### Top

The pop method returns the item at the top of the stack and leaves it on the stack.

	s.top();


#### Size

The size method returns the number of items in the stack.

	s.size();


#### IsEmpty

The _isEmpty_ method is a boolean function that, when called on a stack, returns _true_ if the stack is empty and false otherwise.

	s.isEmpty();



Binary Tree
-----------

The _Binary Tree_ in this module implements the standard methods of the Binary Tree abstract data type. These methods are:

- __isEmpty__       determines whether the tree is empty and returns true if it is and false otherwise
- __getRootItem__   returns the item at the root of the tree
- __setRootItem__   updates the item at the root of the tree
- __getLeftTree__   returns the left sub tree
- __getRightTree__  returns the Right sub tree
-__attachLeft__     attaches at tree or an item as the left sub tree
-__attachRight__    attaches at tree or an item as the right sub tree
-__detachLeft__     removes the left sub tree
-__detachRight__    removes the right sub tree


#### Creation

The factory function used to create a new _Binary Tree_ can be called in the following 2 ways:

- __By passing in no arguments__ - this will create an empty tree.
	
	var bt = adt.createBinaryTree();

- __By passing in and item__ - this will create a single node tree with the item at the root.

	var bt = adt.createBinaryTree(item);


#### Is Empty

The _isEmpty_ method is a boolean function that, when called on a tree, returns _true_ if the tree is empty and false otherwise.

	bt.isEmpty();


#### Get Root Item

This method returns the item at the root of the tree and is called as follows.

	bt.getRootItem();

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-tree.getRootItem(): Tried to get the root item of an empty tree');



#### Set Root Item

This method puts an item at the root of the tree and is called as follows.

	bt.setRootItem(item);


#### Get Left Tree

This method returns the left sub tree.

	bt.getLeftTree();

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-tree.getLeftTree(): Tried to get the left tree of an empty tree');


	
#### Get Right Tree

This method returns the right sub tree.

	bt.getRightTree();

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-tree.getLeftTree(): Tried to get the left tree of an empty tree');

	
#### Attach Left Tree

This method can be called by either passing in another _Binary Tree_, or by passing in an item that is not a _Binary Tree_. 

If a _Binary Tree_ is passed in, that tree will be attached as the left sub tree. The method is called like this.

	bt.attachLeft( tree );

If a non _Binary Tree_ item is passed in, a new single node tree is created out of that item and this new tree is attached as the left sub tree.

	bt.attachLeft( item );

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-tree.attachLeft(): Attempt to attach a left sub tree to an empty tree');	



#### Attach Right Tree

This method can be called by either passing in another _Binary Tree_, or by passing in an item that is not a _Binary Tree_. 

If a _Binary Tree_ is passed in, that tree will be attached as the right sub tree. The method is called like this.

	bt.attachRight( tree );

If a non _Binary Tree_ item is passed in, a new single node tree is created out of that item and this new tree is attached as the right sub tree.

	bt.attachRight( item );

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-tree.attachRight(): Attempt to attach a right sub tree to an empty tree');	



#### Detach Left Tree

This method is used to remove the left sub tree from the main tree. It also returns the tree that it detaches. it is called as follows.

	bt.detachLeft();

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-tree.detachLeft(): Attempt to detach the left sub tree of an empty tree');	


#### Detach Right Tree

This method is used to remove the right sub tree from the main tree. It also returns the tree that it detaches. it is called as follows.

	bt.detachRight();

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-tree.detachRight(): Attempt to detach the right sub tree of an empty tree');	



Binary Search Tree
------------------

The _Binary Search Tree_ implements the following Binary Search Tree methods.

- __insert__        inserts a new item into the search tree in the correct position, maintaining the validity of the binary search tree
- __delete__        removes an item from the tree maintaining the validity of the binary search tree
- __retrieve__      returns a specific item in the tree
- __isEmpty__       determines whether the tree is empty and returns true if it is and false otherwise
- __getRootItem__   returns the item at the root of the tree
- __getLeftTree__   returns the left sub tree
- __getRightTree__  returns the Right sub tree



#### Insert

This method inserts an item into the tree and makes sure that the validity of the binary seach tree is maintained.

	bst.insert(item);

The search key used to determine the position of an item within the binary search tree as it is being inserted is derived from the item in the following way.

1. If the item is null, the item is not inserted into the tree and the following error is thrown.

	throw new Error('adt-binary-search-tree utils.getKey(): item is null');

2. If the item is an object that does not have a property named 'key', the item is not inserted into the tree and the following error is thrown.

	throw new Error('adt-binary-search-tree utils.getKey(): item has no key');

3. If the item is an object with a property named 'key' and that key property is null, the item is not inserted into the tree and the following error is thrown

	throw new Error('adt-binary-search-tree utils.getKey(): item is null');

4. If the item is an object with a property named 'key' and that key property is an object, the item is not inserted into the tree and the following error is thrown

	throw new Error('adt-binary-search-tree utils.getKey(): item.key is an object');

5. If the item is an object with a property named 'key' and this key property is not an object and is not null, the value of this key property is used as the item's search key within the tree.

6. If the item is not an object and is not null, the item value is used as the item's search key within the tree.



#### Delete

This method removes the item identified by the parameter 'key' from the tree and makes sure that the validity of the binary seach tree is maintained.

	bst.delete(key);

If the key does not exist in the tree, the following error is thrown.

	throw new Error('adt-binary-search-tree.delete(): The key is not in the tree');



#### Retrieve

This method returns the item identified by the parameter 'key' from the tree and leaves the tree unchanged.

	bst.retieve(key);

The method returns _null_ if the key does not exist in the tree.
 


#### Is Empty

The _isEmpty_ method is a boolean function that, when called on a tree, returns _true_ if the tree is empty and false otherwise.

	bst.isEmpty();


#### Get Root Item

This method returns the item at the root of the tree and is called as follows.

	bst.getRootItem();

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-search-tree.getRootItem(): Tried to get the root item of an empty tree');



#### Get Left Tree

This method returns the left sub tree.

	bst.getLeftTree();

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-search-tree.getLeftTree(): Tried to get the left tree of an empty tree');


	
#### Get Right Tree

This method returns the right sub tree.

	bts.getRightTree();

If this method is called on an empty tree it throws an error as follows.

	throw new Error('adt-binary-search-tree.getLeftTree(): Tried to get the left tree of an empty tree');


	
