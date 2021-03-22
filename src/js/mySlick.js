import $, { each } from "jquery";
// import "./slick.js";


$(Document).ready(function () {
  $(".slider-js-1").slick({
    // dots: true,
    arrows: true,
    slidesToShow: 5,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    // centerMode: true,
    nextArrow: $(".slider__arrow_next--1"),
    prevArrow: $(".slider__arrow_prev--1"),
    responsive: [
      // {
      //   breakpoint: 1920,
      //   settings: {
      //     slidesToShow: 4,
      //   },
      // },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });



  $(".slider-js-duble--1 ").slick({
    dots: false,
    arrows: true,
    slidesToShow: 15,
    speed: 800,
    easing: "ease",
    infinite: true,
    asNavFor: ".slider-js-2",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 10,
        },
      },
    ],
  });

  $("<i>", {
    class: $(".slider-js-duble--1 ").attr("data-prev"),
  }).appendTo(".slider-js-duble--1  .slick-prev");
  $("<i>", {
    class: $(".slider-js-duble--1").attr("data-next"),
  }).appendTo(".slider-js-duble--1 .slick-next");







  $(".slider-js-2").slick({
    // dots: true,
    arrows: false,
    slidesToShow: 1,
    speed: 500,
    easing: "ease",
    cssEase: "linear",
    centerMode: false,
    asNavFor: ".slider-js-duble--1",

    // nextArrow: $(".slider__arrow_next--2"),
    // prevArrow: $(".slider__arrow_prev--2"),
  });

  // let array = [];
  // $.each($(".slider-js-2 .art_article-data-item"), function (index) {
  //   let t = $(this).attr("data");
  //   array.push(t);
  // });

  // let result = [];
  // var q = (array.length - 1) / 2;
  // array.filter((item, index) => {
  //   if (index > q) return result.push(item);
  // });

  // var i = 0;
  // var values = $(".slider-js-2 .slick-dots li ").each(function () {
  //   return $(this).text(result[i++]);
  // });










  $(".slider-massages-js-1").slick({
    dots: true,
    slidesToShow: 1,
    speed: 500,
    easing: "ease",
    cssEase: "linear",
    centerMode: false,
    nextArrow: $(".slider__arrow_next--massages"),
    prevArrow: $(".slider__arrow_prev--massages"),
    customPaging: function (slider, i) {
      var current = i + 1;
      current = current < 10 ? "" + current : current;

      var total = slider.slideCount;
      total = total < 10 ? "" + total : total;

      return (
        '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
  		<span class="slick-dots-current">' +
        current +
        '</span>\
  		<span class="slick-dots-separator">/</span>\
  		<span class="slick-dots-total">' +
        total +
        "</span></button>"
      );
    },
  });
});