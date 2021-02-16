/* Включение главной функции jQuery */
$(document).ready(function () {
  /* Инициализация gallery-slider-7 в html */
  $('.gallery-slider-7').slick({
    /* Настройки слайдера */
    slidesToShow: 3, // количество показываемых слайдов
    slidesToScroll: 3, // количество слайдов прокрутки
    arrows: false /* Вкл/выкл стрелок вперед, назад */,
    dots: true /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: false /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 2500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    appendArrows: $('.button-wrapper') /* смена расположения стрелок */,
    easing: 'ease' /* Тип анимации */,
    speed: 1700 /* Скорость анимации */,
    fade: false /* Плавное растворение картинок */,
  });
  /* Инициализация gallery-slider-3 в html-END */
});
