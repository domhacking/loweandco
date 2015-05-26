/* jshint devel:true */
$(document).ready(function() {
    $('#fullpage').fullpage();
});

$(document).ready(function() {
  $('.banner').delay(2000).fadeOut(1000)
});


var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: 5000,
  autoplayDisableOnInteraction: false,
  speed: 1500,
  effect: 'fade',

  fade: {
  	crossFade: false,
  },

  pagination: '.swiper-pagination',

});



