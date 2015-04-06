// require('./app.js');
// require('./nav.js');
// require('./hello.js');
// require('./advertorial.js');

clinicApp.controller('IndexCtrl', [
	'$scope',
	function IndexCtrl($s) {
		'use strict';
<<<<<<< HEAD
=======

		$s.views = [{
			ctrl: 'hello',
			display: 'Hello',
			icon: 'truck'
		},{
			ctrl:'breedTest',
			display:'BreedTest',
			icon:'truck'
		// },{
		// 	ctrl:'entryForm',
		// 	display:'Initial Entry Form',
		// 	icon:'truck'
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
>>>>>>> starting the breed list
	}
]);
