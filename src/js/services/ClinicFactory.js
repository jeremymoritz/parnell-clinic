// Use recurring values from this factory

clinicApp.factory('ClinicFactory', [
	function ClinicFactory() {
		'use strict';

		return {
			views: window.clinicViews
		};
	}
]);
