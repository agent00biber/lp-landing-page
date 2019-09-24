<template>
  <article class="intro">
    <section class="sticky-wrapper">
      <div class="sticky-content" id="js-sticky-content">
        <header class="teams-container" id="js-team-seperation">
          <h3 class="teams-container--topline">
            Misscommunication can seperate even the best teams and reduce their
            efficiancy
          </h3>
          <h1 class="teams-container--headline">
            <b class="js-seperate">T</b><b class="js-seperate">E</b
            ><b class="js-seperate">A</b><b class="js-seperate">M</b
            ><b class="js-seperate">S</b>
          </h1>
        </header>
      </div>
    </section>
    <section class="main-content">
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
  name: "intro",
  data() {
    return {};
  },
  methods: {
    scrollSilos() {
      const seperateLetters = document.querySelectorAll(".js-seperate");

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;

      seperateLetters.forEach((letter, index) => {
        if (index % 2 !== 1) {
          letter.style.transform = `translateY(${-ratio * 2}rem)`;
        } else {
          letter.style.transform = `translateY(${ratio * 2}rem)`;
        }
      });
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
.intro {
  /* Positioning */

  /* Box-model */
  min-height: 100%;
  /* Typography */

  /* Visual */
  background-color: var(--grey-600);
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
  background-color: var(--grey-500);
}

.teams-container {
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: 33%;
  grid-auto-rows: min-content;
  grid-row-gap: var(--row-gap);
  background-color: hsla(0, 0%, 1%, 1);
  height: 100vh;
}

.teams-container--topline {
  padding: 4rem 0;
  grid-column: 2/3;
  grid-row: 1/2;
  position: relative;
  z-index: 3;
}

.teams-container--headline {
  padding: 4rem 0;
  grid-column: 2/3;
  grid-row: 2/3;
  position: relative;
  z-index: 3;
  justify-self: center;
  font-size: var(--7base);
  display: flex;
}

.js-seperate {
  display: block;
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
  color: var(--development-color);
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

.headline {
  grid-column: 2/3;
  color: var(--development-color);
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
