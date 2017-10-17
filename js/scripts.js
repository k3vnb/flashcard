$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).next().slideToggle(1000);
    $(this).slideToggle(900);
    $(this).parent().css('background-color', 'lightgreen');
  });
  $(".disappear").click(function() {
    $(this).prev().slideToggle(900);
    $(this).slideToggle(1000);
    $(this).parent().css("background-color", "white");
  });
});
