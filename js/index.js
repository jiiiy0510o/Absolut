$(document).ready(function () {
  $(".menu_bar").click(function () {
    $(".mini_menu").slideToggle("fast");
  });

  $(".slide").click(function () {
    if ($("#chk1").is(":checked") == true) {
      $(".all_product").addClass("product_hide");
    } else if ($("#chk1").is(":checked") == false) {
      $(".all_product").removeClass("product_hide");
    }
  });

  $(".nation").click(function () {
    $(".nation_all").slideToggle("fast");
  });
  $(".nation").click(function () {
    $(".nation_all").slideToggle("fast");
  });
});
