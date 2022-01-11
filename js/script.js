$(document).ready(function(){
  $(".clickable").click(function() {
    $(".js-showing").slideToggle();
    $(".js-hidden").slideToggle();
  });
  $(".clickable1").click(function() {
    $(".op-showing").slideToggle();
    $(".op-hidden").slideToggle();
  });
});