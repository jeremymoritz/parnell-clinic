
clinicApp.controller('AdvertorialCtrl', [
	'$scope',
	'$timeout',
	'$interval',
	function AdvertorialCtrl($s, $timeout, $interval) {
		'use strict';

		function playVideo() {
			if (vid.paused || vid.ended) {
				vid.muted = true;
				vid.play();
			}
		}

		var countIdle = 0;
		var vid = $('#oa-video')[0];

		$timeout(function playVidAfterDelay() {
			playVideo();
		}, 3000);

		$interval(function playVidIfIdleForTooLong() {
			if (vid.paused || vid.ended) {
				if (++countIdle >= (2 * 6)) {	//	idle for 2 consecutive minutes
					playVideo();
					countIdle = 0;
				}
			} else {
				countIdle = 0;
			}
		}, 10 * 1000);	//	every 10 seconds

		$s.message = 'Advertorial Okay';
	}
]);
