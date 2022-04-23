$(document).ready(function () {
  $(".menu_bar").click(function () {
    $(".mini_menu").slideToggle("fast");
  });

  $("input").click(function () {
    $(".korea_product").toggle("500", function () {
      $(".korea_product").show();
    });
  });
});
