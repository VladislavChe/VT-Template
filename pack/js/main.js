/* Включение главной функции jQuery */
$(document).ready(function () {
  /* Инициализация слайдера в html */
  $('.gallery').slick({
    /* Настройки слайдера */
    slidesToShow: 5 /* Колличество слайдов для показа */,
    arrows: true /* Вкл/выкл стрелок вперед, назад */,
    appendArrows: $('.arrows-2') /* Куда переносить стрелки */,
    dots: false /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: true /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 2500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    cssEase: 'ease' /* Тип анимации */,
    speed: 1700 /* Скорость анимации */,
    fade: false /* Плавное растворение картинок */,
  });
  /* Инициализация слайдера в html-END */
  /* Методы слайдера */
  /* Настройка левой кнопки */
  $('.arrows-l').click(function (event) {
    $('.gallery').slick('slickPrev');
  });
  /* Настройка правой кнопки */
  $('.arrows-r').click(function (event) {
    $('.gallery').slick('slickNext');
  });
  /* Методы слайдера - END */
});
