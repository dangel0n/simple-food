$(function () {
  $('.testimonials__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',

    appendArrows: $('.testimonials__item'),
    appendDots: $('.testimonials__item'),
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
        appendArrows: $('.testimonials__slider'),
      }
    }]
  })

  $('.menu__burger').on('click', function () {
    $('.menu-mob').toggleClass('menu-mob__active');
  });

  $('.menu-mob__btn').on('click', function () {
    $('.menu-mob').toggleClass('menu-mob__active');
  });

  if (window.matchMedia("(min-width: 992px)").matches) {
    $('.restaurant__content').slick('unslick');
    sliderIsLive = false;
  } else {
    $('.restaurant__content').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    });
    sliderIsLive = true;

    $('.testimonials__slider').slick({
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: false,
          appendArrows: $('.testimonials__slider'),
        }
      }]

    })
  };
  // if (window.matchMedia("(min-width: 768px)").matches) {

  // } else {
  //   $('.testimonials__slider').slick({
  //     dots: false,
  //     appendArrows: $('.testimonials__slider'),
  //   })
  // };

  var mixer = mixitup('.popular__catalog');
})

