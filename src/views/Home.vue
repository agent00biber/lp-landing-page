<template>
  <article class="home" id="home">
    <section class="svg-cutout">
      <div id="svg-overlay" class="svg-overlay">
        <picture>
          <source
            media="(max-width: 40em)"
            srcset="@/assets/intro-name-375.svg"
          />
          <source
            media="(min-width: 40.1em)"
            srcset="@/assets/intro-name-580.svg"
          />
          <img src="@/assets/intro-name-375.svg" alt="lucas paetow" />
        </picture>
      </div>
    </section>
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <aside class="sticky-background"></aside>
        <header class="hero-content" id="hero-content">
          <h1 class="headline headline-top">Building Bridges</h1>
          <h3 class="headline headline-bottom">Between different deparments</h3>
        </header>
      </div>
    </section>
    <section class="intro observe-section" id="intro">
      <h3 class="text--intro">
        I can help to reduce conflict within your team, because I understand
        their pain points.
      </h3>
      <router-link class="link--intro" :to="{ name: 'intro' }"
        ><h4 class="text--link">See conflitct examples</h4>
      </router-link>
    </section>

    <section class="main-content">
      <home-section
        class="observe-section"
        headline="FRONTEND"
        body="I build javascript web apps with Vue"
        sectionID="frontend"
      >
      </home-section>

      <home-section
        class="observe-section"
        headline="UX DESIGN"
        body="I balance aesthetics and functions for the user"
        sectionID="design"
      >
      </home-section>

      <home-section
        class="observe-section"
        headline="MARKETING"
        body="I use digital psychology to create persuasive landing pages"
        sectionID="marketing"
      >
      </home-section>

      <home-section
        class="observe-section"
        headline="SCIENCE"
        body="I dive deep into medical topics with a master in pharmaceutical sciences"
        sectionID="science"
      >
      </home-section>

      <home-section
        class="observe-section"
        headline="TEAMWORK"
        body="I thrive within the creative discourse and in pursuit of a common goal"
        sectionID="teamwork"
      >
      </home-section>

      <home-section
        class="observe-section"
        headline="LEARNING"
        body="I embrace the puzzle and grind for the solution or a workaround"
        sectionID="learning"
      >
      </home-section>
    </section>

    <section class="outro observe-section" id="outro">
      <p class="text--outro">
        Get to know me
      </p>
      <a href="mailto:career.lucas.paetow@gmail.com">
        <email-icon class="icon--link" />
      </a>
      <router-link :to="{ name: 'legal' }" class="legal-link"
        >legal and impressum</router-link
      >
    </section>
  </article>
</template>

<script>
import emailIcon from "@/components/icons/email.vue";
import homeSection from "@/components/homepage/HomeSection.vue";

export default {
  name: "home",
  components: {
    emailIcon,
    homeSection
  },
  methods: {
    scrollSVG() {
      const heroContent = document.getElementById("hero-content");
      const svgContainer = document.getElementById("svg-overlay");
      const navBar = document.querySelector("#nav");

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;
      let navbarScale = ratio - 1.5;
      navBar.style.backgroundColor = `rgba(71, 71, 71, ${
        navbarScale < 1 ? navbarScale : 1
      })`;

      // decrease scale; as a variable to check if it gets below 1
      let decreaseScale = 1 + (1 - ratio);
      //moves the svg forward (perceived) and hides it
      svgContainer.style.transform = `scale( ${1 + ratio * 30} )`;
      svgContainer.style.opacity = 2 * (1 - ratio);

      //scales down the text to 1 and shows it
      heroContent.style.transform = `scale( ${
        decreaseScale > 1 ? decreaseScale : 1
      } )`;
      heroContent.style.opacity = Math.pow(ratio, 2);
    },
    addClasses(entry) {
      //add active class to the section
      entry.target.classList.add("active");

      //add active class to navbar and color to the extended navbar
      let navId = document.getElementById(`${entry.target.id}-nav`);
      let navIdExtended = document.getElementById(
        `${entry.target.id}-nav-extended`
      );

      navId.classList.add("active");
      navIdExtended.style.color = `var(--${entry.target.id}-color)`;
    },
    removeClasses(entry) {
      //remove active class to the section
      entry.target.classList.remove("active");

      //remove active class to navbar and color to the extended navbar
      let navId = document.getElementById(`${entry.target.id}-nav`);
      let navIdExtended = document.getElementById(
        `${entry.target.id}-nav-extended`
      );
      navId.classList.remove("active");
      navIdExtended.style.color = `var(--white)`;
    }
  },
  mounted() {
    const observeSections = document.querySelectorAll(".observe-section");
    window.addEventListener("scroll", this.scrollSVG);

    const options = {
      rootMargin: "0px",
      threshold: [0, 0.85]
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.85) {
          this.addClasses(entry);
        } else {
          this.removeClasses(entry);
        }
      });
    }, options);

    if (window.innerWidth < 600) {
      observeSections.forEach(section => {
        observer.observe(section);
      });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollSVG);
  }
};
</script>

<style scoped>
/* Positioning */
/* Box-model */
/* Typography */
/* Visual */
/* Misc */

.home {
  background-color: var(--background-tertiary);
}

.svg-cutout {
  width: 100vw;
}
.svg-overlay {
  height: 100%;
  width: 100vw;
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
  pointer-events: none;
}

.svg-overlay::before,
.svg-overlay::after {
  content: " ";
  background-color: var(--background-tertiary);
  flex-grow: 1;
}

img {
  width: 100%;
  margin: 0 auto;
  outline: 50vh solid var(--background-tertiary);
  outline-offset: -2px;
  background-color: rgba(0, 0, 0, 0.05);
}

.sticky-wrapper {
  height: 220vh;
}

.sticky-content {
  position: sticky;
  width: 100%;
  top: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  z-index: 5;
}

.sticky-background {
  grid-column: 1/4;
  grid-row: 1/3;
  background-image: linear-gradient(133deg, #f46b45 17%, #eea849 81%);
  position: relative;
  z-index: 1;
  transform: scale(2.5);
  animation: 5s infinite running rotate;
}

@keyframes rotate {
  0% {
    transform: scale(2.5) translate(0%, 0%);
  }
  25% {
    transform: scale(2.5) translate(0, 25%);
  }
  50% {
    transform: scale(2.5) translate(25%, 25%);
  }
  75% {
    transform: scale(2.5) translate(25%, 0%);
  }
  100% {
    transform: scale(2.5) translate(0%, 0%);
  }
}

.hero-content {
  opacity: 0;
  grid-column: 2/3;
  grid-row: 2/3;
  position: relative;
  z-index: 2;
}

.headline-top {
  line-height: 100%;
}

.headline-bottom {
  line-height: 120%;
}

.intro {
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: 1fr min-content min-content 1fr;
  padding: var(--content-padding);
  min-height: 50vh;
  grid-row-gap: var(--row-gap);
  margin-bottom: var(--1base);
}

@media (min-width: 70em) {
  .intro {
    min-height: 70vh;
  }
}

.text--intro {
  grid-column: 2/3;
  grid-row: 2/3;
  font-weight: bold;
}

.link--intro {
  grid-column: 2/3;
  grid-row: 3/4;
  text-decoration: underline var(--white);
}

.text--link {
  color: var(--white);
  font-weight: bold;
  padding-right: var(--halfbase);
}

.main-content {
  display: grid;
}

@media (min-width: 37.5em) {
  .main-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 60em) {
  .main-content {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.outro {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.text--outro {
  font-weight: bold;
  font-size: var(--2base);
  padding-bottom: var(--halfbase);
}

.legal-link {
  position: absolute;
  bottom: 0;
  text-align: center;
}
</style>
