
clinicApp.controller('NavCtrl', [
	'$scope',
	'$location',
	function IndexCtrl($s, $location) {
		'use strict';

		$s.views = [{
			name: 'home',
			display: 'Hello',
			icon: 'truck'
		},
		{
			name: 'advertorial',
			display: 'Advertorial',
			icon: 'puzzle-piece'
		}];

		$s.navClass = function navClass(page) {
			var currentRoute = $location.path().substring(1) || '';

			return page === currentRoute ? 'active' : '';
		};

		$s.pages = [
			'home',
			'advertorial'
		];
		var defaultPage = $s.pages[0];

		$s.loadPage = function loadPage(page) {
			$location.url(_.includes($s.pages, page) ? page : defaultPage);
		};
	}
]);
