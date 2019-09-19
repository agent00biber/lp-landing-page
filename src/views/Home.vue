<template>
  <article class="home" id="home">
    <section class="svg-cutout">
      <div id="svg-overlay" class="svg-overlay">
        <img src="@/assets/into-name-lp.svg" alt="lucas paetow" />
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
      <p class="text--intro">
        I can help to reduce conflict within your team, because I understand
        their pain points.
      </p>
      <router-link class="link--intro" :to="{ name: '', params: {} }"
        ><p class="text--link">See conflitct examples</p>
        <arrow-icon class="icon--link" />
      </router-link>
    </section>

    <section class="main-content">
      <home-section
        class="observe-section"
        headline="WEB-DEVELOPMENT"
        body="I build javascript web apps with vue"
        link="Meet the developer"
        sectionID="development"
      >
        <cube-icon class="icon icon1" />
        <cube-icon class="icon icon2" />
        <cube-icon class="icon icon3" />
      </home-section>

      <home-section
        class="observe-section"
        headline="UX DESIGN"
        body="I balance asthetics and functions for the user"
        link="Meet the designer"
        sectionID="design"
      >
        <circle-icon class="icon icon1" />
        <circle-icon class="icon icon2" />
        <circle-icon class="icon icon3" />
      </home-section>

      <home-section
        class="observe-section"
        headline="MARKETING"
        body="I use digital psychology to create persuasive landing pages"
        link="Meet the marketeer"
        sectionID="marketing"
      >
        <triangle-icon class="icon icon1" />
        <triangle-icon class="icon icon2" />
        <triangle-icon class="icon icon3" />
      </home-section>

      <home-section
        class="observe-section"
        headline="SCIENCE"
        body="I dive deep into medical topics with a master in pharmcutical sciences"
        link="Meet the scientist"
        sectionID="science"
      >
        <hexagon-icon class="icon icon1" />
        <hexagon-icon class="icon icon2" />
        <hexagon-icon class="icon icon3" />
      </home-section>

      <home-section
        class="observe-section"
        headline="TEAMWORK"
        body="I thrive within creative discurse and in pursuit of a common goal"
        link="Meet the collaborateur"
        sectionID="teamwork"
      >
        <heart-icon class="icon icon1" />
        <heart-icon class="icon icon2" />
        <heart-icon class="icon icon3" />
      </home-section>

      <home-section
        class="observe-section"
        headline="LIVE LONG LEARNING"
        body="I embrace the puzzle and grind for the solution or a workaround"
        link="Meet the student"
        sectionID="learning"
      >
        <cube-icon class="icon icon1" />
        <circle-icon class="icon icon2" />
        <triangle-icon class="icon icon3" />
        <hexagon-icon class="icon icon4" />
      </home-section>
    </section>

    <section class="outro observe-section" id="outro">
      <p class="text--outro">
        Get to know me
      </p>
      <a href="mailto:name@email.com">
        <email-icon class="icon--link" />
      </a>
    </section>
  </article>
</template>

<script>
import arrowIcon from "@/components/icons/arrow.vue";
import cubeIcon from "@/components/icons/cube.vue";
import circleIcon from "@/components/icons/circle.vue";
import triangleIcon from "@/components/icons/triangle.vue";
import hexagonIcon from "@/components/icons/hexagon.vue";
import heartIcon from "@/components/icons/heart.vue";
import emailIcon from "@/components/icons/email.vue";
import homeSection from "@/components/homepage/HomeSection.vue";

export default {
  name: "home",
  components: {
    arrowIcon,
    cubeIcon,
    circleIcon,
    triangleIcon,
    hexagonIcon,
    heartIcon,
    emailIcon,
    homeSection
  },

  methods: {
    scrollSVG() {
      if (this.$route.name !== "home") {
        return;
      }

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
      navIdExtended.style.color = `var(--grey-400)`;
    }
  },
  mounted() {
    const observeSections = document.querySelectorAll(".observe-section");
    window.addEventListener("scroll", this.scrollSVG);

    const options = {
      rootMargin: "0px",
      threshold: 0.85
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.addClasses(entry);
        } else {
          this.removeClasses(entry);
        }
      });
    }, options);

    observeSections.forEach(section => {
      observer.observe(section);
    });
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
  background-color: var(--grey-600);
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
  background-color: var(--grey-400);
  flex-grow: 1;
}

img {
  width: 100%;
  max-width: 80vh;
  margin: 0 auto;
  outline: 50vh solid var(--grey-400);
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
  font-size: 4rem;
  line-height: 100%;
}

.headline-bottom {
  font-size: 1.75rem;
}

.intro {
  display: grid;
  grid-template-columns: var(--view-main);
  grid-auto-rows: min-content;
  padding: 5rem 0;
  grid-row-gap: var(--row-gap);
  margin-bottom: var(--1base);
}

.text--intro {
  grid-column: 2/3;
  font-size: var(--2base);
  font-weight: bold;
}

.link--intro {
  grid-column: 2/3;
  text-decoration: underline hsla(0, 0%, 3%, 100);
  display: flex;
  flex-direction: row;
}

.text--link {
  color: hsla(0, 0%, 3%, 100);
  font-weight: bold;
  font-size: var(--2base);
  padding-right: var(--halfbase);
}

.main-content {
  display: grid;
  grid-row-gap: var(--1base);
}

.icon {
  position: absolute;
  left: 0;
  top: 0;
}

.icon2 {
  left: 1.5rem;
}

.icon3 {
  left: 3rem;
}

.icon4 {
  left: 4.5rem;
}

.outro {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text--outro {
  font-weight: bold;
  font-size: var(--2base);
  padding-bottom: var(--halfbase);
}
</style>
