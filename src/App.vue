<template>
  <div>
    <main>
      <section class="glass-main">
        <div class="dashboard">
          <div class="me">
            <div class="my-img">
              <img class="me-img" src="./assets/images/copy3.jpg" alt="" />
            </div>

            <h2>{{ myName }}</h2>
            <p>{{ myOccupation }}</p>
          </div>
          <div class="portfolio-links">
            <div class="link" v-for="(value, key) in dashboardIcons" :key="key">
              <button
                @click="setSelectedComponent(value.component)"
                :class="selectedComponent === value.component ? 'activee' : ''"
              >
                <img class="port-icon" :src="value.icon" :alt="value.alt" />
              </button>
            </div>
          </div>
          <div class="social-links">
            <a
              :href="value.link"
              target="_blank"
              v-for="(value, key) in socialIcons"
              :key="key"
              ><img :src="value.icon" :alt="value.alt"
            /></a>
          </div>
        </div>
        <div class="about-me">
          <keep-alive>
            <component :is="selectedComponent"></component>
          </keep-alive>
        </div>
      </section>
    </main>

    <div class="circle1"></div>
    <div class="circle2"></div>
  </div>
</template>

<script>
import Me from "./components/Me.vue";
import Services from "./components/Services.vue";
import Work3 from "./components/Work_3.vue";

export default {
  name: "App",
  data() {
    return {
      selectedComponent: "me",
      myName: "Hassan Shebbani",
      myOccupation: "Jr. Frontend Web Dev",
      dashboardIcons: {
        me: {
          icon: require("./assets/icons/me.svg"),
          link: "",
          alt: "skills",
          component: "me",
        },
        services: {
          icon: require("./assets/icons/services.svg"),
          link: "",
          alt: "services",
          component: "services",
        },
        work: {
          icon: require("./assets/icons/work.svg"),
          link: "",
          alt: "work3",
          component: "work3",
        },
      },
      socialIcons: {
        github: {
          icon: require("./assets/icons/github.svg"),
          link: "https://github.com/hassan-shebbani",
          alt: "github",
        },

        instagram: {
          icon: require("./assets/icons/instagram.svg"),
          link: "https://www.instagram.com/hassanshebbani/",
          alt: "instagram",
        },
        twitter: {
          icon: require("./assets/icons/twitter.svg"),
          link: "https://twitter.com/HassanShebbani",
          alt: "linkedin",
        },
        facebook: {
          icon: require("./assets/icons/facebook-logo.svg"),
          link: "https://www.facebook.com/hassan.shebbani.5",
          alt: "facebook",
        },
        whatsapp: {
          icon: require("./assets/icons/whatsapp.svg"),
          link: "https://wa.me/96176822948",
          alt: "whatsapp",
        },
      },
    };
  },
  components: {
    Me,
    Services,
    Work3,
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Courier Prime", sans-serif;
}

main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right bottom,
    rgb(0, 247, 255),
    rgb(213, 3, 255)
  );
}

.glass-main {
  display: flex;
  min-height: 90vh;
  width: 90%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.1)
  );
  box-shadow: 0rem 2rem 10rem rgba(0, 0, 0, 0.2),
    0rem 0rem 2rem 10rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
}

.dashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem 0rem 0rem 2rem;
  padding: 1rem;
}

.portfolio-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem 0rem;
}
.activee {
  padding: 2rem;
  background-color: rgba(85, 91, 94, 0.5);
  border-radius: 0.5rem;
}
.link h2 {
  font-size: 2rem;
}
.me h2 {
  font-size: calc(1.5rem + 1vw);
  margin-top: 3rem;
  opacity: 0.8;
}
.me p {
  font-size: calc(0.5rem + 1vw);
  margin-top: 1rem;
  opacity: 0.8;
}
.my-img {
  background: linear-gradient(
    to right bottom,
    rgba(0, 255, 255, 0.808),
    rgb(247, 0, 255)
  );
  border-radius: 50%;
  height: calc(11rem + 2vw);
  width: calc(11rem + 2vw);
  margin: auto;
  padding: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.me-img {
  height: calc(10rem + 2vw);
  width: calc(10rem + 2vw);
  padding: 0rem;
  border-radius: 50%;
  object-fit: cover;
}
.port-icon {
  display: flex;
  align-items: flex-start;
  height: calc(5rem + 1vw);
  max-height: 6rem;
  width: 100%;
}
.social-links {
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem 1rem;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  backdrop-filter: blur(2rem);
}
.social-links img {
  margin: 0.5rem 0.5rem;
  height: calc(0.8rem + 1vw);
  width: calc(0.8rem + 1vw);
}
.about-me {
  padding: 2rem 4rem;
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: center;
}
.card {
  display: flex;
  width: 100%;
  flex-direction: row;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4)
  );
  border-radius: 1rem;
  margin: 2rem 0rem;
  padding: 2rem;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
  justify-content: space-between;
}
.svg {
  position: relative;
  padding: 2rem;
}
button {
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
}

.circle1,
.circle2 {
  height: 30rem;
  width: 30rem;
  position: absolute;
  border-radius: 50%;
}

.circle1 {
  top: 5%;
  right: 15%;
  background: linear-gradient(
    to right bottom,
    rgb(132, 0, 255),
    rgba(1, 247, 255, 0.767)
  );
}

.circle2 {
  bottom: 5%;
  left: 10%;
  background: linear-gradient(
    to right bottom,
    rgb(102, 255, 0),
    rgb(213, 1, 255)
  );
}

/* ******************* MEDIA QUERIES ***************** */

@media (max-width: 900px) {
  .me h2 {
    font-size: 2rem;
    margin-top: 2rem;
    opacity: 0.8;
  }
  .glass-main {
    width: 100vw;
    border-radius: 0rem;
  }
  .dashboard {
    border-radius: 0rem;
  }
  .me p {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 1rem;
  }
  .me-img {
    height: 11.5rem;
    width: 11.5rem;
  }
  .port-icon {
    height: 4.5rem;
  }
  .social-links img {
    height: 2.3rem;
    width: 2.3rem;
  }
  .about-me {
    padding: 1rem 2rem;
  }

  .circle1,
  .circle2 {
    height: 25rem;
    width: 25rem;
  }
}

@media (max-width: 625px) {
  .social-links img {
    height: 2rem;
    width: 2rem;
  }
  .social-links {
    flex-direction: column;
    padding: 1rem 0.5rem;
  }
  .glass-main {
    min-height: 100vh;
    width: 100vw;
    border-radius: 0rem;
  }

  .dashboard {
    border-radius: 0rem;
    padding: 0.5rem;
  }
  .link h2 {
    font-size: 2rem;
  }
  .me h2 {
    font-size: 1.8rem;
    margin-top: 2rem;
    opacity: 0.8;
  }
  .me p {
    font-size: 1.5rem;
    margin-top: 1rem;
    opacity: 0.8;
  }
  .my-img {
    height: 8rem;
    width: 8rem;
  }
  .me-img {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .social-links img {
    margin: 0.5rem 0.5rem;
    height: 2.3rem;
    width: 2.3rem;
  }
  .circle1,
  .circle2 {
    height: 15rem;
    width: 15rem;
  }
}
</style>
