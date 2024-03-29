($.fn.isInViewport = function () {
	var a = $(this).offset().top,
		c = a + $(this).outerHeight(),
		b = $(window).scrollTop(),
		d = b + $(window).height();
	return c > b && a < d;
});
for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
	var c = b.item(a);
	c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
}

var aPlayed = false;

function animationsRender() {

	if ($(window).width() > 991) {



		var a = anime.timeline({ loop: !1, autoplay: !1 });
		a.add({
			targets: ".fadeup0 .letter",
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutQuint",
			duration: 800,
			delay: (b, a) => 30 * a,
			begin() {
				$(".fadeup0").css("opacity", "1");
			},
		});

		a.play();
		$(window).focus(function () {
			if (!aPlayed) {
				a.restart();
				aPlayed = true;
			}
			else {

			}
		});

		var b = anime.timeline({ loop: !1, autoplay: !1 });
		b.add({
			targets: ".fadeup1 .letter",
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutQuint",
			duration: 800,
			delay: (b, a) => 30 * a,
			begin() {
				$(".fadeup1").css("opacity", "1");
			},
		});


		$(window).scroll(function () {
			if ($('.fadeup1').isInViewport()) {
				b.play();

			}
			else if ($(".resouces-section").isInViewport()) {
				$('.single-resource-wrap-item').each(function (i) {
					var $item = $(this).find("._8_fundcards");
					setTimeout(function () {
						$item.click();
					}, 100 * i);
				});

			}
		});
	}
}

animationsRender();
var resizeDone;
var cachedWidth = $(window).width();
$(window).resize(function () {
	var newWidth = $(window).width();
	if (newWidth !== cachedWidth) {
		clearTimeout(resizeDone);
		resizeDone = setTimeout(doneResizing, 500);
		cachedWidth = newWidth;
	}
});

function doneResizing() {
	screenWidth = $(window).width();
	if (screenWidth > 991) {
		$('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
	}
}
function pageLoaded() {
	screenWidth = $(window).width();
	if (screenWidth <= 991) {
		$('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
	}
}
pageLoaded();
var screenWidth = $(window).width();
var playButton = $('#play-video');
var video = $('#video-player').get(0);

$(document).on('click', '#play-video', function (e) {
	playButton.css('display', 'none');
	video.play();
	video.setAttribute('controls', 'controls');
	return false;
});

$(document).on('click', '.our-method_section', function (e) {
	if (video.paused === false) {
		video.pause();
		video.setAttribute('controls', 'controls');
	} else {
	}
	return false;
});
