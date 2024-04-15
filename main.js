$(document).ready(function () {
  var i = 0;
  var j = 0;
  $(".menu-btn").click(function () {
    if (i % 2 == 0) {
      $(".menu-btn #icon").addClass("fa-xmark");
      $(".menu-btn #icon").removeClass("fa-bars");
    }
    if (i % 2 != 0) {
      $(".menu-btn #icon").removeClass("fa-xmark");
      $(".menu-btn #icon").addClass("fa-bars");
    }
    $(".header .navbar").toggleClass("active");
    i++;
  });

  $(".theme-btn").click(function () {
    if (j % 2 == 0) {
      $(".theme-btn #icon").addClass("fa-sun");
      $(".theme-btn #icon").removeClass("fa-moon");
      $("body").addClass("active");
      $("html").addClass("active");
      $(".filter").addClass("active");
    }
    if (j % 2 != 0) {
      $(".theme-btn #icon").removeClass("fa-sun");
      $(".theme-btn #icon").addClass("fa-moon");
      $("body").removeClass("active");
      $("html").removeClass("active");
      $(".filter").removeClass("active");
    }
    j++;
  });

  $(window).on("scroll", function () {
    $(".menu-btn #icon").removeClass("fa-xmark");
    $(".menu-btn #icon").addClass("fa-bars");
    $(".header .navbar").removeClass("active");

    let maxHeight = document.body.scrollHeight - window.innerHeight;
    let per = (window.scrollY / maxHeight) * 100;
    $(".header .scroll").css("width", per + "%");
  });
});
