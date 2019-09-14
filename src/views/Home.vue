<template>
  <article class="home">
    <section class="svg-cutout">
      <div id="svg-overlay" class="svg-overlay">
        <img src="@/assets/into-name-lp.svg" alt="iPad OS " />
      </div>
    </section>
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <header class="hero-content" id="hero-content">
          <h1 class="headline headline-top">Building Bridges</h1>
          <h3 class="headline headline-bottom">Between different deparments</h3>
        </header>
      </div>
    </section>
    <section class="intro">
      <p class="text--intro">
        I can help to reduce conflict within your team, because I understand
        their pain points.
      </p>
      <router-link class="link--intro" :to="{ name: '', params: {} }"
        ><p class="text--link">See conflitct examples</p>
        <arrow-icon class="icon--link" />
      </router-link>
    </section>

    <section class="section-layout developer-section observe-section">
      <aside class="section-overlay"></aside>
      <div class="icon-wrapper">
        <cube-icon class="icon icon1" />
        <cube-icon class="icon icon2" />
        <cube-icon class="icon icon3" />
      </div>
      <header class="section-header">
        <h3 class="topline--section">Understanding</h3>
        <h2 class="headline--section">
          <span class="span--headline">WEB-DEVELOPMENT</span>
        </h2>
      </header>
      <p class="body-text">I build javascript web apps with vue</p>
      <router-link class="link--section" :to="{ name: '', params: {} }"
        ><p class="text--link">Meet the developer</p>
        <arrow-icon class="icon--link developer-link" />
      </router-link>
    </section>

    <section class="section-layout ux-section observe-section">
      <aside class="section-overlay"></aside>
      <div class="icon-wrapper">
        <circle-icon class="icon icon1" />
        <circle-icon class="icon icon2" />
        <circle-icon class="icon icon3" />
      </div>
      <header class="section-header">
        <h3 class="topline--section">Understanding</h3>
        <h2 class="headline--section">
          <span class="span--headline">UX DESIGN</span>
        </h2>
      </header>
      <p class="body-text">I balance asthetics and functions for the user</p>
      <router-link class="link--section" :to="{ name: '', params: {} }"
        ><p class="text--link">Meet the designer</p>
        <arrow-icon class="icon--link developer-link" />
      </router-link>
    </section>

    <section class="section-layout marketing-section observe-section">
      <aside class="section-overlay"></aside>
      <div class="icon-wrapper">
        <triangle-icon class="icon icon1" />
        <triangle-icon class="icon icon2" />
        <triangle-icon class="icon icon3" />
      </div>
      <header class="section-header">
        <h3 class="topline--section">Understanding</h3>
        <h2 class="headline--section">
          <span class="span--headline">Marketing</span>
        </h2>
      </header>
      <p class="body-text">
        I use digital psychology to create performant landing pages
      </p>
      <router-link class="link--section" :to="{ name: '', params: {} }"
        ><p class="text--link">Meet the marketeer</p>
        <arrow-icon class="icon--link developer-link" />
      </router-link>
    </section>

    <section class="section-layout science-section observe-section">
      <aside class="section-overlay"></aside>
      <div class="icon-wrapper">
        <hexagon-icon class="icon icon1" />
        <hexagon-icon class="icon icon2" />
        <hexagon-icon class="icon icon3" />
      </div>
      <header class="section-header">
        <h3 class="topline--section">Understanding</h3>
        <h2 class="headline--section">
          <span class="span--headline">Science</span>
        </h2>
      </header>
      <p class="body-text">
        I dive deep into medical topics with a master in pharmcutical sciences
      </p>
      <router-link class="link--section" :to="{ name: '', params: {} }"
        ><p class="text--link">Meet the scientist</p>
        <arrow-icon class="icon--link developer-link" />
      </router-link>
    </section>

    <section class="section-layout teamwork-section observe-section">
      <aside class="section-overlay"></aside>
      <div class="icon-wrapper">
        <heart-icon class="icon icon1" />
        <heart-icon class="icon icon2" />
        <heart-icon class="icon icon3" />
      </div>
      <header class="section-header">
        <h3 class="topline--section">Understanding</h3>
        <h2 class="headline--section">
          <span class="span--headline">Teamwork</span>
        </h2>
      </header>
      <p class="body-text">
        I thrive within creative discurse and in pursuit of a common goal
      </p>
      <router-link class="link--section" :to="{ name: '', params: {} }"
        ><p class="text--link">Meet the collaborateur</p>
        <arrow-icon class="icon--link developer-link" />
      </router-link>
    </section>

    <section class="section-layout learning-section observe-section">
      <aside class="section-overlay"></aside>
      <div class="icon-wrapper">
        <cube-icon class="icon icon1" />
        <circle-icon class="icon icon2" />
        <triangle-icon class="icon icon3" />
        <hexagon-icon class="icon icon4" />
      </div>
      <header class="section-header">
        <h3 class="topline--section">Understanding</h3>
        <h2 class="headline--section">
          <span class="span--headline">Live long learners</span>
        </h2>
      </header>
      <p class="body-text">
        I embrace the puzzle and grind for the solution or a workaround
      </p>
      <router-link class="link--section" :to="{ name: '', params: {} }"
        ><p class="text--link">Meet the student</p>
        <arrow-icon class="icon--link developer-link" />
      </router-link>
    </section>

    <section class="outro">
      <p class="text--outro">
        Get to know me
      </p>
      <router-link class="link--outro" :to="{ name: '', params: {} }">
        <email-icon class="icon--link" />
      </router-link>
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

export default {
  name: "home",
  components: {
    arrowIcon,
    cubeIcon,
    circleIcon,
    triangleIcon,
    hexagonIcon,
    heartIcon,
    emailIcon
  },
  methods: {
    scrollSVG() {
      const heroContent = document.getElementById("hero-content");
      const svgContainer = document.getElementById("svg-overlay");
      const navBar = document.querySelector("#nav");

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;
      let navbarScale = ratio - 1.5;
      console.log(navbarScale);
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
    }
  },
  mounted() {
    const observeSections = document.querySelectorAll(".observe-section");
    window.addEventListener("scroll", this.scrollSVG);

    const options = {
      rootMargin: "0px",
      threshold: 0.75
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, options);

    observeSections.forEach(section => {
      observer.observe(section);
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollSVG());
  }
};
</script>

<style scoped>
/* Positioning */
/* Box-model */
/* Typography */
/* Visual */
/* Misc */

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
  z-index: 3;
  pointer-events: none;
}

.svg-overlay::before,
.svg-overlay::after {
  content: " ";
  background-color: hsla(0, 0%, 28%, 100);
  flex-grow: 1;
}

img {
  width: 100%;
  max-width: 80vh;
  margin: 0 auto;
  outline: 50vh solid hsla(0, 0%, 28%, 100);
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
  background-image: linear-gradient(128deg, #f46b45 0%, #eea849 100%);
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.hero-content {
  opacity: 0;
  grid-column: 2/3;
  grid-row: 2/3;
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
  grid-template-columns: 1fr 7fr 1fr;
  grid-auto-rows: min-content;
  padding: 4rem 0;
  grid-row-gap: var(--padding-rows);
  border-bottom: 1px solid white;
}

.text--intro {
  grid-column: 2/3;
  font-size: var(--2base);
  font-weight: bold;
}

.link--intro {
  grid-column: 2/3;
  text-decoration: underline hsla(0, 0%, 8%, 100);
  display: flex;
  flex-direction: row;
}

.text--link {
  color: hsla(0, 0%, 8%, 100);
  font-weight: bold;
  font-size: var(--2base);
  padding-right: var(--halfbase);
}

.section-layout {
  height: 61.8vh;
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-auto-rows: min-content;
  padding: 4rem 0;
  grid-row-gap: var(--padding-rows);
  border-bottom: 1px solid white;
  position: relative;
}

.developer-section {
  background-image: linear-gradient(135deg, #3a6186 0%, #89253e 100%);
}

.ux-section {
  background-image: linear-gradient(
    135deg,
    #d08aff 0%,
    #ff6767 51%,
    #ffce89 100%
  );
}

.marketing-section {
  background-image: linear-gradient(135deg, #e96443 0%, #904e95 100%);
}

.science-section {
  background-image: linear-gradient(135deg, #2b5876 0%, #4e4376 100%);
}
.teamwork-section {
  background-image: linear-gradient(135deg, #f1719c 0%, #f49472 100%);
}
.learning-section {
  background-image: linear-gradient(135deg, #3a6186 0%, #2c8925 100%);
}

.section-overlay {
  background-color: hsla(0, 0%, 28%, 100);
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 1;
  transition: opacity 0.2s ease;
}

.active > .section-overlay {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.icon-wrapper,
.section-header,
.body-text,
.link--section {
  grid-column: 2/3;
  position: relative;
  z-index: 3;
}

.icon-wrapper {
  position: relative;
  height: 3rem;
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

.headline--section {
  font-size: var(--5base);
  line-height: 125%;
  padding-top: 0.2rem;
}

.span--headline {
  background-color: hsla(0, 0%, 28%, 100);
}

.developer-section .headline--section {
  color: hsla(210, 39%, 38%, 100);
}
.ux-section .headline--section {
  color: hsla(360, 100%, 70%, 100);
}
.marketing-section .headline--section {
  color: hsla(305, 31%, 45%, 100);
}
.science-section .headline--section {
  color: hsla(204, 68%, 21%, 100);
}
.teamwork-section .headline--section {
  color: hsla(15, 85%, 71%, 100);
}
.learning-section .headline--section {
  color: hsla(116, 56%, 34%, 100);
}

.body-text {
  font-size: var(--2base);
  font-weight: bold;
}

.link--section {
  grid-column: 2/3;
  text-decoration: underline hsla(0, 0%, 8%, 100);
  display: flex;
  flex-direction: row;
}

.developer-section .svg-icon {
  fill: hsla(210, 39%, 38%, 100);
  color: hsla(210, 39%, 38%, 100);
}
.developer-section .link--section {
  text-decoration: underline hsla(210, 39%, 38%, 100);
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
