var adt = require('../index');

suite('adt-linked-list', function() {

	bench('1000 add operations', function() {

		var ll = adt.createLinkedList();

		for (var i = 0; i < 1000; i++) {
			var item = {};
			item['item-' + i] = i;

			ll.add(ll.size(), item);
		}

	});

});