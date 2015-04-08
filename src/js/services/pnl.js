/**
 * Parnell utility functions (for use anywhere)
**/

var pnl = {
	capitalize: function capitalize(string, keepOtherCapitalization) {
		return string.charAt(0).toUpperCase() + (keepOtherCapitalization ? string.slice(1) : string.slice(1).toLowerCase());
	},

	pluralize: function pluralize(str) {
		return str.replace(/y$/, 'ie') + 's';
	},

	randomDigits: function randomDigits(min, max) {
		min = min === undefined ? 1 : min;
		max = max || 999;

		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),

	isAngularObjectEqual: function isAngularObjectEqual(object1, object2) {
		return _.isEqual(_.omit(object1, '$$hashKey'), _.omit(object2, '$$hashKey'));
	},

	expandArray: function expandArray(array, times) {	//	turns [1,2,3] into [1,2,3,1,2,3,1,2,3];
		times = times || 3;	//	default number of times to expand it by

		var expandedArray = [];

		for (var i = 0; i < times; i++) {
			expandedArray = expandedArray.concat(angular.copy(array));
		}

		return expandedArray;
	}
};
