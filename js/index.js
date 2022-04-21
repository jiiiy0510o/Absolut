$(document).ready(function () {
  $(".menu_bar i").toggle(
    function () {
      $("header").css("height", "100vh");
      $("mini_menu").slideDown();
    },
    function () {
      $("header").css("height", "50px");
      $("mini_menu").slideUp();
    }
  );
});
