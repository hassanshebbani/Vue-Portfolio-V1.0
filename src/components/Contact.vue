<template>
  <div>
    <!-- Contact Section-->
    <div class="card-contact">
      <div class="card-contact-info">
        <h2>{{ heading }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
    <form
      name="portfolio-queries"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="portfolio-queries" />
      <div class="container">
        <img
          class="contact-svg"
          src="../assets/svg/undraw_Mailbox_re_dvds.svg"
          alt=""
        />
        <div class="contact-info">
          <input
            type="text"
            name="name"
            class="field"
            placeholder="Full Name"
          />
          <input
            class="field"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input class="field" type="text" name="mobile" placeholder="Mobile" />
          <textarea
            class="field"
            name="message"
            placeholder="Message"
            rows="7"
          ></textarea>
          <button class="send-btn" type="Submit">
            <img src="../assets/icons/paper-plane.svg" alt="" />
          </button>
        </div>
      </div>
    </form>
    <!-- End of Contact Section-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "Let's get in touch!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos amet sunt cupiditate optio illo aperiam blanditiis laudantium repudiandae hic corrupti at recusandae error provident illum, repellendus ullam aspernatur quo.",
    };
  },
};
</script>

<style>
.send-btn img {
  height: 100%;
  width: 100%;
  color: white;
}
.send-btn {
  background: rgba(0, 0, 0, 0.3);
  /* border: 0.3rem solid rgb(0, 195, 255); */
  padding: 1rem 2rem;
  font-size: 2rem;
  color: rgb(0, 195, 255);
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  width: 20%;
  margin: auto;
  margin-top: 1rem;
  height: 6rem;
  border-radius: 0.5rem;
}
.send-btn:hover {
  background: none;
  color: white;
}
.send-btn::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 0%;
  background: rgb(0, 195, 255);
  z-index: -1;
  transition: 0.8s;
  top: 0;
  border-radius: 0 0 50% 50%;
}
.send-btn:hover::before {
  height: 180%;
}
.card-contact {
  display: flex;
  width: 100%;
  flex-direction: row;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4)
  );
  border-radius: 1rem;
  margin: 1rem 0rem;
  padding: 1.5rem;
  box-shadow: 0.66rem 0.6rem 2rem rgba(122, 122, 122, 0.2);
  justify-content: space-between;
}
.card-contact-info h2 {
  font-size: 1.9rem;
  margin-bottom: 1rem;
}
.card-contact-info p {
  font-size: 1.6rem;
}
.container {
  /* background-color: lime; */
  position: relative;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.contact-svg {
  position: absolute;
  width: 100%;
  height: 100%;
}
.contact-info {
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 5rem 3rem;
  justify-content: space-between;
  border-radius: 0.5rem;
  animation: contact-box 1s infinite alternate-reverse ease-in;
  width: 100%;
  height: 100%;
}
.field {
  margin: 1rem 0rem;
  background: rgb(0, 0, 0, 0.2);
  padding: 2rem;
  outline: none;
  color: white;
  border: 0rem;
  border-left: 0.1rem solid rgb(0, 255, 242);
  border-bottom: 0.2rem solid rgb(0, 255, 242);
  font-size: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.5s;
  transition-property: padding backdrop-filter background;
  /* backdrop-filter: blur(2rem); */
}
::placeholder {
  font-size: 2rem;
  color: rgb(255, 255, 255, 0.8); /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(255, 255, 255, 0.8);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(255, 255, 255, 0.8);
}
.field:focus {
  background: rgb(0, 0, 0, 0.3);
  padding: 2.5rem;
  backdrop-filter: blur(2rem);
  transition: 0.5s;
  transition-property: padding backdrop-filter background;
}
textarea {
  font-size: 2.5rem !important;
  resize: none;
}

/* ***************** MEDIA QUERIES ******************** */
@media (max-width: 625px) {
  .send-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 35%;
    height: 8rem;
  }
  .send-btn img {
    height: 4rem;
    width: 4rem;
    margin: auto;
    text-align: center;
  }
  .card-contact {
    display: flex;
    width: 100%;
    flex-direction: row;
    background: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.4)
    );
    border-radius: 1rem;
    margin: 1rem 0rem;
    padding: 1.5rem;
    box-shadow: 0.66rem 0.6rem 2rem rgba(122, 122, 122, 0.2);
    justify-content: space-between;
  }
  .card-contact-info h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  .card-contact-info p {
    font-size: 1.3rem;
  }
  .container {
    /* background-color: lime; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .contact-svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .contact-info {
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: 0rem 0.5rem;
    justify-content: space-between;
    border-radius: 0.5rem;
    animation: contact-box 1s infinite alternate-reverse ease-in;
    width: 100%;
    height: 100%;
  }
  .field {
    margin: 1rem 0rem;
    background: rgb(0, 0, 0, 0.3);
    padding: 1rem;
    outline: none;
    color: white;
    border: 0rem;
    border-left: 0.1rem solid rgb(0, 255, 242);
    border-bottom: 0.2rem solid rgb(0, 255, 242);
    font-size: 2rem;
    width: 100%;
    border-radius: 0.5rem;
    transition: 0.5s;
    transition-property: padding backdrop-filter background;
    /* backdrop-filter: blur(2rem); */
  }
  ::placeholder {
    font-size: 1.6rem;
    color: rgb(255, 255, 255, 0.8); /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgb(255, 255, 255, 0.8);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgb(255, 255, 255, 0.8);
  }
  .field:focus {
    background: rgb(0, 0, 0, 0.5);
    padding: 2rem;
    backdrop-filter: blur(2rem);
    transition: 0.5s;
    transition-property: padding backdrop-filter background;
  }
  textarea {
    font-size: 2rem !important;
    resize: none;
  }
}
</style>
