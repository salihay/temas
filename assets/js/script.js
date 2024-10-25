(function ($) {


  let dv = document.querySelectorAll("*")

  async function getData() {
    const url = "assets/language/lang.json";
    try {
      const response = await fetch(url);
      console.log(response)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      var lang = json


      let langSelect = document.querySelector("#langselect")


      if (langSelect.selectedIndex == -1) {
        if (navigator.language == "tr-TR") {
          langSelect.selectedIndex = 0
        } else {
          langSelect.selectedIndex = 1
        }
      }



      let lng = langSelect.value

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

      var $langSelect = $("#langselect");

      $langSelect.on("change", function (e) {


        const map = new Map(Object.entries(lang));

        map.forEach((item) => {
          if (item.content.node) {
            item.content.node.innerHTML = item.content[e.target.value]
          }
        });

      });
      langSelect.addEventListener("change", (e) => {


        const map = new Map(Object.entries(lang));

        map.forEach((item) => {
          if (item.content.node) {
            item.content.node.innerHTML = item.content[e.target.value]
          }
        });
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  getData()


  $(window).on("load", function () {
    console.log("load")
  });



  let sliderHead = document.querySelectorAll(".sl_head")
  let sliderText = document.querySelectorAll(".sl_text")
  sliderHead.forEach((item) => {
   
    const nameList = item.innerText.split("");
   
    item.innerText = ""
    nameList.forEach((t) => {
     
      let cc = document.createElement("DIV")

      let cs = document.createElement("SPAN")
      cs.innerHTML = t
      cc.append(cs)
      item.append(cc)
    });


  });
  sliderText.forEach((item) => {
    
    const nameList = item.innerText.split("");
 
    item.innerText = ""
    nameList.forEach((t) => {
     
      let cc = document.createElement("DIV")
      cc.classList.add("hide")
      let cs = document.createElement("SPAN")
      cs.innerHTML = t
      cc.append(cs)
      item.append(cc)
    });
  });





  

  var setAnimation=function(a){
   
   
    let chldhead=sliderHead[a].querySelectorAll("div")
    let chldtext=sliderText[a].querySelectorAll("div")
    let timerH=0
    let timerT=0
    let steps=3
    chldhead.forEach((item) => {
      setTimeout(() => {
        
        item.classList.remove("hide")
      }, timerH);
  
      timerH+=steps
    });

    chldtext.forEach((item) => {
      setTimeout(() => {
        
        item.classList.remove("hide")
      }, timerT);
  
      timerT+=steps
    });
  }
  var removeAnimation=function(a){
   
   

    let chldhead=sliderHead[a].querySelectorAll("div")
    let chldtext=sliderText[a].querySelectorAll("div")
   
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
 
  
  $('select').each(function () {
    let _this = this
    function _setIcon_Select(data) {
      if (!data.id) {
        if (_this.dataset.placeicon) {
          var _text = data.text
          var _p_icon = _this.dataset.placeicon
          var $place_data = $(`<div class="select-icon">${_p_icon}<span class="_text">${_text}</span></div>`); return $place_data
        } else if (_this.dataset.image) {
          var _text = data.text
          var _p_img = _this.dataset.image
          var $place_data = $(`<div class="select-icon"><span class="_img"><img src="${_p_img}"></span><span class="_text">${_text}</span></div>`); return $place_data
        } else if (_this.dataset.placeicon_static) {
          var _text = data.text
          var _p_icon_s = _this.dataset.placeicon_static
          var $place_data = $(`<div class="select-icon">${_p_icon_s}<span class="_text">${_text}</span></div>`); return $place_data
        } else { return data.text; }
      }
      if (_this.dataset.placeicon_static) {
        var _text = data.text
        var _p_icon_s = _this.dataset.placeicon_static
        var $place_data = $(`<div class="select-icon">${_p_icon_s}<span class="_text">${_text}</span></div>`); return $place_data
      }
      if (data.element.dataset.icon) {
        let _icon = data.element.dataset.icon
        var $data = $(`<div class="select-icon">${_icon}<span class="_text">${data.text}</span></div>`); return $data;
      } else if (data.element.dataset.image) {
        let _img = data.element.dataset.image
        var $data
        if (data.element.dataset.subText) { $data = $(`<div class="select-icon"><span class="_img"><img src="${_img}"></span><div class="_text_group"><span class="_text">${data.text}</span><span class="s_text">${data.element.dataset.subText}</span></div></div>`); } else { $data = $(`<div class="select-icon"><span class="_img"><img src="${_img}"></span><span class="_text">${data.text}</span></div>`); }
        return $data;
      } else { return data.text; }
      if (_this.multiple) { }
    }
    function _setIcon_Result(data) {
      if (!data.id) {
        if (_this.dataset.placeicon) {
          var _text = data.text
          var _p_icon = _this.dataset.placeicon
          var $place_data = $(`<div class="select-icon">${_p_icon}<span class="_text">${_text}</span></div>`); return $place_data
        } else if (_this.dataset.image) {
          var _text = data.text
          var _p_img = _this.dataset.image
          var $place_data = $(`<div class="select-icon"><span class="_img"><img src="${_p_img}"></span><span class="_text">${_text}</span></div>`); return $place_data
        } else { return data.text; }
      }
      if (!data.element) { return data.text; }
      if (data.element.dataset.icon) {
        let _icon = data.element.dataset.icon
        var $data = $(`<div class="select-icon">${_icon}<span class="_text">${data.text}</span></div>`); return $data;
      } else if (data.element.dataset.image) {
        let _img = data.element.dataset.image
        var $data
        if (data.element.dataset.subText) { $data = $(`<div class="select-icon"><span class="_img"><img src="${_img}"></span><div class="_text_group"><span class="_text">${data.text}</span><span class="s_text">${data.element.dataset.subText}</span></div></div>`); } else { $data = $(`<div class="select-icon"><span class="_img"><img src="${_img}"></span><span class="_text">${data.text}</span></div>`); }
        return $data;
      } else { return data.text; }
      if (_this.multiple) { }
    }
    let _search; _this.hasAttribute("search") ? _search = true : _search = false
    let _type; _this.classList.contains("big") ? _type = true : _type = false
    let drop__Parent; let drop__Parent__Modal = _this.closest(".modal")
    _this.closest(".modal") ? drop__Parent = true : drop__Parent = false
    $(this).select2({ minimumResultsForSearch: _search ? 0 : Infinity, language: "tr", templateResult: _setIcon_Result, templateSelection: _setIcon_Select, theme: "uniselect", dropdownCssClass: _type ? "dr__big" : [], minimumInputLength: _search ? 2 : 0, dropdownParent: drop__Parent ? $(drop__Parent__Modal) : $(document.body), }); if (this.multiple) { $(this).select2({ templateResult: _setIcon_Result, templateSelection: _setIcon_Select, language: "tr", theme: "uniselect", minimumResultsForSearch: _search ? Infinity : Infinity, dropdownCssClass: _type ? "b_m__list" : "m__list", }); }

  });







})(window.jQuery);
