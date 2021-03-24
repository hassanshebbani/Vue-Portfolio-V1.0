<template>
  <div @mousemove="mousemove">
    <!-- Work -->
    <div class="card">
      <div class="card-info">
        <h2>{{ heading }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="project-slider">
      <div class="project-container swiper-wrapper">
        <div
          class="project-slider__item swiper-slide"
          v-for="(value, key) in projects"
          :key="key"
        >
          <div class="project-image">
            <img :src="value.thumbnail" alt="" />
          </div>
          <div class="project-details">
            <span class="project-date">26 December 2019</span>
            <div class="project-title">{{ key }}</div>
            <div class="project-description">
              {{ value.description }}
            </div>
            <a :href="value.link" class="project-link">CHECK IT OUT</a>
          </div>
        </div>
      </div>
      <div class="project-pagination"></div>
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
        },
        "Gift Cards LB2": {
          link: "https://giftcardslb.netlify.app",
          thumbnail: require("../assets/images/giftcardslb.png"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos amet sunt cupiditate optio illo aperiam blanditiis laudantium repudiandae hic corrupti at recusandae error provident illum, repellendus ullam aspernatur quo.",
        },
        "Gift Cards LB3": {
          link: "https://giftcardslb.netlify.app",
          thumbnail: require("../assets/images/giftcardslb.png"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos amet sunt cupiditate optio illo aperiam blanditiis laudantium repudiandae hic corrupti at recusandae error provident illum, repellendus ullam aspernatur quo.",
        },
        "Gift Cards LB4": {
          link: "https://giftcardslb.netlify.app",
          thumbnail: require("../assets/images/giftcardslb.png"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos amet sunt cupiditate optio illo aperiam blanditiis laudantium repudiandae hic corrupti at recusandae error provident illum, repellendus ullam aspernatur quo.",
        },
      },
    };
  },
  mounted() {
    let projectsCarousel = document.createElement("script");
    projectsCarousel.setAttribute("src", require("../assets/js/script.js"));
    document.body.appendChild(projectsCarousel);
  },
};
</script>

<style>
.project-slider {
  width: 80vw;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 1.4rem 8rem rgba(34, 35, 58, 0.2);
  padding: 2.5rem;
  border-radius: 2.5rem;
  height: 40rem;
  transition: all 0.3s;
}
@media screen and (max-width: 992px) {
  .project-slider {
    max-width: 680px;
    height: 400px;
  }
}
@media screen and (max-width: 768px) {
  .project-slider {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }
}
@media screen and (max-height: 500px) and (min-width: 992px) {
  .project-slider {
    height: 350px;
  }
}
.project-slider__item {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .project-slider__item {
    flex-direction: column;
  }
}
.project-slider__item.swiper-slide-active .project-image img {
  opacity: 1;
  transition-delay: 0.3s;
}
.project-slider__item.swiper-slide-active .project-details > * {
  opacity: 1;
  transform: none;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(1) {
  transition-delay: 0.3s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(2) {
  transition-delay: 0.4s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(3) {
  transition-delay: 0.5s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(4) {
  transition-delay: 0.6s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(5) {
  transition-delay: 0.7s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(6) {
  transition-delay: 0.8s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(7) {
  transition-delay: 0.9s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(8) {
  transition-delay: 1s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(9) {
  transition-delay: 1.1s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(10) {
  transition-delay: 1.2s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(11) {
  transition-delay: 1.3s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(12) {
  transition-delay: 1.4s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(13) {
  transition-delay: 1.5s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(14) {
  transition-delay: 1.6s;
}
.project-slider__item.swiper-slide-active .project-details > *:nth-child(15) {
  transition-delay: 1.7s;
}
.project-image {
  width: 300px;
  flex-shrink: 0;
  height: 300px;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 20px;
  transform: translateX(-80px);
  overflow: hidden;
}
.project-image:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.8;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.3s;
}
@media screen and (max-width: 768px) {
  .project-image {
    transform: translateY(-50%);
    width: 90%;
  }
}
@media screen and (max-width: 576px) {
  .project-image {
    width: 95%;
  }
}
@media screen and (max-height: 500px) and (min-width: 992px) {
  .project-image {
    height: 270px;
  }
}
.project-details {
  padding-right: 25px;
}
@media screen and (max-width: 768px) {
  .project-details {
    margin-top: -80px;
    text-align: center;
    padding: 0 30px;
  }
}
@media screen and (max-width: 576px) {
  .project-details {
    padding: 0;
  }
}
.project-details > * {
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.4s;
}
.project-date {
  color: #7b7992;
  margin-bottom: 15px;
  display: block;
  font-weight: 500;
}
.project-title {
  font-size: 24px;
  font-weight: 700;
  color: #0d0925;
  margin-bottom: 20px;
}
.project-description {
  color: #4e4a67;
  margin-bottom: 30px;
  line-height: 1.5em;
}
.project-link {
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
}
@media screen and (max-width: 576px) {
  .project-link {
    width: 100%;
  }
}
.project-slider .swiper-container-horizontal > .swiper-pagination-bullets,
.project-slider .swiper-pagination-custom,
.project-slider .swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}
.project-pagination {
  position: absolute;
  z-index: 21;
  right: 20px;
  width: 11px !important;
  text-align: center;
  left: auto !important;
  top: 50%;
  bottom: auto !important;
  transform: translateY(-50%);
}
@media screen and (max-width: 768px) {
  .project-pagination {
    transform: translateX(-50%);
    left: 50% !important;
    top: 205px;
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.project-pagination.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 8px 0;
}
@media screen and (max-width: 768px) {
  .project-pagination.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
  }
}
.project-pagination .swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  display: block;
  border-radius: 10px;
  background: #062744;
  opacity: 0.2;
  transition: all 0.3s;
}
.project-pagination .swiper-pagination-bullet-active {
  opacity: 1;
  background: #fd3838;
  height: 30px;
  box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
}
@media screen and (max-width: 768px) {
  .project-pagination .swiper-pagination-bullet-active {
    height: 11px;
    width: 30px;
  }
}
</style>
