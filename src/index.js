import $ from 'jquery';
import Plyr from "plyr";
 
// ==============================================

// import "mixitup";
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'


import './js/common'
// import "./js/header";
// import './js/modal'
// import './js/contacts'
// import './js/tabs'



// bootstrap;
// import "bootstrap";
// import "popper.js";
// import "bootstrap/js/dist/tab";
// import "bootstrap/js/dist/button";
// import "bootstrap/js/dist/collapse";

// slick;
// import "slick-carousel";
import "./js/jquery.nicescroll.min";  
import "./js/slick.js";  
import "./js/mySlick.js";
import './css/slick.css';

// import "./js/plyr.js";
import './css/fonts.css'
import './css/plyr.css';

// import './css/main.css';


// главный файл стилей
import './sass/style.sass';

// ==================================
// ==================================
// ==================================

import "./js/tabs";
import "./js/modal";



 $(document).ready(function () {
   var nice = $("html").niceScroll(); // The document page (body)

   $(".scroll-block").html($(".scroll-block").html() + " ");

   $(".scroll-block").niceScroll({
     cursorborder: "",
     cursorcolor: "#29A7DC",
     boxzoom: true,
   }); // First scrollable DIV

 });

 