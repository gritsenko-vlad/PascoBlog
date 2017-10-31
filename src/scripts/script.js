$(document).ready(function () {

  $('.left-post').click(function(){
    $('.left-post').addClass('active')
    $('.right-post').removeClass('active')
  });

  $('.right-post').click(function(){
    $('.right-post').addClass('active')
    $('.left-post').removeClass('active')
  });

  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('active-hamburger-icon');
    $('nav').toggleClass('active-nav');
  });

});
