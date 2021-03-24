/* eslint-disable no-undef */

var swiper = new Swiper('.project-slider', {
    effect: 'coverflowEffect',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: "1",
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.project-slider-next',
        prevEl: '.project-slider-prev'
    },
    pagination: {
        el: '.project-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            $('.swiper-slide-active .project__item').addClass('active');
        }
    }
});


swiper.on('slideChangeTransitionEnd', function () {
    $('.project__item').removeClass('active');

    $('.swiper-slide-active .project__item').addClass('active');

    $('.project-bg').addClass('active');
});


