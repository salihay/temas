(async function ($) {

  let dv = document.querySelectorAll("*")

  async function getData() {
    const url = "assets/language/lang.json";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      var lang = json

      var $langSelect = $("#langselect");
      let langSelect = document.querySelector("#langselect")
      let langDrop = document.querySelector(".lang_select")
      let lngSel = document.querySelectorAll(".lang_item")
      if (langSelect.selectedIndex == -1) {
        if (navigator.language == "tr-TR") {
          langSelect.selectedIndex = 0
        } else {
          langSelect.selectedIndex = 1
        }
      }




      let lng = langSelect.value


      //lang_select_button



      if (langDrop.querySelector(`[data-lang='${lng}']`)) {

        langDrop.querySelector(".lang_select_button").innerHTML = langDrop.querySelector(`[data-lang='${lng}']`).innerHTML


      }



      $langSelect.on("change", function (e) {

        const map = new Map(Object.entries(lang));

        map.forEach((item) => {
          if (item.content.node) {
            item.content.node.innerHTML = item.content[e.target.value]
          }
        });
     
        langDrop.querySelector(".lang_select_button").innerHTML = langDrop.querySelector(`[data-lang='${$langSelect[0].value}']`).innerHTML
      });


      lngSel.forEach((sl) => {

        sl.addEventListener("click", (e) => {

          //langDrop.querySelector(".lang_select_button").innerHTML= sl.innerHTML

          

          langSelect.value = sl.dataset.lang
          $($langSelect).trigger("change")

        });


      });

      dv.forEach((item) => {
        if (!item.children.length) {
          const regex = /@@(.*?)@@/g;
          const sonuc = item.innerHTML.match(regex);
          if (sonuc) {
            let nd_key = sonuc[0].replace(/@@/g, "")
            lang[nd_key].content.node = item
            item.innerHTML = lang[nd_key].content[lng]
          }
        }
      });



    } catch (error) {
      console.error(error.message);
    }
  }
  await getData()

  $(window).on("load", function () {
    
    let intro=document.querySelector(".intro")
  
    intro.classList.add("loaded")
    setTimeout(() => {

      intro.remove()
    },  300);
  });


  let sliderHead = document.querySelectorAll(".sl_headx")
  let sliderText = document.querySelectorAll(".sl_textx")
  sliderHead.forEach((item) => {
    let arr = item.innerText.split(" ")
    let tmpArr = []
    arr.forEach((t, i) => {
      tmpArr.push(t)
      if (i + 1 != arr.length) {
        tmpArr.push("&nbsp;")
      }


    });
    item.innerHTML = ""
    tmpArr.forEach((t) => {


      if (t == "&nbsp;") {




        let sp_span = document.createElement("span")
        sp_span.classList.add("spacing")
        sp_span.innerHTML = t
        item.append(sp_span)
      } else {
        let word_block = document.createElement("div")
        word_block.classList.add("word_block")
        t.split("").forEach((tt) => {
          word_span = document.createElement("span")
          word_span.classList.add("hide")
          word_span.innerText = tt
          word_block.append(word_span)
        });
        item.append(word_block)


      }



    });



  });
  sliderText.forEach((item) => {

    let arr = item.innerText.split(" ")

    let tmpArr = []
    arr.forEach((t, i) => {


      tmpArr.push(t)
      if (i + 1 != arr.length) {
        tmpArr.push("&nbsp;")
      }
    });

    item.innerHTML = ""
    tmpArr.forEach((t) => {


      if (t == "&nbsp;") {




        let sp_span = document.createElement("span")
        sp_span.classList.add("spacing")
        sp_span.innerHTML = t
        item.append(sp_span)
      } else {
        let word_block = document.createElement("div")
        word_block.classList.add("word_block")
        t.split("").forEach((tt) => {
          word_span = document.createElement("span")
          word_span.classList.add("hide")
          word_span.innerText = tt
          word_block.append(word_span)
        });
        item.append(word_block)


      }



    });

  });







  var setAnimation = function (a) {


    let chldhead = sliderHead[a].querySelectorAll("span:not(.spacing)")
    let chldtext = sliderText[a].querySelectorAll("span:not(.spacing)")

    chldhead.forEach((item, idx) => {
      setTimeout(() => {

        item.classList.remove("hide")
      }, idx * 20);


    });

    chldtext.forEach((item, idx) => {
      setTimeout(() => {

        item.classList.remove("hide")
      }, idx * 3);


    });
  }
  var removeAnimation = function (a) {



    let chldhead = sliderHead[a].querySelectorAll("span:not(.spacing)")
    let chldtext = sliderText[a].querySelectorAll("span:not(.spacing)")

    chldhead.forEach((item) => {


      item.classList.add("hide")



    });

    chldtext.forEach((item) => {


      item.classList.add("hide")



    });

  }








  $(window).scroll(function () {
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
    on: {
      init: function (e) {


        //setAnimation(e.activeIndex)
      }
    }
  });

  swiper.on('slideChange', function (e) {
    //setAnimation(e.activeIndex)
    //removeAnimation(e.previousIndex)

  });










})(window.jQuery);
