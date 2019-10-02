<template>
  <article class="marketing">
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <header class="sticky-header">
          <h1 class="sticky-headline">Persuasive Marketing</h1>
        </header>

        <aside class="silo silo1 js-silo"></aside>
        <aside class="silo silo2 js-silo"></aside>
        <aside class="silo silo3 js-silo"></aside>
        <aside class="silo silo4 js-silo"></aside>
        <aside class="silo silo5 js-silo"></aside>
        <aside class="silo silo6 js-silo"></aside>
        <div class="slang-container">
          <p class="slang">
            {{ slangContent }}
          </p>
        </div>
      </div>
    </section>

    <section class="main-content">
      <h1 class="main-content--headline">Persuasive Marketing</h1>
      <content-summery
        class="content-summery-layout js-content-observe"
        headline="Understanding Marketing"
        text="I worked in a marketing agency for over a year and experienced the importance of KPIs, social media performance and persuasive design."
        sectionID="marketing"
        :summeryContent="[
          {
            headline: 'Persuasive marketing psychology',
            text:
              'I enjoy digital psychology and behavioral sciences. I try to empower the user and paint him as the hero of his own story, so I can guide and help him with a certain type of product or service.'
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="Persuasive marketing psychology "
        text="xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx. xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx.xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx.xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx.xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx.xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx."
        sectionID="marketing"
        alignExtraContent="right"
      >
        <div class="extra-content-container"></div>
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

export default {
  components: {
    contentSummery,
    contentSection
  },
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
  computed: {
    slangContent() {
      let marketingSlang =
        "Framing, Loss aversion, dont lose out on this deal, commitment and consitstency, complete the task, foot-in-the-door, wishlists, defaulting, friction costs, triggers, external/internal, motivation, abillity, social proof, follower count, 64734 peopled liked this page, 5 stars, already sold out, scarcity, deadline, free trial ends soon, fear of missing out, rewards, dopamine boost, points, badges, liked, giving back, reciprocity, get this ebook for free, newsletter signup, anchoring a price, only 2 items left, cross selling, bulk ordering,";

      let widthMultiplier = Math.floor(window.innerWidth / 400);
      let heightMultiplier = Math.floor(window.innerHeight / 200);

      return marketingSlang.repeat(widthMultiplier + heightMultiplier);
    }
  },
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
  grid-template-columns: 1fr 5fr 5fr 1fr;
  grid-template-rows: var(--sticky-headline-padding) min-content 1fr;
  background-color: var(--background-tertiary);
}

@media (min-width: 22.5em) {
  .sticky-content {
    grid-template-columns: 1fr 4fr 4fr 1fr;
  }
}

@media (min-width: 37.5em) {
  .sticky-content {
    grid-template-columns: 1fr repeat(4, 1fr) 1fr;
  }
}

@media (min-width: 45em) {
  .sticky-content {
    grid-template-columns: 1fr repeat(6, 1fr) 1fr;
  }
}

@media (min-width: 56em) {
  .sticky-content {
    grid-template-columns: 1fr repeat(8, 1fr) 1fr;
  }
}

@media (min-width: 70em) {
  .sticky-content {
    grid-template-columns: 1fr repeat(10, 1fr) 1fr;
  }
}

.sticky-header {
  grid-column: 1/5;
  grid-row: 2/3;
  z-index: 7;

  display: grid;
  grid-template-columns: var(--view-main);
}

.sticky-headline {
  grid-column: 2/3;
  color: var(--marketing-color);
  background-color: var(--background-primary);
  font-size: var(--headline);
  padding: var(--halfbase);
  line-height: 120%;
}

.silo {
  grid-row: 1/4;
  background-color: var(--background-primary);
  transform-origin: center right;
}

.silo1 {
  grid-column: 1/3;
}
.silo2 {
  grid-column: 3/5;
}
.silo3 {
  display: none;
}
.silo4 {
  display: none;
}
.silo5 {
  display: none;
}
.silo6 {
  display: none;
}

.slang-container {
  grid-column: 1/5;
  grid-row: 1/4;
  overflow: hidden;
  text-transform: uppercase;
}

.slang {
  font-size: var(--subheadline);
  font-weight: bold;
  width: 150vw;
  background: var(--marketing-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 37.5em) {
  .silo1 {
    grid-column: 1/3;
  }
  .silo2 {
    grid-column: 3/5;
  }
  .silo3 {
    display: block;
    grid-column: 5/7;
  }
  .sticky-header,
  .slang-container {
    grid-column: 1/7;
  }
}

@media (min-width: 45em) {
  .silo1 {
    grid-column: 1/3;
  }
  .silo2 {
    grid-column: 3/5;
  }
  .silo3 {
    grid-column: 5/7;
  }
  .silo4 {
    display: block;
    grid-column: 7/9;
  }
  .sticky-header,
  .slang-container {
    grid-column: 1/9;
  }
}

@media (min-width: 56em) {
  .silo1 {
    grid-column: 1/3;
  }
  .silo2 {
    grid-column: 3/5;
  }
  .silo3 {
    grid-column: 5/7;
  }
  .silo4 {
    grid-column: 7/9;
  }
  .silo5 {
    display: block;
    grid-column: 9/11;
  }
  .sticky-header,
  .slang-container {
    grid-column: 1/11;
  }
}

@media (min-width: 70em) {
  .silo1 {
    grid-column: 1/3;
  }
  .silo2 {
    grid-column: 3/5;
  }
  .silo3 {
    grid-column: 5/7;
  }
  .silo4 {
    grid-column: 7/9;
  }
  .silo5 {
    display: block;
    grid-column: 9/11;
  }
  .silo6 {
    display: block;
    grid-column: 11/13;
  }
  .sticky-header,
  .slang-container {
    grid-column: 1/13;
  }
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
  color: var(--marketing-color);
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

.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
}
</style>
