$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).next().slideToggle(1000);
    $(this).slideToggle(900);
  });
  $(".disappear").click(function() {
    $(this).prev().slideToggle(900);
    $(this).slideToggle(1000);
  });
});
