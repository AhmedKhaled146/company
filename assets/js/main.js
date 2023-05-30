
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  // /**
  //  * Preloader
  //  */
  // let preloader = select('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove()
  //   });
  // }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
  /*********News js ************/
  ; (function () {

    'use strict';

    var googleTranslateFormStyling = function () {
      $(window).on('load', function () {
        $('.goog-te-combo').addClass('form-control');
      });
    };


    var contentWayPoint = function () {
      var i = 0;

      $('.animate-box').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function () {

            $('body .animate-box.item-animate').each(function (k) {
              var el = $(this);
              setTimeout(function () {
                var effect = el.data('animate-effect');
                if (effect === 'fadeIn') {
                  el.addClass('fadeIn animated-fast');
                } else if (effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft animated-fast');
                } else if (effect === 'fadeInRight') {
                  el.addClass('fadeInRight animated-fast');
                } else {
                  el.addClass('fadeInUp animated-fast');
                }

                el.removeClass('item-animate');
              }, k * 50, 'easeInOutExpo');
            });

          }, 100);

        }

      }, { offset: '85%' });
      // }, { offset: '90%'} );
    };




    $(function () {
      owlCarousel();
      videos();
      contentWayPoint();
      googleTranslateFormStyling();
    });

  }());
function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

let Messangericon = document.querySelector('.Messangericon');
let chatbox = document.querySelector('.Chatbox');
let closeicon =document.querySelector('.bi-x')

/***********function Show chat*****************/
ShowChat=()=>{
  if (chatbox.style.display === "none") {

    chatbox.style.display = "block";

  } else {
    chatbox.style.display = "none";
  }

}


Messangericon.addEventListener('click' , ShowChat);
closeicon.addEventListener('click' , ShowChat);
