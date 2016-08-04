$(document).ready(function() {
    $('#fullpage').fullpage();
});


var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if(isPhoneDevice){
        $.fn.fullpage.destroy();
    }
});





$(document).ready(function() {
  $('.banner').delay(500).fadeOut(2500);
});


var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: 5000,
  autoplayDisableOnInteraction: false,
  speed: 2000,
  effect: 'fade',

  fade: {
  	crossFade: false,
  },

  pagination: '.swiper-pagination',

});
