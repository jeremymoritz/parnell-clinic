clinicApp.controller('BreedCtrl', [
	'$scope',
	function BreedCtrl($s) {
		'use strict';
		$s.breeds = [
			{
				type:'mutt',
				name: 'Mixed',
				risk: true
			},{
				type:'gShepard',
				name: 'German Shepard',
				risk: true,
				maxLbs: 50
			},{
				type:'fPoodle',
				name:'French Poodle',
				risk: false,
				maxLbs: 65
			},{
				type:'pusky',
				name:'Pomerainian Husky Mix (Pusky)',
				risk: false,
				maxLbs: 8
			},{
				type:'evil',
				name:'Chihuahua',
				risk: false,
				maxLbs: 1	
			}
		];
		$s.chosenBreed = $s.breeds[0];
		$s.changeBreed = function changeBreed(breed) {
			$s.chosenBreed = breed;
		};
	}
]);	
