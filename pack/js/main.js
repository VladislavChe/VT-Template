/***************************************************/
/******************  Коментарии  *******************/
/***************************************************/

/* Инициализация gallery-slider-1 в html */
/* Инициализация gallery-slider-2-1 в html */
/* Инициализация gallery-slider-2-2 в html */
/* Инициализация gallery-slider-3 в html */
/* Инициализация gallery-slider-4 в html */
/* Инициализация gallery-slider-5 в html */
/* Скорость автопрокрутки */
/* Скорость анимации */
/* Вкл/выкл точек (булетов) */
/* Вкл/выкл автопрокрутки */

/***************************************************/
/******************  Коментарии  *******************/
/***************************************************/

/* Включение главной функции jQuery */
$(document).ready(function () {
  /* Инициализация gallery-slider-1 в html */
  $('.gallery-slider').slick({
    /* Настройки слайдера */
    arrows: true /* Вкл/выкл стрелок вперед, назад */,
    dots: true /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: true /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 2500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    appendArrows: $('.button-wrapper') /* смена расположения стрелок */,
    easing: 'ease' /* Тип анимации */,
    speed: 1000 /* Скорость анимации */,
  });

  /* Запуск слайдера по клику на кнопку Play */
  $('.gallery-slider-play').click(function (event) {
    $('.gallery-slider').slick('slickPlay');
  });

  /* Остановка слайдера по клику на кнопку Stop */
  $('.gallery-slider-stop').click(function (event) {
    $('.gallery-slider').slick('slickPause');
  });
  /* Инициализация gallery-slider-1 в html-END */

  /* Инициализация gallery-slider-2 в html */
  /* Инициализация gallery-slider-2-1 в html */
  $('.gallery-slider-2-1').slick({
    /* Настройки слайдера */
    arrows: false /* Вкл/выкл стрелок вперед, назад */,
    dots: false /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: false /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 2500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    appendArrows: $('.button-wrapper') /* смена расположения стрелок */,
    easing: 'ease' /* Тип анимации */,
    speed: 1000 /* Скорость анимации */,
    slidesToShow: 1 /* колличество слайдов для показа */,
    slidesToScroll: 1 /* колличество слайдов для скролла */,
    asNavFor: '.gallery-slider-2-2' /* связка слайдеров */,
  });
  /* Инициализация gallery-slider-2-1 в html-END */

  /* Инициализация gallery-slider-2-2 в html */
  $('.gallery-slider-2-2').slick({
    /* Настройки слайдера */
    arrows: false /* Вкл/выкл стрелок вперед, назад */,
    dots: false /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: false /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 2500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    appendArrows: $('.button-wrapper') /* смена расположения стрелок */,
    easing: 'ease' /* Тип анимации */,
    speed: 1000 /* Скорость анимации */,
    slidesToShow: 5 /* колличество слайдов для показа */,
    slidesToScroll: 1 /* колличество слайдов для скролла */,
    asNavFor: '.gallery-slider-2-1' /* связка слайдеров */,
    focusOnSelect: true /* переключаться на выбранный слайд */,
    variableWidth: false,
    centerMode: true /* текущий слайд всегда по центру */,
  });
  /* Инициализация gallery-slider-2 в html-END */

  /* Инициализация gallery-slider-3 в html */
  $('.gallery-slider-3').slick({
    /* Настройки слайдера */
    slidesToShow: 3,
    slidesToScroll: 3,
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

  /* Инициализация gallery-slider-4 в html */
  $('.gallery-slider-4').slick({
    /* Настройки слайдера */
    arrows: false /* Вкл/выкл стрелок вперед, назад */,
    dots: false /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: false /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 1500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
    easing: 'ease' /* Тип анимации */,
    speed: 1700 /* Скорость анимации */,
    fade: true /* Плавное растворение картинок */,
  });
  /* Инициализация gallery-slider-4 в html-END */

  /* Инициализация gallery-slider-5-1 в html */
  $('.gallery-slider-5-1').slick({
    /* Настройки слайдера */
    arrows: false /* Вкл/выкл стрелок вперед, назад */,
    dots: false /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: false /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 2500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
    easing: 'ease' /* Тип анимации */,
    speed: 1700 /* Скорость анимации */,
    fade: true /* Плавное растворение картинок */,
  });

  /* Запуск и остановка слайдера по наведению мыши */

  $(function () {
    var timeout;
    function nextSlide() {
      $('.gallery-slider-5-1').slick('slickNext');
      timeout = setTimeout(function () {
        nextSlide();
      }, 3000);
    }
    function stopAutoplay(timeout) {
      window.clearTimeout(timeout);
    }
    $('.gallery-slider-5-1').on('mouseenter', function () {
      nextSlide();
    });

    $('.gallery-slider-5-1').mouseleave(function (event) {
      $('.gallery-slider-5-1').slick('slickPause');
      $('.gallery-slider-5-1').slick('goTo', 0);
      stopAutoplay(timeout);
    });
  });

  /* Инициализация gallery-slider-5-1 в html-END */

  /* Инициализация gallery-slider-5-2 в html */
  $('.gallery-slider-5-2').slick({
    /* Настройки слайдера */
    arrows: false /* Вкл/выкл стрелок вперед, назад */,
    dots: false /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: false /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 1500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
    easing: 'ease' /* Тип анимации */,
    speed: 1700 /* Скорость анимации */,
    fade: true /* Плавное растворение картинок */,
  });

  /* Запуск и остановка слайдера по наведению мыши */

  $(function () {
    var timeout;
    function nextSlide() {
      $('.gallery-slider-5-2').slick('slickNext');
      timeout = setTimeout(function () {
        nextSlide();
      }, 3000);
    }
    function stopAutoplay(timeout) {
      window.clearTimeout(timeout);
    }
    $('.gallery-slider-5-2').on('mouseenter', function () {
      nextSlide();
    });

    $('.gallery-slider-5-2').mouseleave(function (event) {
      $('.gallery-slider-5-2').slick('slickPause');
      $('.gallery-slider-5-2').slick('goTo', 0);
      stopAutoplay(timeout);
    });
  });

  /* Инициализация gallery-slider-5-2 в html-END */

  /* Инициализация gallery-slider-5-3 в html */
  $('.gallery-slider-5-3').slick({
    /* Настройки слайдера */
    arrows: false /* Вкл/выкл стрелок вперед, назад */,
    dots: false /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: false /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 1500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
    easing: 'ease' /* Тип анимации */,
    speed: 1700 /* Скорость анимации */,
    fade: true /* Плавное растворение картинок */,
  });

  /* Запуск и остановка слайдера по наведению мыши */

  $(function () {
    var timeout;
    function nextSlide() {
      $('.gallery-slider-5-3').slick('slickNext');
      timeout = setTimeout(function () {
        nextSlide();
      }, 3000);
    }
    function stopAutoplay(timeout) {
      window.clearTimeout(timeout);
    }
    $('.gallery-slider-5-3').on('mouseenter', function () {
      nextSlide();
    });

    $('.gallery-slider-5-3').mouseleave(function (event) {
      $('.gallery-slider-5-3').slick('slickPause');
      $('.gallery-slider-5-3').slick('goTo', 0);
      stopAutoplay(timeout);
    });
  });

  /* Инициализация gallery-slider-5-3 в html-END */

  /* Инициализация gallery-slider-5-4 в html */
  $('.gallery-slider-5-4').slick({
    /* Настройки слайдера */
    arrows: false /* Вкл/выкл стрелок вперед, назад */,
    dots: false /* Вкл/выкл точек (булетов) */,
    adaptiveHeight: false /* Вкл/выкл адаптивной высоты */,
    autoplay: false /* Вкл/выкл автопрокрутки */,
    autoplaySpeed: 1500 /* Скорость автопрокрутки */,
    waitForAnimate: false /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */,
    // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
    easing: 'ease' /* Тип анимации */,
    speed: 1700 /* Скорость анимации */,
    fade: true /* Плавное растворение картинок */,
  });

  /* Запуск и остановка слайдера по наведению мыши */

  $(function () {
    var timeout;
    function nextSlide() {
      $('.gallery-slider-5-4').slick('slickNext');
      timeout = setTimeout(function () {
        nextSlide();
      }, 3000);
    }
    function stopAutoplay(timeout) {
      window.clearTimeout(timeout);
    }
    $('.gallery-slider-5-4').on('mouseenter', function () {
      nextSlide();
    });

    $('.gallery-slider-5-4').mouseleave(function (event) {
      $('.gallery-slider-5-4').slick('slickPause');
      $('.gallery-slider-5-4').slick('goTo', 0);
      stopAutoplay(timeout);
    });
  });

  /* Инициализация gallery-slider-5-4 в html-END */

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
