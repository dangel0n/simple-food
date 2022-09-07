$(function () {
  $('.testimonials__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-right.svg" alt=""></button>',

    appendArrows: $('.testimonials__item'),
    appendDots: $('.testimonials__item'),
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoints: 992,
      settings: {
        arrows: false,
      }
    }]
    
  })
  $('.menu__burger').on('click', function () {
    $('.menu-mob').toggleClass('menu-mob__active');
  });

  $('.menu-mob__btn').on('click', function () {
    $('.menu-mob').toggleClass('menu-mob__active');
  });

  // const mql = window.matchMedia(mediaQueryString);

 

  // if (window.matchMedia("(min-width: 992px)").matches) {
  //   $('.restaurant__content').slick('unslick');
  //   sliderIsLive = false;
  // } else {
  //   $('.restaurant__content').slick({
  //     dots: true,
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 3000
  //   });
  //   sliderIsLive = true;
  // };

  if (window.matchMedia("(min-width: 992px)").matches) {

  } else {
    $('.restaurant__content').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    })
  }

  var mixer = mixitup('.popular__catalog');
})

// const mql = window.matchMedia(mediaQueryString);

// function name(params) {
//   if (window.matchMedia("(min-width: 992px)").matches) {

//   } else {
//     $('.restaurant__content').slick({
//       dots: true,
//       arrows: false,
//       autoplay: true,
//       autoplaySpeed: 3000
//     })
//   }
// }

// if (window.matchMedia("(min-width: 992px)").matches) {

// } else {
//   $('.restaurant__content').slick({
//     dots: true,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 3000
//   })
// }






  // $('.testimonials__slider').slick({
  //   dots: true,
  //   prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
  //   nextArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-right.svg" alt=""></button>',
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [{
  //     breakpoints: 992,
  //     settings: {
  //       arrows: false,
  //     }
  //   }]
  // });
