import $ from "jquery";
import Plyr from "plyr";




$(document).ready(function () {
 
let Popup = $(".popup");
Popup.fadeOut(200);
const player1 = new Plyr(".player-1");
const player2 = new Plyr(".player-2");
const player3 = new Plyr(".player-3");
const player4 = new Plyr(".player-4");


  $(".popup-init-js").on("click", function () {

    let rel = $(this).attr("rel");
    let pop = $("div." + rel);
    pop.fadeIn(200);
    $("body").css("overflow", "hidden");
  });

  $(".close-js").on("click", function () {
    Popup.fadeOut(200);
    $("body").css("overflow", "visible");
         player1.stop();
         player2.stop();
         player3.stop();
         player4.stop();

  });

  $(document).on("mouseup", function (e) {
    if ($(".popup__overlay").is(e.target)) {
      Popup.fadeOut(200);
      $("body").removeClass("lock");
      $("body").css("overflow", "visible");
      player1.stop();
      player2.stop();
      player3.stop();
      player4.stop();
    }
  });
});
