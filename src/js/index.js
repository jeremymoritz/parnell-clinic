clinicApp.controller('IndexCtrl', [
	'$scope',
	function IndexCtrl($s) {
		'use strict';

		// $s.message = 'Hello Parnell';

		$s.controllers = [{
			ctrl: 'hello',
			display: 'Hello',
			icon: 'truck'
		},
		{
			ctrl: 'adv',
			display: 'Advertorial',
			icon: 'puzzle-piece'
		}];
		$s.showController = null;
	}
]);
