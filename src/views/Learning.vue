<template>
  <article class="learning">
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <div class="progress-content" id="js-progress-content">
          <header class=" progress-content--header">
            <h1 class="header--learning ">
              Always learning
            </h1>
          </header>

          <div class="loading-bar" id="js-loadingbar-zoom">
            <div class="loading-bar__progress" id="js-loadingbar-scale"></div>
          </div>

          <div class="loading-content">
            <p
              class="loading-content--entries"
              v-for="(word, index) in [
                'HTML',
                'CSS',
                'Chemistry',
                'Physiology',
                'Gestalt theory',
                'User intent',
                'CSS layout',
                'Scarcity',
                'Styled components',
                'Retrosynthesis',
                'ES6',
                'Higher order functions',
                'Anchoring',
                'Storytelling',
                'Mind mapping',
                'User flows',
                'await/async',
                'SEO',
                'Usabillity heuristics',
                'jobs to be done',
                'design for delight'
              ]"
              :class="[ratioCounter > 2 + index ? '' : 'hidden']"
            >
              Loading {{ word }}
            </p>
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
    return {
      ratioCounter: 0
    };
  },
  methods: {
    scrollProgress() {
      const progressContent = document.getElementById("js-progress-content");
      const headlines = document.querySelectorAll(
        ".conclusion-content--headline"
      );
      const loadingbarScale = document.getElementById("js-loadingbar-scale");
      const loadingbarZoom = document.getElementById("js-loadingbar-zoom");

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;

      this.ratioCounter = Math.floor(ratio * 10);

      loadingbarScale.style.transform = `scaleX(${
        ratio / 2 < 1 ? ratio / 2 : 1
      })`;

      let scaleX = ratio;
      let scaleY = Math.pow(ratio, 2) > 1 ? Math.pow(ratio, 2) : 1;

      if (ratio / 2 > 2.5) {
        loadingbarZoom.style.transform = `scale(5, 25)`;
      } else if (ratio / 2 > 1) {
        loadingbarZoom.style.transform = `scale(${scaleX}, ${scaleY})`;
      } else {
        loadingbarZoom.style.transform = `scale(1)`;
      }

      let fullscreen =
        loadingbarZoom.getBoundingClientRect().height / 1.25 >=
        window.innerHeight;

      if (fullscreen && ratio) {
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
    window.addEventListener("scroll", this.scrollProgress);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollProgress);
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
  height: 700vh;
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
  grid-template-rows: var(--sticky-headline-padding) min-content min-content 1fr;
  grid-template-columns: var(--view-main);
  position: relative;
  z-index: 2;
  background-color: var(--background-primary);
  height: 100%;
  opacity: 1;
  transition: all 0.4s var(--moving-out);
}

.progress-content--header {
  grid-row: 2/3;
  grid-column: 2/3;
}

.header--learning {
  color: var(--learning-color);
  background-color: var(--background-primary);
  font-size: var(--headline);
}

.loading-bar {
  grid-row: 3/4;
  grid-column: 2/3;
  border: 1px solid var(--grey-600);
  height: var(--6base);
  transform-origin: center 33%;
}

.loading-bar__progress {
  height: 100%;
  width: 100%;
  background: var(--learning-gradient);
  box-shadow: 0 0 15px 0 var(--learning-color);
  transform-origin: left;
  transform: scaleX(0);
}

.loading-content {
  padding-top: var(--row-gap);
  grid-row: 4/5;
  grid-column: 2/3;
  overflow: hidden;
}

.loading-content--entries {
  font-weight: bold;
}

@media (min-width: 30em) {
  .loading-content--entries {
    font-size: calc(var(--1base) * 1.15);
  }
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
  transition-delay: 2s;
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
  font-size: var(--headline);
  line-height: 120%;
  color: var(--learning-color);
  text-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.1);
}

.content-wrapper {
  display: grid;
  grid-template-columns: var(--view-main);
  grid-auto-rows: min-content;
  padding: var(--content-padding);
  grid-row-gap: var(--row-gap);
  background-color: var(--background-secondary);
  min-height: 40vh;
}

.headline {
  grid-column: 2/3;
  color: var(--learning-color);
  font-size: var(--subheadline);
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
