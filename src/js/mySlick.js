import $ from "jquery";
// import "./slick.js";


$(Document).ready(function () {



$(".slider-js-1").slick({
  // dots: true,
  arrows: true,
  slidesToShow: 5,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: true,
  nextArrow: $(".slider__arrow_next--1"),
  prevArrow: $(".slider__arrow_prev--1"),
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
      }
    }
  ],
});





$(".slider-js-2").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 500,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".slider__arrow_next--2"),
  prevArrow: $(".slider__arrow_prev--2"),
  // responsive: [
  //   {
  //     breakpoint: 1650,
  //     settings: {
  //       slidesToShow: 4,
  //     }
  //   },
    // {
    //   breakpoint: 1800,
    //   settings: {
    //     slidesToShow: 3,
    //   }
    // },
    // {
    //   breakpoint: 1500,
    //   settings: {
    //     slidesToShow: 2,
    //   }
    // }
  // ],
});

});