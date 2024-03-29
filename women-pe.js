$.fn.isInViewport = function () {
  let e = $(this).offset().top,
    i = e + $(this).outerHeight(),
    o = $(window).scrollTop(),
    s = o + $(window).height();
  return i > o && e < s;
};
for (
  let b = document.getElementsByClassName('animated-word'), a = 0;
  a < b.length;
  a++
) {
  let e = b.item(a);
  e.innerHTML = e.innerHTML.replace(
    /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
    '$1<span class="letter">$2</span>'
  );
}
function animationsRender() {
  if ($(window).width() > 991) {
    let e = anime.timeline({ loop: !1, autoplay: !1 });
    e.add({
      targets: '.fadeup0 .letter',
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutQuint',
      duration: 800,
      delay: (e, i) => 30 * i,
      begin() {
        $('.fadeup0').css('opacity', '1');
      },
    });
    let i = !1;
    e.play(),
      $(window).focus(() => {
        i || (e.restart(), (i = !0));
      });
    let o = anime.timeline({ loop: !1, autoplay: !1 });
    o.add({
      targets: '.fadeuppe .letter',
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutQuint',
      duration: 800,
      delay: (e, i) => 300 + 30 * i,
      begin() {
        $('.fadeuppe').css('opacity', '1');
      },
    }),
      $(window).scroll(() => {
        $(window).width() > 991 && $('.fadeuppe').isInViewport() && o.play();
      });
  }
}
animationsRender();
var episdoeNumber = $('.women-pe_video-slider-slide');
$(episdoeNumber).each(function (index, element) {
  var reversedIndex = episdoeNumber.length - episdoeNumber.index(this);
  $(this).find('.women-pe_episode-tag-number').text(reversedIndex);
});

$('.women-pe_video-slider-slide').each(function (e) {});
let videoPlayerPos = $('#video-player').offset().top,
  navbarHeight = $('.navbar_section').outerHeight();
const video = $('#video-player').get(0);

$('#video-player').on('play', function () {
  let e = $('#video-player').attr('source');
  $('.video-link').each(function () {
    $(this).text() === e &&
      ($(this)
        .closest('.women-pe_single-video')
        .find('.women-pe_video-play-icon')
        .css('display', 'none'),
      $(this)
        .closest('.women-pe_single-video')
        .find('.women-pe_video-play-icon-playing')
        .css('display', 'none'),
      $(this)
        .closest('.women-pe_single-video')
        .find('.women-pe_video-pause-icon')
        .css('display', 'flex'));
  });
});
$('#video-player').on('pause', function () {
  let i = $('#video-player').attr('source');
  $('.video-link').each(function () {
    $(this).text() === i &&
      ($(this)
        .closest('.women-pe_single-video')
        .find('.women-pe_video-play-icon')
        .css('display', 'none'),
      $(this)
        .closest('.women-pe_single-video')
        .find('.women-pe_video-play-icon-playing')
        .css('display', 'flex'),
      $(this)
        .closest('.women-pe_single-video')
        .find('.women-pe_video-pause-icon')
        .css('display', 'none'));
  });
});
/*
$("#video-player").click(() => {
	if (video.paused) {
		let e = $("#video-player").attr("source");
		$(".video-link").each(function () {
			$(this).text() === e &&
				($(this)
					.closest(".women-pe_single-video")
					.find(".women-pe_video-play-icon")
					.css("display", "none"),
					$(this)
						.closest(".women-pe_single-video")
						.find(".women-pe_video-play-icon-playing")
						.css("display", "none"),
					$(this)
						.closest(".women-pe_single-video")
						.find(".women-pe_video-pause-icon")
						.css("display", "flex"));
		});
	} else {
		let i = $("#video-player").attr("source");
		$(".video-link").each(function () {
			$(this).text() === i &&
				($(this)
					.closest(".women-pe_single-video")
					.find(".women-pe_video-play-icon")
					.css("display", "none"),
					$(this)
						.closest(".women-pe_single-video")
						.find(".women-pe_video-play-icon-playing")
						.css("display", "flex"),
					$(this)
						.closest(".women-pe_single-video")
						.find(".women-pe_video-pause-icon")
						.css("display", "none"));
		});
	}
});
*/

$('.women-pe_single-video').click(function () {
  $('.women-pe_play-icon-wrapper').removeClass('active-video'),
    $(this).find('.women-pe_play-icon-wrapper').addClass('active-video');
  let e = $(this)
    .closest('.women-pe_video-slider-slide')
    .index('.women-pe_video-slider-slide');
  var i = e;
  $('.women-pe_video-slide-nav').find('.w-slider-dot').eq(e).click(),
    $('.women-pe_video-pause-icon').css('display', 'none'),
    $('.women-pe_video-play-icon').css('display', 'flex'),
    $('.women-pe_video-play-icon-playing').css('display', 'none');
  let o = $(this).css('background-image');
  o = o.replace('url(', '').replace(')', '').replace(/\"/gi, '');
  let s = $(this).find('.video-link').text();
  return (
    $(video).attr('src', ''),
    $(video).attr('src', s),
    $(video).attr('source', s),
    $(video).attr('poster', o),
    ($(video).get(0).currentTime = 0),
    $('#video-player').get(0).load(),
    $('body, html').animate({ scrollTop: videoPlayerPos - navbarHeight }, 1e3),
    (i *= 1 / womenpeSlideNN),
    dd.setValue(i, 0, (snap = !1)),
    !1
  );
}),
  $('.women-pe_video-play-icon').click(function () {
    $('.women-pe_play-icon-wrapper').removeClass('active-video'),
      $(this).closest('.women-pe_play-icon-wrapper').addClass('active-video');
    let e = $(this)
      .closest('.women-pe_video-slider-slide')
      .index('.women-pe_video-slider-slide');
    var i = e;
    $('.women-pe_video-slide-nav').find('.w-slider-dot').eq(e).click(),
      $('.women-pe_video-pause-icon').css('display', 'none'),
      $('.women-pe_video-play-icon').css('display', 'flex'),
      $('.women-pe_video-play-icon-playing').css('display', 'none'),
      $(this).siblings('.women-pe_video-pause-icon').css('display', 'flex'),
      $(this).css('display', 'none');
    let o = $(this).closest('.women-pe_single-video').css('background-image');
    o = o.replace('url(', '').replace(')', '').replace(/\"/gi, '');
    let s = $(this)
      .closest('.women-pe_single-video')
      .find('.video-link')
      .text();
    return (
      $(video).attr('src', s),
      $(video).attr('source', s),
      $(video).attr('poster', o),
      ($(video).get(0).currentTime = 0),
      $('#video-player').get(0).load(),
      video.play(),
      $('body, html').animate(
        { scrollTop: videoPlayerPos - navbarHeight },
        1e3
      ),
      (i *= 1 / womenpeSlideNN),
      dd.setValue(i, 0, (snap = !1)),
      !1
    );
  }),
  $('.women-pe_video-pause-icon').click(function () {
    return (
      $('.women-pe_video-pause-icon').css('display', 'none'),
      $('.women-pe_video-play-icon').css('display', 'flex'),
      $(this).siblings('.women-pe_video-play-icon').css('display', 'none'),
      $(this)
        .siblings('.women-pe_video-play-icon-playing')
        .css('display', 'flex'),
      $(this).css('display', 'none'),
      video.pause(),
      !1
    );
  });
$('.women-pe_video-play-icon-playing').click(function () {
  $('.women-pe_video-pause-icon').css('display', 'none'),
    $('.women-pe_video-play-icon').css('display', 'flex'),
    $('.women-pe_video-play-icon-playing').css('display', 'none'),
    $(this).siblings('.women-pe_video-pause-icon').css('display', 'flex'),
    $(this).siblings('.women-pe_video-play-icon').css('display', 'none');
  video.play(),
    $('body, html').animate({ scrollTop: videoPlayerPos - navbarHeight }, 1e3);
  return false;
});
const womenpeSingleSlide = Math.round(
    $('.women-pe_video-slider-slide').outerWidth()
  ),
  womenpeSlideN = $('.women-pe_video-slider-slide').length,
  womenpeSlideNN = womenpeSlideN - 1,
  womenPeSlideList = Math.round($('.womne-pe_cms-list').outerWidth()),
  WomenpeTotalWidth = womenpeSlideN * womenpeSingleSlide - womenPeSlideList;
var dd = new Dragdealer('women-pe_drag-tool', {
  speed: 0.5,
  slide: !1,
  requestAnimationFrame: !0,
  horizontal: !0,
  vertical: !1,
  animationCallback(e, i) {
    $('.womne-pe_cms-list').css('margin-left', -e * (WomenpeTotalWidth + 32));
    $('.women-pe_drag-line-active').css('width', Math.round(e * 100) + '%');
  },
});
function dragDetector() {
  (videoPlayerPos = $('#video-player').offset().top),
    (navbarHeight = $('.navbar_section').outerHeight());
  let e = $('.women-pe_videos-content').outerWidth(),
    i = Math.round($('.women-pe_video-slider-slide').outerWidth()),
    o = $('.women-pe_video-slider-slide').length,
    s = Math.round($('.womne-pe_cms-list').outerWidth()),
    t = o * i - s;
  new Dragdealer('women-pe_drag-tool', {
    slide: !1,
    speed: 0.5,
    requestAnimationFrame: !0,
    horizontal: !0,
    vertical: !1,
    animationCallback(e, i) {
      $('.womne-pe_cms-list').css('margin-left', -e * (t + 32));
      $('.women-pe_drag-line-active').css('width', Math.round(e * 100) + '%');
    },
  }),
    e < o * i
      ? $('.women-pe_drag-component').css('opacity', '1')
      : $('.women-pe_drag-component').css('opacity', '0');
}

dragDetector();
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
    $(
      '.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button'
    ).css('opacity', '1');
  }
  dragDetector();
}
function pageLoaded() {
  screenWidth = $(window).width();
  if (screenWidth <= 991) {
    $(
      '.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button'
    ).css('opacity', '1');
  }
}
pageLoaded();
