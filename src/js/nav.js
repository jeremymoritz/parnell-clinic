
clinicApp.controller('NavCtrl', [
	'$scope',
	'$location',
	function IndexCtrl($s, $location) {
		'use strict';

		$s.views = [
			{
				name: 'home',
				display: 'Hi Buddy',
				icon: 'truck'
			}, {
				name: 'breedTest',
				display: 'BreedTest',
				icon: 'truck'
			}, {
				name: 'entry1',
				display: 'Initial Entry Form',
				icon: 'truck'
			}, {
				name: 'advertorial',
				display: 'Advertorial',
				icon: 'puzzle-piece'
			}
		];

		$s.navClass = function navClass(page) {
			var currentRoute = $location.path().substring(1) || '';

			return page === currentRoute ? 'active' : '';
		};

		var defaultPage = $s.views[0].name;

		$s.loadPage = function loadPage(page) {
			$location.url(_.includes(_.pluck($s.views, 'name'), page) ? page : defaultPage);
		};
	}
]);
