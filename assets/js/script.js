(function ($) {
"use strict";
  $(window).on("load", function () {
    
    let intro=document.querySelector(".intro")
  
    intro.classList.add("loaded")
    setTimeout(() => {

      intro.remove()
    },  300);
  });

  
let navButton=document.querySelector(".nav_button")

navButton.addEventListener("click", (e) => {
 
  document.querySelector(".nav_list").classList.toggle("active")
  
});

var headers = document.querySelector("header")
var bodyelems = document.querySelector("html")

if (bodyelems.scrollTop >= 80) headers.classList.add('scroll');
  $(window).scroll(function () {
    var sticky = $('header'),
      scroll = $(window).scrollTop();

    if (scroll >= 80) sticky.addClass('scroll');
    else sticky.removeClass('scroll');
  });


})(window.jQuery);
