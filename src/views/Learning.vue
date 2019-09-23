<template>
  <article class="learning">
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <div class="progress-content" id="js-progress-content">
          <aside class="progress-bar" id="js-progress-bar"></aside>
          <div
            class="progress-content--above-header progress-content--text before-progress"
          >
            <p>word</p>
          </div>

          <header class=" progress-content--header before-progress">
            <h1 class="header--learning ">
              Always learning
            </h1>
          </header>

          <div
            class="progress-content--below-header progress-content--text before-progress"
          >
            <p>word2</p>
          </div>
        </div>
        <div class="conclusion-content">
          <h1 class="conclusion-content--headline headline1 hidden">
            The knowledge I have today, is old tomorrow
          </h1>
          <h1 class="conclusion-content--headline headline2 hidden">
            But there is still so much to learn.
          </h1>
        </div>
      </div>
    </section>
    <section class="main-content">
      <header class="headline-wrapper">
        <h1 class="main--headline">Working knowledge</h1>
      </header>

      <div class="content-wrapper">
        <h2 class="headline">Just one more puzzle</h2>

        <p class="text">
          I am Fueled by puzzles and the unknown. I want to learn and understand
          everything and am easily amazed by simple solutions to difficult
          problems.
        </p>
      </div>
      <div class="content-wrapper">
        <h2 class="headline">What comes next</h2>

        <p class="text">
          For now, I want to advance my javascript and frontend knowledge before
          I break into the world of mobile development and getting started with
          flutter.
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
  name: "learning",
  data() {
    return {};
  },
  methods: {
    scrollSilos() {
      const progressBar = document.getElementById("js-progress-bar");
      const progressContent = document.getElementById("js-progress-content");
      const headlines = document.querySelectorAll(
        ".conclusion-content--headline"
      );

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;

      progressBar.style.transform = `scaleY(${ratio / 2 < 1 ? ratio / 2 : 1})`;
      if (ratio / 2 > 1.2) {
        progressContent.classList.add("hidden");
        headlines.forEach(headline => {
          headline.classList.remove("hidden");
        });
      } else {
        progressContent.classList.remove("hidden");
        headlines.forEach(headline => {
          headline.classList.add("hidden");
        });
      }
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
.learning {
  /* Positioning */

  /* Box-model */
  min-height: 100%;
  /* Typography */

  /* Visual */
  background-color: var(--background-tertiary);
  /* Misc */
}

.sticky-wrapper {
  height: 400vh;
}

.sticky-content {
  position: sticky;
  width: 100%;
  top: 0;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  display: grid;
}

.progress-content {
  grid-column: 1/2;
  grid-row: 1/2;
  display: grid;
  grid-template-rows: 1fr min-content 1fr;
  position: relative;
  z-index: 2;
  background-color: var(--background-primary);
  height: 100%;
  opacity: 1;
  transition: all 0.4s var(--moving-out);
}

.progress-content--above-header {
  grid-row: 1/2;
  grid-column: 1/2;
}

.progress-content--header {
  grid-row: 2/3;
  grid-column: 1/2;
  display: grid;
  grid-template-columns: var(--view-main);
}

.header--learning {
  color: var(--learning-color);
  background-color: var(--background-primary);
  grid-column: 2/3;
  padding: var(--halfbase);
}

.progress-content--below-header {
  grid-row: 3/4;
  grid-column: 1/2;
}

.progress-content--text {
  align-self: center;
}

.progress-content--text p {
  color: var(--background-primary);
}

.progress-bar {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--learning-gradient);
  transform-origin: bottom;
  transform: scaleY(0);
  z-index: 4;
}

.before-progress {
  position: relative;
  z-index: 5;
}

.conclusion-content {
  grid-column: 1/2;
  grid-row: 1/2;
  position: relative;
  z-index: 1;
  background-color: var(--background-tertiary);
  height: 100vh;
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: 1fr min-content min-content 1fr;
}

.conclusion-content--headline {
  opacity: 1;
  transition: all 0.4s var(--moving-out);
}

.conclusion-content .headline1 {
  grid-column: 2/3;
  grid-row: 2/3;
  transition-delay: 0.5s;
}

.conclusion-content .headline2 {
  grid-column: 2/3;
  grid-row: 3/4;
  transition-delay: 3s;
}

.hidden {
  opacity: 0;
  transition: all 0.4s var(--moving-out);
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
  color: var(--learning-color);
  text-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.1);
}

.content-wrapper {
  display: grid;
  grid-template-columns: var(--view-main);
  grid-auto-rows: min-content;
  padding: 4rem 0;
  grid-row-gap: var(--row-gap);
  grid-gap: var(--1base);
  background-color: var(--background-secondary);
  min-height: 40vh;
}

.headline {
  grid-column: 2/3;
  color: var(--learning-color);
}

.text {
  grid-column: 2/3;
  font-size: var(--2base);
}

.text-box--small {
  background-color: var(--background-primary);
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
