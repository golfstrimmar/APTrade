import $ from "jquery";
// ------------------------------------------------







//    // ==скроллинг====ЯКОРЯ==============
$(document).ready(function (e) {
  $('a[href^="#today"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
  });
})
$(document).ready(function (e) {
  $('a[href^="#history"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
  });
})
$(document).ready(function (e) {
  $('a[href^="#mission"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
  });
})
$(document).ready(function (e) {
  $('a[href^="#strategy"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
  });
})
$(document).ready(function (e) {
  $('a[href^="#values"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
  });
})
$(document).ready(function (e) {
  $('a[href^="#manifest"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
  });
})
$(document).ready(function (e) {
  $('a[href^="#team"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
  });
})
$(document).ready(function (e) {
  $('a[href^="#partnership"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
  });
})
$(document).ready(function (e) {
  $('a[href^="#company"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
  });
})

















 