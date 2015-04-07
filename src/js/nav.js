clinicApp.controller('NavCtrl', [
	'$scope',
	'$state',
	'ClinicFactory',
	function IndexCtrl($s, $state, CF) {
		'use strict';

		$s.views = CF.views;

		$s.isNavActive = function isNavActive(page) {
			return page === $state.current.name;
		};

		$s.loadPage = function loadPage(page) {
			$state.go(page);
		};
	}
]);
