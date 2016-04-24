/* eslint-disable quotes */

$(document).ready(function(){
  "use strict";
  //Get position of the bracket nav
  var bracketNavPos = $("#bracket-guide").offset();
  //Listen to scroll events
  $(window).scroll(function(){
    var $bracketNav = $("#bracket-guide");
    //Toggle bracket-nav-scroll class passed on position
    if ($(this).scrollTop() >= bracketNavPos.top){
      $bracketNav.toggleClass("bracket-nav-scroll", true);
    }
    else {
      $bracketNav.toggleClass("bracket-nav-scroll", false);
    }
  });
});
