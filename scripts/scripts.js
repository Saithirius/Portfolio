$(window).on('load', () => {
  $('.photo').find('img').animate({opacity: 1}, 1000);
  $('.data').animate({left: 0}, 700);
});
// Анимация появления примеров 
$(window).scroll(function() {
  if($(window).height() + $(window).scrollTop() > $('.examples__header').offset().top){
    $('.examples__blocks').addClass('animate');
  }
})

// Плавная прокрутка
$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - 50 }, 1000);
  e.preventDefault();
});

// //Прелоудер
// $(window).on('load', () => {
//   $('.preloader').addClass('loaded');
//   window.setTimeout(() => {$('.preloader').css('display', 'none');}, 800);
// });	
