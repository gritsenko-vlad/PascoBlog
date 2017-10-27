
$(document).ready(function () {

  $('.mobile-menu-icon').click(function() {
    $('.top-menu').toggle()
  });

  $('.left-post').click(function(){
    $('.left-post').addClass('active')
    $('.right-post').removeClass('active')
  });

  $('.right-post').click(function(){
    $('.right-post').addClass('active')
    $('.left-post').removeClass('active')
  });

});
