$(document).ready(function(){
  var bracketNavPos = $("#bracket-guide").offset();
  $(window).scroll(function(){
    var $bracketNav = $("#bracket-guide");
    if ($(this).scrollTop() >= bracketNavPos.top){
      $bracketNav.toggleClass("bracket-nav-scroll", true);
    }
    else {
      $bracketNav.toggleClass("bracket-nav-scroll", false);
    }
  });
});
