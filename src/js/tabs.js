import $ from "jquery";


// независимые табы-------------------------
$(document).ready(function () {
let titleTab=  $(".tabs-title-js");

titleTab.on("click", function () {

let dropTab = $(this).siblings(".tabs-drop-js");
let imgTab = $(this).find(".tabs-img-js");

if ($(this).hasClass("act")) {
  setTimeout(function () {
    dropTab.removeClass("act");
  }, 200);
  $(this).removeClass("act");
  dropTab.slideUp(200);
  imgTab.css("transform", " translateY(-50%) rotate(0deg)");
}


else {
  $(this).addClass("act");
  imgTab.css("transform", "translateY(-50%) rotate(180deg)");
  dropTab.addClass("act").slideDown(200);
}	



});
})

  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".tabs-title-js"); // тут указываем ID элемента
    ;
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
        setTimeout(function () {
          $(".tabs-drop-js").removeClass("act");
        }, 200);
        div.removeClass("act");
        $(".tabs-drop-js").slideUp(200);
        div
          .find(".tabs-img-js")
          .css("transform", " translateY(-50%) rotate(0deg)");
    }
  });


// ----------------------------



