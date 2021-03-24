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
      <!-- <div class="project-bg"></div> -->

      <div class="project-slider">
        <div class="project-slider__wrp swiper-wrapper">
          <div
            class="project-slider__item swiper-slide"
            v-for="(value, key) in projects"
            :key="key"
          >
            <a :href="value.link" target="_blank" class="project__item">
              <div class="project-heading">
                <div class="project__title">
                  {{ key }}
                </div>
                <div class="project-date">
                  {{ value.date }}
                </div>
              </div>

              <p class="project__txt">
                {{ value.description }}
              </p>

              <div class="project-images">
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
              <img
                class="arrow-img-prev"
                src="../assets/icons/arrow.svg"
                alt=""
              />
            </button>
            <button class="project-slider__arrow project-slider-next">
              <img
                class="arrow-img-next"
                src="../assets/icons/arrow.svg"
                alt=""
              />
            </button>
          </div>

          <div class="project-slider__pagination"></div>
        </div>
      </div>
    </div>
    <br /><br />

    <!-- End of Work Section-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "Wanna make it to my list?",
      description:
        "Here are some of the projects and work I've done before. Don't let anyone talk you out of an idea you're passionate or confident about. ",
      projects: {
        "Gift Cards LB": {
          link: "https://giftcardslb.netlify.app",
          thumbnail: require("../assets/images/giftcardslb.png"),
          description:
            "One of the best leading entertainment service providers in Lebanon. Looking for Netflix? Google Play, Steam or PlayStation gift cards?? Crypto currencies and Virutal Visa Cards?! You name it, they most likely got it!",
          date: "Jan 17, 2021",
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
.card {
  background: linear-gradient(
    to right top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4)
  ) !important;
}
.card-info h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.card-info p {
  font-size: 1.9rem;
  line-height: 3rem;
}
a,
a:hover {
  text-decoration: none;
  color: black;
}
.arrow-img-prev,
.arrow-img-next {
  width: 90%;
  opacity: 0.5;
}
.arrow-img-prev {
  transform: rotateY(180deg);
}
.project-images {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.project__img {
  border-radius: 1rem;
  height: 90%;
  margin-top: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 70%;
  transition: all 0.3s;
  transform-origin: 0% 0%;
}
.project__img img {
  max-width: 100%;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 10rem rgba(255, 0, 221, 0.185),
    0 6px 3rem rgba(0, 0, 0, 0.23);
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
  border-radius: 2rem;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.4)
  ) !important;
  backdrop-filter: blur(1rem);
  box-shadow: 0rem 0rem 10rem rgba(255, 0, 221, 0.185);
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
.about-me {
  overflow: hidden;
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
  background: none;
  backdrop-filter: blur(2rem);
  padding: 1rem;
  border: none;
  display: inline-flex;
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0rem 0rem 10rem rgba(255, 0, 221, 0.185);

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
  box-shadow: 0rem 0rem 10rem rgba(255, 0, 221, 0.185);
  width: 13px;
  height: 1rem;
  display: inline-block;
  background: rgb(255, 0, 234);
  opacity: 0.2;
  margin: 0 5px;
  border-radius: 2rem;
  transition: opacity 0.5s, background-color 0.5s, width 0.5s;
  transition-delay: 0.5s, 0.5s, 0s;
}
.project-slider__pagination .swiper-pagination-bullet-active {
  opacity: 1;
  background: rgb(0, 162, 255);
  box-shadow: 0rem 0rem 10rem rgba(255, 0, 221, 0.185);
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
.project-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.project-date {
  font-size: 3.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.project__title {
  font-size: 3.2rem;
  font-weight: 500;
  opacity: 0.7;
  margin-top: 1rem;
  margin-bottom: 15px;
  transition: opacity 0.3s;
}

.project__txt {
  margin: 1rem 0;
  width: 90%;
  font-weight: 500;
  line-height: 3rem;
  font-size: 1.9rem;
  opacity: 0.7;
  transition: opacity 0.3s;
}

@media screen and (max-width: 768px) {
  .project-slider {
    max-width: 50rem;
    height: 100rem;
  }
  .project-slider__arrow {
    top: 0;
  }
  .project-images {
    flex-direction: column;
  }
  .project__img {
    width: 30rem;
  }
}

/**************** Media Queries ******************* */

@media screen and (max-width: 1780px) {
  .project-slider {
    max-width: 65vw;
    margin-bottom: 0 !important;
    height: 50rem;
    margin-top: 0rem;
  }
  .card-info h2 {
    font-size: 2.5rem;
    margin-bottom: 0rem;
  }
  .card-info p {
    font-size: 1.8rem;
  }

  .project-slider__arrow.project-slider-prev {
    margin-left: -1rem;
    transform: translateY(-160%);
  }
  .project-slider__arrow.project-slider-next {
    margin-right: -1rem;
    transform: translateY(-160%);
  }
  .project-slider__pagination .swiper-pagination-bullet {
    transform: translateY(-500%);
  }
  .project-slider__pagination .swiper-pagination-bullet-active {
    width: 2.5rem;
  }
  .project-slider__arrow {
    width: 4.5rem;
    height: 4.5rem;
  }
  .project-images {
    flex-direction: column;
  }
  .project__img {
    width: 50vw;
  }
  .project__title {
    font-size: 3rem;
  }
  .project__txt {
    font-size: 1.8rem;
  }
}
@media screen and (max-width: 1024px) {
  .project-slider {
    max-width: 65vw;
    margin-bottom: 0 !important;
    height: 50rem;
    margin-top: 0rem;
  }
  .card-info h2 {
    font-size: 2.2rem;
    margin-bottom: 0rem;
  }
  .card-info p {
    font-size: 1.8rem;
  }

  .project-slider__arrow.project-slider-prev {
    margin-left: -1rem;
    transform: translateY(-160%);
  }
  .project-slider__arrow.project-slider-next {
    margin-right: -1rem;
    transform: translateY(-160%);
  }
  .project-slider__pagination .swiper-pagination-bullet {
    transform: translateY(-500%);
  }
  .project-slider__pagination .swiper-pagination-bullet-active {
    width: 2.5rem;
  }
  .project-slider__arrow {
    width: 4.5rem;
    height: 4.5rem;
  }
  .project-images {
    flex-direction: column;
  }
  .project__img {
    width: 50vw;
  }
  .project__title {
    font-size: 2.5rem;
  }
  .project__txt {
    font-size: 1.8rem;
  }
  .project-date {
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 625px) {
  .project-slider {
    height: 55rem;
  }
  .card-info p {
    font-size: 1.4rem;
    line-height: 2rem;
    margin-top: 1rem;
    font-weight: 500;
  }
  .project__txt {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 500;
  }
  .project__title {
    font-size: 1.8rem;
  }
  .project-date {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

@media screen and (max-width: 400px) {
  .project-slider {
    max-width: 65vw;
    margin-bottom: 0 !important;
    height: 50rem;
    margin-top: 3rem;
  }
  .card-info h2 {
    font-size: 1.8rem;
    margin-bottom: 0rem;
  }
  .card-info p {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  .project__item {
    padding: 2rem;
  }

  .project-slider__arrow.project-slider-prev {
    margin-left: -1rem;
    transform: translateY(-160%);
  }
  .project-slider__arrow.project-slider-next {
    margin-right: -1rem;
    transform: translateY(-160%);
  }
  .project-slider__pagination .swiper-pagination-bullet {
    transform: translateY(-450%);
  }
  .project-slider__pagination .swiper-pagination-bullet-active {
    width: 2.5rem;
  }
  .project-slider__arrow {
    width: 4rem;
    height: 4rem;
  }
  .project-images {
    flex-direction: column;
  }
  .project__img {
    width: 20rem;
  }
  .project__title {
    font-size: 1.8rem;
  }
  .project__txt {
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 500;
  }
}
</style>
