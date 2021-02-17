//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------



$(window).on("load", function () {
  $(".cssload").delay(200).fadeOut("slow");
});

$(document).ready(function (e) {
  document.querySelector(
    ".art_inner__vidget"
  ).style.cssText = `top: auto; `;

  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 347) {
      
  document.querySelector(".art_inner__vidget").style.cssText = `top:20px; `;
   
    } else {

         document.querySelector(
           ".art_inner__vidget"
         ).style.cssText = `top:auto; `;
   
    }
  });
});
