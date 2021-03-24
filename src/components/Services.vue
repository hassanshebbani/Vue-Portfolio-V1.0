<template>
  <div>
    <!-- Services Section -->
    <div class="card-services">
      <div class="card-services-info">
        <h2>{{ heading }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="services">
      <div class="service" v-for="(value, key) in services" :key="key">
        <div class="services-card" onclick="this.classList.toggle('expanded')">
          <img class="label" :src="value.icon" :alt="value.alt" />
          <div class="text1">
            <div class="text-content">
              <h1 class="title">{{ key }}</h1>
              <div class="body-text">{{ value.description }}</div>
            </div>
          </div>
          <svg class="chevron" viewBox="0 0 100 35" width="30">
            <path
              d="M5 30L50 5l45 25"
              fill="none"
              stroke="#000"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- End of Services Section-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "Let's get in touch!",
      description:
        "Down below you'll find the list of services I offer. When you find something that I can help you with, don't hesistate to contact me so that we can work something out. You're also welcome to chat and get to know me better :)",
      services: {
        "Landing Pages": {
          icon: require("../assets/icons/landing-page.svg"),
          description:
            "Planning an event for a campaign or a product you're about to launch? Or maybe thinking about establishing your online presence?",
          alt: "Landing Pages",
        },
        "UI & UX": {
          icon: require("../assets/icons/user-experience.svg"),
          description:
            "Let me help you enhance your user's visual and interactive experience. That's how you retain delighted and excited users!",
          alt: "UI & UX",
        },
        "Audit & Maintenance": {
          icon: require("../assets/icons/tool-box.svg"),
          description:
            "Some weird things are happening as if your site is being haunted? Allow me to exterminate those nasty bugs!",
          alt: "Audit & Maintenance",
        },
        "Mockups & Templates": {
          icon: require("../assets/icons/web-design.svg"),
          description:
            "You shouldn't collect feedback by launching your site head-on. Let's build a prototype first!",
          alt: "Mockups & Templates",
        },
      },
    };
  },
};
</script>

<style>
.card-services {
  display: flex;
  width: 100%;
  flex-direction: row;
  background: linear-gradient(
    to right top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4)
  ) !important;
  border-radius: 1rem;
  margin: 1rem 0rem;
  padding: 1.5rem;
  box-shadow: 0rem 0rem 10rem rgba(255, 11, 222, 0.185);
  margin-bottom: 5rem;
  justify-content: space-between;
}
.card-services-info h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.card-services-info p {
  font-size: 1.9rem;
  line-height: 3rem;
}
.services {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 1 20rem;
}
.services-card {
  background: linear-gradient(
    to right top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.185)
  );
  border-radius: 0.8rem;
  box-shadow: 0rem 0rem 10rem rgba(255, 0, 221, 0.185),
    0 6px 3rem rgba(0, 0, 0, 0.23);
  cursor: pointer;
  height: 30rem;
  margin: 2rem;
  padding: 0 2rem;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.025);
  text-align: center;
  transition: opacity height 1000ms;
  overflow: hidden;
  width: 26rem;
}
.services-card:hover {
  transition: 0.5s;
  transition-property: height;
}
.focus-card {
  opacity: 1;
}

.services-card.expanded {
  height: 48rem;
  overflow: visible;
}
.label {
  width: 15rem;
  height: 15rem;
  margin-top: 6rem;
  transform: translateY(1rem);
  transition: transform 1000ms;
  animation: ser-icon 1s infinite alternate-reverse;
}
.body-text {
  opacity: 1;
  font-size: 1.9rem;
}
.services-card.expanded .label {
  transform: translateY(0);
}
.text1 {
  clip-path: polygon(0% 100%, 0 -90%, 50% -5%, 100% -90%, 100% 100%);
  -webkit-clip-path: polygon(0% 100%, 0 -90%, 50% -5%, 100% -90%, 100% 100%);
  transition: clip-path 1000ms;
}
.services-card.expanded .text1 {
  clip-path: polygon(0% 100%, 0 -100%, 50% -15%, 100% -100%, 100% 100%);
  -webkit-clip-path: polygon(0% 100%, 0 -100%, 50% -15%, 100% -100%, 100% 100%);
}

.text-content {
  transform: translateY(-65rem);
  transition: transform 1000ms;
}
.services-card.expanded .text-content {
  transform: translateY(-1.5rem);
}
.chevron {
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 1.5rem);
  transform-origin: 50%;
  transform: rotate(180deg);
  transition: transform 1000ms;
}
.services-card.expanded .chevron {
  transform: rotate(0deg);
}
.title {
  font-size: 2.8rem;
  font-weight: 900;
  margin: 3rem 0 2rem;
}

/* ******************** MEDIA QUERIES ******************* */

@media (max-width: 767px) {
  .services-card {
    left: calc(50% - 20px);
    transform: translateX(-50%);
  }
}

@media (max-width: 620px) {
  .card-services-info h2 {
    font-size: 1.8rem;
  }
  .card-services-info p {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 500;
  }
  .services-card {
    height: 15rem;
    margin: 2rem 1rem;
    padding: 0 2rem;
    width: 18rem;
  }
  .services-card {
    left: calc(50% - 20px);
    transform: translateX(-50%);
  }

  .services-card.expanded {
    height: 32rem;
  }
  .label {
    width: 7rem;
    height: 7rem;
    margin-top: 3rem;
  }
  .body-text {
    font-size: 1.3rem;
    font-weight: 500;
  }
  .title {
    font-size: 1.7rem;
  }
}

/* ******************** KEYFRAMES ********************/

@keyframes ser-icon {
  from {
  }
  to {
    transform: perspective(100rem);
  }
}
@keyframes service-hover {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(1rem);
  }
}
</style>
