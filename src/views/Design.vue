<template>
  <article class="design">
    <section class="pre-sticky-content">
      <header class="headline-wrapper">
        <h1 class="main--headline" id="pre-sticky-headline">
          Immersive UX design
        </h1>
      </header>
    </section>
    <section class="sticky-wrapper">
      <div class="sticky-content" id="js-sticky-content">
        <div class="content-wrapper">
          <h2 class="headline">Where to go from here?</h2>

          <p class="text">
            Flutter
          </p>
        </div>
        <div class="experience-container" id="js-grow">
          <aside
            class="experience-container--background"
            id="js-opacity-fade"
          ></aside>
          <h1 class="experience-container--headline">
            <b id="js-fade">creating</b> experiences
          </h1>
        </div>
      </div>
    </section>
    <section class="main-content colored-content">
      <header class="headline-wrapper">
        <h1 class="main--headline">Creative web development</h1>
      </header>
      <div class="content-wrapper">
        <h2 class="headline">Where to go from here?</h2>

        <p class="text">
          Flutter
        </p>
      </div>
      <div class="content-wrapper">
        <h2 class="headline">Where to go from here?</h2>

        <p class="text">
          Flutter
        </p>
      </div>
      <footer class="footer">
        <router-link :to="{ name: 'home' }">Back home</router-link>
      </footer>
    </section>
  </article>
</template>

<script>
export default {
  components: {},
  //if the basics are being edited, this array contains existing basic information
  props: [],
  name: "design",
  data() {
    return {};
  },
  methods: {
    scrollSilos() {
      const growContainer = document.getElementById("js-grow");
      const growContainerBackground = document.getElementById(
        "js-opacity-fade"
      );

      const stickyContainer = document.getElementById("js-sticky-content");

      let isContainerSticky = stickyContainer.getBoundingClientRect().y;

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;

      if (isContainerSticky === 0) {
        growContainer.style.transform = `scale( ${1 + Math.pow(ratio, 8)} )`;
        growContainerBackground.style.opacity = 1 - ratio;
      } else if (isContainerSticky > 0) {
        growContainer.style.transform = `scale(1 )`;
        growContainerBackground.style.opacity = 1;
      }

      //

      /*//shrink the editor in to visible field
        let shrinkEditor = this.scaleValue - ratio * 3;
        editor.style.transform = `scale( ${
          shrinkEditor > 1 ? shrinkEditor : 1
        } )`;

        */
    }
  },
  computed: {},
  created() {},
  //same check for route-view keep-alive
  activated() {},
  mounted() {
    window.addEventListener("scroll", this.scrollSilos);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollSilos);
  }
};
</script>

<style scoped>
.design {
  /* Positioning */

  /* Box-model */
  min-height: 100%;
  /* Typography */

  /* Visual */
  background-color: var(--grey-600);
  /* Misc */
}

.pre-sticky-content {
  padding: 20vh 0 0 0;
  background-color: var(--grey-500);
}

.sticky-wrapper {
  height: 250vh;
}

.sticky-content {
  position: sticky;
  width: 100%;
  top: 0;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  background-color: var(--grey-500);
}

.experience-container {
  display: grid;
  grid-template-columns: var(--view-main);

  grid-row-gap: var(--row-gap);
  background-color: hsla(0, 0%, 1%, 1);
  height: 60vh;
  margin-top: var(--1base);
}

.experience-container--background {
  grid-column: 1/4;
  grid-row: 1/2;
  position: relative;
  z-index: 2;
  background-color: var(--grey-400);
}

.experience-container--headline {
  padding: 4rem 0;
  grid-column: 2/3;
  grid-row: 1/2;
  position: relative;
  z-index: 3;
}

.colored-content {
  background-color: hsla(0, 0%, 1%, 1);
}

.main-content {
  padding: 10vh 0 5vh 0;
  display: grid;
  grid-row-gap: var(--1base);
}

.headline-wrapper {
  display: grid;
  grid-template-columns: var(--view-main);
}

.main--headline {
  grid-column: 2/3;
  font-size: var(--5base);
  line-height: 120%;
  color: var(--design-color);
  text-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.1);
}

.content-wrapper {
  display: grid;
  grid-template-columns: var(--view-main);
  grid-auto-rows: min-content;
  padding: 4rem 0;
  grid-row-gap: var(--row-gap);
  grid-gap: var(--1base);
  background-color: var(--grey-400);
  min-height: 40vh;
}

.colored-content .content-wrapper {
  background-color: var(--grey-600);
}

.headline {
  grid-column: 2/3;
  color: var(--design-color);
}

.text {
  grid-column: 2/3;
  font-size: var(--2base);
}

.text-box--small {
  background-color: hsla(0, 0%, 35%, 1);
  border-radius: var(--fourthbase);
  padding: var(--2base);
  grid-column: 2/3;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
}
</style>
