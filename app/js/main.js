

$(function () {

  $('.interest__slider').slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    appendArrows: $('.interest__title'),
  })

  $('.product-top__slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
  })

  $('.product-tabs__top-item').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item ').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $(".star").rateYo({
    starWidth:"17px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    readOnly: true,
  });

  $(".review__star").rateYo({
    starWidth: "17px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
  });

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active')
  });

  $('.catalog__close-btn').on('click', function () {
    $('.catalog__wraper').removeClass('catalog__wraper--active');
  });

  $('.catalog-filters__open').on('click', function () {
    $('.catalog__wraper').addClass('catalog__wraper--active');
  })


  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });


  $('.select-style').styler();
  $('.product-top__input').styler();

  $('.testimonials__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',

    appendArrows: $('.testimonials__item'),
    appendDots: $('.testimonials__item'),
    autoplay: true,
    autoplaySpeed: 3000,
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

  if (window.matchMedia("(min-width: 1200px)").matches) {

  } else {
    $('.promo__content').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    })
  }


  var mixer = mixitup('.popular__catalog');
})

