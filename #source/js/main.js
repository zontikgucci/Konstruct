// img .ibg
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

$(window).scroll(function () {
	var s = 0 - $(this).scrollTop() / 2;
	$('.header__fullscreen').css('transform', 'translate3d(0, ' + s + 'px, 0)');
});