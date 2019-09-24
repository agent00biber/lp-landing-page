<template>
  <article class="marketing">
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <h1 class="sticky-headline">Persuasive Marketing</h1>
        <aside class="silo silo1 js-silo"></aside>
        <aside class="silo silo2 js-silo"></aside>
        <div class="slang-container">
          <p class="slang">
            Framing, Loss aversion, dont lose out on this deal, commitment and
            consitstency, complete the task, foot-in-the-door, wishlists,
            defaulting, friction costs, triggers, external/internal, motivation,
            abillity, social proof, follower count, 64734 peopled liked this
            page, 5 stars, already sold out, scarcity, deadline, free trial ends
            soon, fear of missing out, rewards, dopamine boost, points, badges,
            liked, giving back, reciprocity, get this ebook for free, newsletter
            signup, anchoring a price, only 2 items left, cross selling, bulk
            ordering
          </p>
        </div>
      </div>
    </section>
    <section class="main-content">
      <header class="headline-wrapper">
        <h1 class="main--headline">Persuasive Marketing</h1>
      </header>

      <div class="content-wrapper">
        <h2 class="headline">Why do I understand the marketing department?</h2>

        <p class="text">
          Because I worked in a marketing agency for over a year and experienced
          the importance of KPIs, social media performance and persuasive design
        </p>
      </div>
      <div class="content-wrapper">
        <h2 class="headline">digital psychology and behavioral sciences</h2>

        <p class="text">
          I try to empower the user and paint him as the hero of his own story,
          so I can guide and help him with a certain type of product or service.
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
  name: "marketing",
  data() {
    return {};
  },
  methods: {
    scrollSilos() {
      const silos = document.querySelectorAll(".js-silo");

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;

      silos.forEach(silo => {
        silo.style.transform = `scaleX(${1 - ratio > 0 ? 1 - ratio : 0})`;
      });
      //shrink the editor in to visible field
      /*let shrinkEditor = this.scaleValue - ratio * 3;
      editor.style.transform = `scale( ${
        shrinkEditor > 1 ? shrinkEditor : 1
      } )`;

      */
    }
  },
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.scrollSilos);
    const silos = document.querySelectorAll(".js-silo");
    silos.forEach(silo => {
      silo.style.transform = `scaleX(1)`;
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollSilos);
  }
};
</script>

<style scoped>
.marketing {
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
  grid-template-columns: 1fr 4fr 4fr 1fr;
  grid-template-rows: 2fr 3fr;
  background-color: var(--background-tertiary);
}

.sticky-headline {
  grid-column: 2/4;
  grid-row: 1/2;
  align-self: end;
  color: var(--marketing-color);
  z-index: 7;

  background-color: var(--background-primary);
  padding: var(--halfbase);
  font-size: var(--6base);
  line-height: 120%;
}

.silo {
  grid-row: 1/3;
  background-color: var(--background-primary);
  transform-origin: center right;
}

.silo1 {
  grid-column: 1/3;
}
.silo2 {
  grid-column: 3/5;
}

.slang-container {
  grid-column: 1/5;
  grid-row: 1/3;
  overflow: hidden;
  text-transform: uppercase;
}

.slang {
  font-size: var(--4base);
  font-weight: bold;
  width: 150vw;
  background: var(--marketing-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  color: var(--marketing-color);
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
  color: var(--marketing-color);
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
