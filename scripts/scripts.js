// Анимация появления фотографии и данных
$(window).on('load', () => {
  $('.photo').find('img').animate({opacity: 1}, 1000);
  $('.data').animate({left: 0}, 700);
});
// Анимация появления примеров 
$(window).scroll(() => {
  if($(window).height() + $(window).scrollTop() > $('.examples__header').offset().top){
    $('.examples__blocks').addClass('animate');
  }
})
// Анимация скроллинга примеров
const el = $('.examples');
$(window).scroll(() => {
  const percentHeigtEl = el.outerHeight() / 100;
  const winScr = $(window).height() + $(window).scrollTop() - el.offset().top - 50;
  const scrollPercent = winScr / percentHeigtEl;
  $('.scroll').css('width', scrollPercent + '%');
});
// Плавная прокрутка
$("body").on('click', '[href*="#"]', e => {
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - 50 }, 1000);
  e.preventDefault();
});