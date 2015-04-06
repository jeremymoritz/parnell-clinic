// function playVideo() {
// 	if (vid.paused || vid.ended) {
// 		vid.muted = true;
// 		vid.play();
// 	}
// }

// var AdvertorialVideo = React.createClass({
// 	render: function render() {
// 		return (
// 			<div>
// 				<img src="img/parnell-logo.jpg" alt className="img-responsive hidden" />
// 				<video id="oa-video" controls loop className="img img-responsive">
// 					<source src="vid/oa-intro.mp4" type="video/mp4" />
// 					Your browser does not support the video tag.
// 				</video>
// 				<img src="img/parnell-footer.jpg" alt className="img-responsive" />
// 			</div>
// 		);
// 	}
// });
// var countIdle = 0;
// var vid = $('#oa-video')[0];

// setTimeout(function playVidAfterDelay() {
// 	playVideo();
// }, 3000);

// setInterval(function playVidIfIdleForTooLong() {
// 	if (vid.paused || vid.ended) {
// 		if (++countIdle >= (2 * 6)) {	//	idle for 2 consecutive minutes
// 			playVideo();
// 			countIdle = 0;
// 		}
// 	} else {
// 		countIdle = 0;
// 	}
// }, 10 * 1000);	//	every 10 seconds
