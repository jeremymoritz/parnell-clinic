clinicApp.controller('NavCtrl', [
	'$scope',
	'$state',
	'ClinicFactory',
	function IndexCtrl($s, $state, CF) {
		'use strict';

<<<<<<< HEAD
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
=======
		$s.views = CF.views;
>>>>>>> 8f3cfc0d928d46f1a4b0d4c485037feb702b91f9

		$s.isNavActive = function isNavActive(page) {
			return page === $state.current.name;
		};

		$s.loadPage = function loadPage(page) {
			$state.go(page);
		};
	}
]);
