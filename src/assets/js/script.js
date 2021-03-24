var swiper = new Swiper('.project-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.project-pagination',
        clickable: true,
      }
    });

    