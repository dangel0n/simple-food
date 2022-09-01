$(function () {


  $('.testimonials__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-right.svg" alt=""></button>',
    appendArrows: $('.testimonials__item'),
    appendDots: $('.testimonials__item'),
    autoplay: true,
    autoplaySpeed: 3000
  }) 
  
  var mixer = mixitup('.popular__catalog');


})