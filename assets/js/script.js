
(function ($) {

    $(window).scroll(function(){
        var sticky = $('header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 72) sticky.addClass('scroll');
        else sticky.removeClass('scroll');
      });
      const swiperThumb = new Swiper('.thumbSwiper', {
        spaceBetween: 0,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });

    const swiper = new Swiper('.t-swiper', {
        speed: 400,
        spaceBetween: 0,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
          thumbs: {
            swiper: swiperThumb,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });
      
     









})(window.jQuery);
