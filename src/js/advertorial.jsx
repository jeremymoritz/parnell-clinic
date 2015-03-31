React.render(
	<div>
		<img src="img/parnell-logo.jpg" alt className="img-responsive hidden" />
		<video id="oa-video" controls loop className="img img-responsive">
			<source src="vid/oa-intro.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<img src="img/parnell-footer.jpg" alt className="img-responsive" />
	</div>,
	document.getElementById('advertorial')
);

function playVideo() {
	var vid = $('#oa-video')[0];
	if (vid.paused || vid.ended) {
		vid.muted = true;
		vid.play();
	}
}

setTimeout(function playVidAfterDelay() {
	playVideo();
}, 3000);

setInterval(function playVidIfIdle() {
	playVideo();
}, 10 * 1000);	//	this should be changed to 2 minutes (2 * 60 * 1000)
