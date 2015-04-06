clinicApp.controller('IndexCtrl', [
	'$scope',
	function IndexCtrl($s) {
		'use strict';

		$s.views = [{
			ctrl: 'hello',
			display: 'Hello',
			icon: 'truck'
		},
		{
			ctrl: 'adv',
			display: 'Advertorial',
			icon: 'puzzle-piece'
		}];
		$s.chosenView = $s.views[0];

		$s.changeView = function changeView(view) {
			$s.chosenView = view;
		};
	}
]);
