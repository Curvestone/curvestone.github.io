$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('scrolled');
  } else {
    $('#header').removeClass('scrolled');
  }
});

$(document).ready(function(){
  $('.navbar-toggler').on('click', function () {
    if($('.navbar-collapse').hasClass('show')) {
      $('.navbar').removeClass('dark-bg');
      console.log("1");
    } else {
      $('.navbar').addClass('dark-bg');
      console.log("0");
    }
  });

  $('.parallax-background').parallaxBackground();
  $('.parallax-button').parallaxBackground({
      event: 'mouse_move',
      animation_type: 'shift',
      animate_duration: 2
  });
});

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.moving-bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$("#contact-us").on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $("#contact-us").width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $("#contact-us").height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (20 * lMouseY) / 100;
  //console.log($(window).height(), e.clientY, lMouseY, lFollowY);
});

moveBackground();

var popup = new tingle.modal();
$('.card_1').on('click', function(){
  popup.setContent(document.querySelector('#card_1_text').innerHTML);
  popup.open();
});

$('.card_2').on('click', function(){
  popup.setContent(document.querySelector('#card_2_text').innerHTML);
  popup.open();
});

$('.card_3').on('click', function(){
  popup.setContent(document.querySelector('#card_3_text').innerHTML);
  popup.open();
});

$('.card_4').on('click', function(){
  popup.setContent(document.querySelector('#card_4_text').innerHTML);
  popup.open();
});

$('.card_5').on('click', function(){
  popup.setContent(document.querySelector('#card_5_text').innerHTML);
  popup.open();
});

$('.card_6').on('click', function(){
  popup.setContent(document.querySelector('#card_6_text').innerHTML);
  popup.open();
});
