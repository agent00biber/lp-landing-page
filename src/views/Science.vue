<template>
  <article class="science">
    <section class="sticky-wrapper">
      <div class="sticky-content" id="js-sticky-container-color-change">
        <h1 class="sticky-content--headline" id="js-sticky-headline-background">
          Astounding Science
        </h1>

        <div
          class="post-erruption-container"
          id="js-post-erruption-container-zindex-change"
        >
          <div
            class="atom-container"
            :style="{
              'grid-template-columns': `repeat(${Math.floor(
                chemicalElements.length / 6
              )}, min-content)`
            }"
          >
            <div
              class="atom js-atom"
              v-for="(element, index) in chemicalElements"
              :style="{ transitionDelay: `${index / 100}s` }"
            >
              <p class="atom--weight">{{ Math.round(element.mass) }}</p>
              <p class="atom--number">{{ index }}</p>
              <h3 class="atom--symbol">{{ element.symbol }}</h3>
              <p class="atom--name">{{ element.name }}</p>
              <aside
                class="atom--background"
                :style="{ transitionDelay: `${index / 10}s` }"
              ></aside>
            </div>
          </div>
          <aside
            class="backgroud-transition"
            id="js-atom-container-background-appear"
          ></aside>
        </div>
      </div>
    </section>
    <section class="main-content">
      <header class="headline-wrapper">
        <h1 class="main--headline">Creative web development</h1>
      </header>

      <div class="content-wrapper">
        <h2 class="headline">Bringing your Ideas to live</h2>

        <p class="text">
          Dont waste a beautiful designed idea as a file on your screen.
        </p>
      </div>
      <div class="content-wrapper">
        <h2 class="headline">See some examples</h2>

        <p class="text">
          Link to github
        </p>

        <div class="text-box--small">
          <a class="link" href="#">Feedback Creator</a>
        </div>
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
import elements from "@/assets/chemicalElements.js";

export default {
  components: {},
  //if the basics are being edited, this array contains existing basic information
  props: [],
  name: "science",
  data() {
    return {
      circleAmount: 8,
      circleSizeDifference: 2,
      circleBase: 20,
      circleMultiplier: 15
    };
  },
  methods: {
    scrollAtoms() {
      const stickyContainer = document.getElementById(
        "js-sticky-container-color-change"
      );

      const atomContainerBackground = document.getElementById(
        "js-atom-container-background-appear"
      );
      const stickyHeadline = document.getElementById(
        "js-sticky-headline-background"
      );

      const atoms = document.querySelectorAll(".js-atom");

      let ratio = Math.max(window.scrollY) / window.innerHeight;

      if (ratio > 0.5) {
        atoms.forEach(atom => {
          atom.classList.add("appear");
          atom.childNodes[4].classList.add("appear--delayed");
        });
        atomContainerBackground.classList.add("appear");
      } else {
        atoms.forEach(atom => {
          atom.classList.remove("appear");
          atom.childNodes[4].classList.remove("appear--delayed");
        });
        atomContainerBackground.classList.remove("appear");
      }
    }
  },
  computed: {
    chemicalElements() {
      if (window.innerWidth < 500) {
        let size = 30;
        return elements.elements.slice(0, size);
      }

      if (window.innerWidth < 1000) {
        let size = 60;
        return elements.elements.slice(0, size);
      }

      if (window.innerWidth >= 1000) {
        let size = elements.elements.length;
        return elements.elements.slice(0, size);
      }
    }
  },
  created() {},
  //same check for route-view keep-alive
  activated() {},
  mounted() {
    window.addEventListener("scroll", this.scrollAtoms);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollAtoms);
  }
};
</script>

<style scoped>
.science {
  /* Positioning */

  /* Box-model */
  min-height: 100%;
  /* Typography */

  /* Visual */
  background-color: var(--background-tertiary);
  /* Misc */
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
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: var(--sticky-headline-padding) min-content 1fr;
  background-color: var(--background-primary);
}

.sticky-content--headline {
  grid-column: 2/3;
  grid-row: 2/3;
  position: relative;
  z-index: 8;
  color: var(--science-color);
  background-color: var(--background-primary);
  padding: var(--halfbase);
  font-size: var(--headline);
  line-height: 120%;
}

.post-erruption-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 4;
  overflow: hidden;
}

.atom-container {
  height: 100vh;
  width: 200vw;
  display: grid;
}

.atom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  grid-row-gap: var(--halfbase);
  border: 1px solid grey;
  padding: var(--halfbase);
  width: 7rem;
  position: relative;
  background: var(--science-gradient);
  opacity: 0;
  transition: all 0.4s var(--moving-out);
}

.atom--background {
  position: absolute;
  background-color: var(--background-tertiary);
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 0.4s var(--moving-out);
  transition-delay: 0.5s;
  opacity: 0;
}

.atom--background:hover {
  opacity: 0;
  transition: opacity 0.2s var(--moving-in);
}

.appear--delayed {
  opacity: 1;
  transition: all 0.4s var(--moving-out);
  transition-delay: 0.5s;
}

.atom--number {
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
  z-index: 3;
  position: relative;
}

.atom--weight {
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: center;
  z-index: 3;
  position: relative;
}

.atom--symbol {
  grid-column: 1/3;
  grid-row: 2/3;
  justify-self: center;
  font-size: var(--3base);
  z-index: 3;
  position: relative;
}

.atom--name {
  grid-column: 1/3;
  grid-row: 3/4;
  justify-self: center;
  z-index: 3;
  position: relative;
}

.backgroud-transition {
  position: relative;
  height: 30vh;
  width: 100%;
  bottom: 30vh;
  left: 0;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    var(--grey-900) 90%
  );
  z-index: 5;
  opacity: 0;
  transition: all 0.4s var(--moving-out);
}

.appear {
  opacity: 1;
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
  color: var(--science-color);
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
  color: var(--science-color);
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
