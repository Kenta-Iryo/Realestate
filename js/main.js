$(document).ready(function () {
  $('.fv__slider').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });
});

$(".hoge-item .img-box > img").click(function () {
  var src = $(this).attr("src");
  var cap = $(this).attr("alt");
  $(".modal-block").fadeIn().css("display", "flex");

  $("#popup").attr("src", src);
  $(".caption").text(cap);
});

$(".modal-block").click(function (e) {
  // モーダルの外側をクリックした場合にのみモーダルを閉じる
  if (e.target === this) {
    $(this).css("display", "none");
  }
});

$(".img-section > span").click(function () {
  // モーダルを閉じるボタンがクリックされた場合にモーダルを閉じる
  $(".modal-block").css("display", "none");
});