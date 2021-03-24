<template>
  <div @mousemove="mousemove">
    <!-- Work -->
    <div class="card">
      <div class="card-info">
        <h2>{{ heading }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>

    <div class="wrapper">
      <div class="project-bg"></div>

      <div class="project-slider">
        <div class="project-slider__wrp swiper-wrapper">
          <div
            class="project-slider__item swiper-slide"
            v-for="(value, key) in projects"
            :key="key"
          >
            <a :href="value.link" target="_blank" class="project__item">
              <div class="project-date">
                <span class="project-date_day">{{ value.dateDay }}</span>
                <span class="project-date_month">{{ value.dateMonth }}</span>
              </div>
              <div class="project__title">
                {{ key }}
              </div>

              <p class="project__txt">
                {{ value.description }}
              </p>

              <div class="project-images">
                <div class="project__img">
                  <img :src="value.thumbnail" :alt="key" />
                </div>
                <div class="project__img">
                  <img :src="value.thumbnail" :alt="key" />
                </div>
                <div class="project__img">
                  <img :src="value.thumbnail" :alt="key" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="project-slider__ctr">
          <div class="project-slider__arrows">
            <button class="project-slider__arrow project-slider-prev">
              <span class="icon-font">
                <svg class="icon icon-arrow-left">
                  <use xlink:href="#icon-arrow-left"></use>
                </svg>
              </span>
            </button>
            <button class="project-slider__arrow project-slider-next">
              <span class="icon-font">
                <svg class="icon icon-arrow-right">
                  <use xlink:href="#icon-arrow-right"></use>
                </svg>
              </span>
            </button>
          </div>

          <div class="project-slider__pagination"></div>
        </div>
      </div>
    </div>

    <!-- End of Work Section-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "Let's get in touch!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos amet sunt cupiditate optio illo aperiam blanditiis laudantium repudiandae hic corrupti at recusandae error provident illum, repellendus ullam aspernatur quo.",
      projects: {
        "Gift Cards LB": {
          link: "https://giftcardslb.netlify.app",
          thumbnail: require("../assets/images/giftcardslb.png"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos amet sunt cupiditate optio illo aperiam blanditiis laudantium repudiandae hic corrupti at recusandae error provident illum, repellendus ullam aspernatur quo.",
          dateDay: "23",
          dateMonth: "July",
        },
        "Gift Cards LB2": {
          link: "https://google.com",
          thumbnail: require("../assets/images/giftcardslb.png"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos amet sunt cupiditate optio illo aperiam blanditiis laudantium repudiandae hic corrupti at recusandae error provident illum, repellendus ullam aspernatur quo.",
          dateDay: "23",
          dateMonth: "July",
        },
        "Gift Cards LB3": {
          link: "https://facebook.com",
          thumbnail: require("../assets/images/giftcardslb.png"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos amet sunt cupiditate optio illo aperiam blanditiis laudantium repudiandae hic corrupti at recusandae error provident illum, repellendus ullam aspernatur quo.",
          dateDay: "23",
          dateMonth: "July",
        },
        "Gift Cards LB4": {
          link: "https://instagram.com",
          thumbnail: require("../assets/images/giftcardslb.png"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos amet sunt cupiditate optio illo aperiam blanditiis laudantium repudiandae hic corrupti at recusandae error provident illum, repellendus ullam aspernatur quo.",
          dateDay: "23",
          dateMonth: "July",
        },
      },
    };
  },
  mounted() {
    let projectsCarousel = document.createElement("script");
    projectsCarousel.setAttribute("src", require("../assets/js/work3.js"));
    document.body.appendChild(projectsCarousel);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,700&subset=latin-ext");
html {
  position: relative;
  overflow-x: hidden !important;
}

body {
  font-family: "Quicksand", sans-serif;
}


a,
a:hover {
  text-decoration: none;
  color: black;
}
.project-images {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.project__img {
  border-radius: 1rem;
  box-shadow: 0 6px 26px 6px rgba(0, 0, 0, 0.25);
  height: 100%;
  margin-top: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 100%;
  transition: all 0.3s;
  transform-origin: 0% 0%;
}
.project__img img {
  max-width: 100%;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.project-bg {
  width: 30rem;
  height: 50rem;
  position: absolute;
  top: 3rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 6px 26px 6px rgba(0, 0, 0, 0.25);
  opacity: 0;
  transition: all 0.3s;
  left: -3rem;
}
.project-bg.active {
  left: 0;
  top: 0;
  opacity: 1;
}

.project-slider {
  z-index: 2;
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
}
.project-slider__wrp {
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 2;
}
.project-slider__item {
  width: 40rem;
  flex-shrink: 0;
}

.project-slider__item.swiper-slide {
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
}
.project-slider__item.swiper-slide-active,
.project-slider__item.swiper-slide-prev,
.project-slider__item.swiper-slide-next {
  opacity: 1;
  pointer-events: auto;
}
.project-slider__ctr {
  position: relative;
  z-index: 12;
}
.project-slider__arrow {
  background: #fff;
  border: none;
  display: inline-flex;
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 26px 6px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  z-index: 12;
  cursor: pointer;
  outline: none !important;
}
.project-slider__arrow:focus {
  outline: none !important;
}
.project-slider__arrow .icon-font {
  display: inline-flex;
}
.project-slider__arrow.project-slider-prev {
  left: 15px;
  transform: translateY(-50%);
}
.project-slider__arrow.project-slider-next {
  right: 15px;
  transform: translateY(-50%);
}
.project-slider__pagination {
  text-align: center;
  margin-top: 5rem;
}
.project-slider__pagination .swiper-pagination-bullet {
  width: 13px;
  height: 1rem;
  display: inline-block;
  background: #fff;
  opacity: 0.2;
  margin: 0 5px;
  border-radius: 2rem;
  transition: opacity 0.5s, background-color 0.5s, width 0.5s;
  transition-delay: 0.5s, 0.5s, 0s;
}
.project-slider__pagination .swiper-pagination-bullet-active {
  opacity: 1;
  background: #ffffff;
  width: 10rem;
  transition-delay: 0s;
}

.project__item {
  padding: 4rem;
  color: #fff;
  border-radius: 1rem;
  display: block;
  transition: all 0.3s;
}

.project__item.active {
  color: #222222;
}
.project__item.active .project-date,
.project__item.active .project__title,
.project__item.active .project__txt {
  opacity: 1;
}
.project__item.active .project__img {
  box-shadow: none;
}

.project-date {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid;
  display: inline-block;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.project-date_day {
  display: block;
  font-size: 32px;
  margin-bottom: 1rem;
  font-weight: 500;
}

.project-date_month {
  font-size: 16px;
}
.project__title {
  font-size: 25px;
  font-weight: 500;
  opacity: 0.7;
  margin-top: 1rem;
  margin-bottom: 15px;
  transition: opacity 0.3s;
}

.project__txt {
  margin: 1rem 0;
  line-height: 1.6em;
  font-size: 15px;
  opacity: 0.7;
  transition: opacity 0.3s;
}

</style>
