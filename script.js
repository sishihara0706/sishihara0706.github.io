$(function(){
  $('.top-text').fadeIn(3000);
  $('.header-list a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500)
  });
  $('.header-left a').click(function(){
    $('html,body').animate({
      'scrollTop':0
    },500)
  });
  $('.lang-btn').click(function(){
    $('.active').removeClass('active');
    var clickedIndex = $('.lang-btn').index($(this));
    $('.language').eq(clickedIndex).addClass('active');
  });

});
