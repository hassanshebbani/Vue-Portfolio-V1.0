<template>
  <div>
    <!-- Me Section -->
    <div class="card-me">
      <div class="card-me-info">
        <h2>Who am I?</h2>
        <p>
          "A web developer is at heart an interactive artist. They’re someone
          driven by a deep desire to create things. A web developer’s canvas is
          a user’s web browser." Exactly. That pretty much sums it up for me.
          <br />
          Pssst.. I'm also pursing my Computer Sciences degree at the Lebanese
          International University.
        </p>
      </div>
    </div>

    <div class="skillset">
      <div class="skillsAll">
        <div class="skillAll" v-for="(value, key) in skillsAll" :key="key">
          <img class="skill-icon" :src="value.icon" :alt="value.alt" />
          <h2 class="skill-title">{{ key }}</h2>
          <div class="stars">
            <img
              src="../assets/icons/star.svg"
              alt="star"
              v-for="i in value.rating"
              :key="i"
            />
          </div>
        </div>
      </div>
      <div class="skills">
        <div class="skill" v-for="(value, key) in skills1" :key="key">
          <img class="skill-icon" :src="value.icon" :alt="value.alt" />
          <h2 class="skill-title">{{ key }}</h2>
          <div class="stars">
            <img
              src="../assets/icons/star.svg"
              alt="star"
              v-for="i in value.rating"
              :key="i"
            />
          </div>
        </div>
      </div>
      <div class="svg">
        <img class="lang-html" src="../assets/icons/html.svg" alt="" />
        <img class="lang-css" src="../assets/icons/css-3.svg" alt="" />
        <img class="lang-js" src="../assets/icons/js.svg" alt="" />
        <img
          src="../assets/svg/undraw_feeling_proud_qne1.svg"
          alt=""
          class="coder"
        />
      </div>
      <div class="skills">
        <div class="skill" v-for="(value, key) in skills2" :key="key">
          <img class="skill-icon" :src="value.icon" :alt="value.alt" />
          <h2 class="skill-title">{{ key }}</h2>
          <div class="stars">
            <img
              src="../assets/icons/star.svg"
              alt="star"
              v-for="i in value.rating"
              :key="i"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- End of Me Section-->
    <div class="svgAll">
      <img class="lang-html" src="../assets/icons/html.svg" alt="" />
      <img class="lang-css" src="../assets/icons/css-3.svg" alt="" />
      <img class="lang-js" src="../assets/icons/js.svg" alt="" />
      <img
        src="../assets/svg/undraw_feeling_proud_qne1.svg"
        alt=""
        class="coder"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills1: {
        SASS: {
          icon: require("../assets/icons/sass.svg"),
          alt: "SASS",
          rating: 3,
        },
        VUE: {
          icon: require("../assets/icons/vue.svg"),
          alt: "VUE",
          rating: 3,
        },
        PYTHON: {
          icon: require("../assets/icons/python.svg"),
          alt: "PYTHON",
          rating: 2,
        },
      },
      skills2: {
        Ps: {
          icon: require("../assets/icons/adobe-photoshop.svg"),
          alt: "ADOBE PHOTOSHOP",
          rating: 2,
        },
        Ai: {
          icon: require("../assets/icons/adobe-illustrator.svg"),
          alt: "ADOBE ILLUSTRATOR",
          rating: 2,
        },
      },
      skillsAll: {
        SASS: {
          icon: require("../assets/icons/sass.svg"),
          alt: "SASS",
          rating: 3,
        },
        VUE: {
          icon: require("../assets/icons/vue.svg"),
          alt: "VUE",
          rating: 3,
        },
        PYTHON: {
          icon: require("../assets/icons/python.svg"),
          alt: "PYTHON",
          rating: 2,
        },
        Ps: {
          icon: require("../assets/icons/adobe-photoshop.svg"),
          alt: "ADOBE PHOTOSHOP",
          rating: 2,
        },
        Ai: {
          icon: require("../assets/icons/adobe-illustrator.svg"),
          alt: "ADOBE ILLUSTRATOR",
          rating: 2,
        },
      },
    };
  },
};
</script>

<style>
.card-me {
  display: flex;
  width: 100%;
  flex-direction: row;
  background: linear-gradient(
    to right top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4)
  );
  border-radius: 1rem;
  margin: 1rem 0rem;
  padding: 1.5rem;
  box-shadow: 0rem 0rem 10rem rgba(255, 11, 222, 0.185);

  justify-content: space-between;
}
.card-me-info h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.card-me-info p {
  font-size: 1.9rem;
  line-height: 3rem;
  font-weight: 500;
}
.skillset {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0rem;
}
.skills {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.skill {
  margin: 1rem 0rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: calc(0.5rem + 8vw);
  width: calc(0.5rem + 8vw);
  background: linear-gradient(
    to right top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.1)
  );
  z-index: 3;
  border-radius: 1rem;
  border: none;
  box-shadow: 0rem 0rem 10rem rgba(255, 0, 221, 0.185);
  animation: skill-shadow 1s infinite alternate-reverse;
}
.skillsAll {
  display: none;
}

.skill-icon {
  height: 50%;
  width: 50%;
}
.skill h2 {
  font-size: calc(0.2rem + 1vw);
}
.stars {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.stars img {
  height: calc(0.5rem + 1vw);
  width: calc(0.5rem + 1vw);
}
.svgAll {
  display: none;
  position: relative;
}
.svg {
  display: flex;
  justify-content: center;
  align-content: center;
}
.coder {
  height: calc(20rem + 20vw);
  width: calc(20rem + 20vw);
}
.lang-html {
  height: calc(0.5rem + 3.5vw);
  width: calc(0.5rem + 3.5vw);
  position: absolute;
  top: 18%;
  left: 38%;
  animation: hovering-ver 2s ease-in-out infinite alternate-reverse 1.5s
    backwards;
}
.lang-css {
  height: calc(0.5rem + 3.5vw);
  width: calc(0.5rem + 3.5vw);
  position: absolute;
  top: 18%;
  right: 0%;
  animation: hovering-ver 2s ease-in-out infinite alternate-reverse;
}
.lang-js {
  height: calc(0.5rem + 3.5vw);
  width: calc(0.5rem + 3.5vw);
  position: absolute;
  top: 2%;
  left: 62%;
  z-index: -1;
  animation: hovering-ver 2s ease-in-out infinite alternate-reverse 0.5s
    backwards;
}

/* ***************** MEDIA QUERIES **************** */
@media (max-width: 900px) {
  .skills {
    display: none;
  }
  .skillsAll {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .skillAll {
    margin: 1rem 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 13rem;
    height: 15rem;
    background: linear-gradient(
      to right top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.1)
    );
    z-index: 3;
    border-radius: 1rem;
    border: none;
    box-shadow: 0rem 0rem 0rem rgba(0, 0, 0, 0.5);
    animation: skill-shadow 1s infinite alternate-reverse;
  }
  .skill-icon {
    height: 60%;
    width: 60%;
  }
  .skill-title {
    font-size: 1.9rem;
  }
  .stars img {
    height: 1.8rem;
    width: 1.8rem;
  }
  .svg {
    display: none;
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .svgAll {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .coder {
    height: 40rem;
    width: 40rem;
  }
  .lang-html {
    height: calc(0.5rem + 5vw);
    width: calc(0.5rem + 5vw);
    top: 22%;
    left: 40%;
  }
  .lang-css {
    height: calc(0.5rem + 5vw);
    width: calc(0.5rem + 5vw);
    top: 10%;
    right: 10%;
  }
  .lang-js {
    height: calc(0.5rem + 5vw);
    width: calc(0.5rem + 5vw);
    top: 0%;
    left: 58%;
  }
}

@media (max-width: 625px) {
  .card-me-info h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  .card-me-info p {
    font-size: 1.3rem;
    line-height: 2.3rem;
    font-weight: 500;
  }
  .skillAll {
    margin: 0.5rem 0.1rem;
    padding: 1.5rem;
    width: 10rem;
    height: 12rem;
  }
  .skill-title {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .stars img {
    height: 1.3rem;
    width: 1.3rem;
  }
  .coder {
    height: 20rem;
    width: 20rem;
  }
  .lang-html {
    height: calc(0.5rem + 5vw);
    width: calc(0.5rem + 5vw);
    top: 22%;
    left: 40%;
  }
  .lang-css {
    height: calc(0.5rem + 5vw);
    width: calc(0.5rem + 5vw);
    top: 10%;
    right: 10%;
  }
  .lang-js {
    height: calc(0.5rem + 5vw);
    width: calc(0.5rem + 5vw);
    top: 0%;
    left: 58%;
  }
}

/* ***************** KEYFRAMES ******************** */

@keyframes hovering-ver {
  from {
    opacity: 1;
    filter: drop-shadow(0rem 0rem 1.9rem rgba(0, 0, 0, 0.25));

    transform: translateY(0%);
  }
  to {
    opacity: 0;
    transform: translateY(80%);
  }
}

@keyframes skill-icon {
  from {
    width: 50%;
    height: 50%;
  }
  to {
    width: 60%;
    height: 60%;
  }
}
</style>
