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
      <h1 class="main-content--headline">Working knowledge</h1>

      <content-summery
        class="content-summery-layout js-content-observe"
        headline="Live long learning"
        text="I am fueled by puzzles and the unknown. I want to learn and understand everything and am easily amazed by simple solutions to difficult problems."
        sectionID="learning"
        :summeryContent="[
          {
            headline: 'What comes next',
            text:
              'For now, I want to advance my javascript and frontend knowledge before I break into the world of mobile development and getting started with flutter.'
          },
          {
            headline: 'A framework to work with',
            text:
              'I need to develop my own framework for a faster development workflow. This is true especially for UI components as I often think I can do better and want to improve aesthetics as well as the user journey.'
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="What comes next?"
        text="Developing an App is still my long-time goal, but for now, I want to focus on the best practices, faster development times and better performance within the javascript ecosystem."
        sectionID="learning"
        alignExtraContent="right"
      >
        <div class="extra-content-container extra-content-container1 ">
          <aside class="background" id="js-background-color-change"></aside>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 904 398"
            class="svg-graph"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="var(--background-tertiary)"
                stroke="var(--grey-600)"
                d="M.5.5v397c284.613-.028 495.814-23.96 633.59-71.783C771.672 277.961 861.423 169.575 903.36.5H.5z"
              />
            </g>
          </svg>
        </div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="A framework to work with"
        text="As I start to work on a project, I begin with every aspect at the same time and often change design specs or functionality as a reaction to new information and learnings during the process. This back and forth between design and development is time-consuming, which I want to speed up."
        sectionID="learning"
        alignExtraContent="left"
      >
        <div class="extra-content-container extra-content-container2">
          <button class="button button1">button primary</button>
          <button class="button button2">button primary</button>
          <button class="button button3">button primary</button>
          <button class="button button4">
            button primary
            <icon-arrow class="arrow-icon" />
          </button>
        </div>
      </content-section>

      <footer class="footer">
        <router-link :to="{ name: 'home' }">Back home</router-link>
      </footer>
    </section>
  </article>
</template>

<script>
import contentSummery from "@/components/buildingBlocks/contentSummery.vue";
import contentSection from "@/components/buildingBlocks/contentSection.vue";
import iconArrow from "@/components/icons/arrow.vue";

export default {
  components: {
    contentSummery,
    contentSection,
    iconArrow
  },

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
      this.parallaxImages();
    },
    parallaxImages() {
      const background = document.getElementById("js-background-color-change");

      let inView =
        background.getBoundingClientRect().top >= 0 &&
        background.getBoundingClientRect().bottom <= window.innerHeight;
      let viewAmount =
        background.getBoundingClientRect().top / window.innerHeight;

      if (!inView) {
        return;
      }
      background.style.transform = `scaleX(${viewAmount - 0.1})`;
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
  font-size: var(--headline);
}

@media (min-width: 56em) {
  .conclusion-content {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .conclusion-content--headline {
    font-size: var(--subheadline);
    margin-bottom: var(--row-gap);
  }
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
/*----------------------------------------------------*/

.main-content {
  padding: 10vh 0 5vh 0;
  display: grid;
  grid-auto-rows: min-content;
}

@media (min-width: 30em) {
  .main-content {
    padding: 15vh 0 5vh 0;
  }
}

.main-content--headline {
  font-size: var(--headline);
  color: var(--learning-color);
  text-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.1);
  padding-left: 5vw;
  margin: 5vh 0;
}

@media (min-width: 70em) {
  .main-content--headline {
    padding-left: 15vw;
  }
}

.content-section-layout:last-of-type {
  border-bottom: 1px solid var(--grey-600);
}
/*----------------------------------------------------*/

.extra-content-container1 {
  display: grid;
  background: var(--learning-gradient);
  min-height: 30vh;
}

.svg-graph {
  grid-row: 1/2;
  grid-column: 1/2;
}

.background {
  background-color: var(--background-tertiary);
  grid-row: 1/2;
  grid-column: 1/2;
  transform-origin: right;
}

.extra-content-container2 {
  display: grid;
  grid-template-columns: 1fr 15rem 1fr;
  grid-template-rows: 1fr repeat(4, min-content) 1fr;
  grid-row-gap: var(--1base);
  min-height: 50vh;
}

.button {
  grid-column: 2/3;
  border: 1px solid var(--grey-600);
  min-height: var(--7base);
  padding: var(--2base);
  border: 1px solid var(--grey-600);
  font-size: var(--2base);
  background-color: var(--background-tertiary);
  color: var(--white);
}

.button1 {
  grid-row: 2/3;
}

.button2 {
  grid-row: 3/4;
  border-radius: var(--fourthbase);
  color: var(--learning-color);
}

.button1:active,
.button2:active {
  transform: translateY(0.1rem);
}

.button3 {
  grid-row: 4/5;
  border-radius: var(--4base);
  text-transform: uppercase;
  font-weight: bold;
  font-size: var(--1base);
  position: relative;
  overflow: hidden;
}

.button3:after {
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: var(--learning-gradient);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

.button3:focus:not(:active)::after {
  animation: ripple 0.5s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(30, 20);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(80, 40);
  }
}

.button4 {
  grid-row: 5/6;
  border-radius: var(--fourthbase);
  font-size: var(--1base);
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  overflow: hidden;
}

.arrow-icon {
  height: 0.8rem;
  color: var(--white);
}

.button4:focus:not(:active) .arrow-icon {
  animation: arrow-moving 0.5s ease-out;
}

@keyframes arrow-moving {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  25% {
    transform: translateX(1rem);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 0;
  }
  75% {
    transform: translateX(-1rem);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.button:active,
.button:focus {
  outline: none;
}

/*----------------------------------------------------*/

.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
}
</style>
