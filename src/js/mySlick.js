import $ from "jquery";
// import "./slick.js";


$(Document).ready(function () {



$(".slider-js-1").slick({
  // dots: true,
  arrows: true,
  slidesToShow: 4,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: true,
  nextArrow: $(".slider__arrow_next--1"),
  prevArrow: $(".slider__arrow_prev--1"),

  
});








});