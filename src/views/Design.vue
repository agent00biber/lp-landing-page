<template>
  <article class="design">
    <section class="sticky-wrapper">
      <div class="sticky-content" id="js-sticky-content">
        <div class="line line-vertical line1 hidden"></div>
        <aside class="sticky-background phase4 hidden"></aside>
        <div class="main-content-container">
          <header class="headline-wrapper">
            <div class="line line-horizontal line3 hidden"></div>
            <h1 class="main--headline phase0 headline-color">
              Systematic UX-Design
            </h1>
            <h1 class="main--headline phase2 hidden">
              <div class="main--headline__skeleton"></div>
              <div class="main--headline__skeleton"></div>
            </h1>
            <h1 class="main--headline phase3 hidden">
              Big Headline - max 2 lines
            </h1>
            <h1 class="main--headline phase5 hidden headline-color">
              Systematic UX-Design
            </h1>
            <p class="headline-label label hidden phase3">h1</p>
            <div class="line line-horizontal line4 hidden"></div>
          </header>

          <div class="content-wrapper content-wrapper1">
            <aside class="content-background phase1 hidden"></aside>
            <div class="line line-horizontal line5 hidden"></div>
            <div class="line line-horizontal line6 hidden"></div>
            <p class="small-headline-label label hidden phase3">h2</p>
            <h2 class="headline phase2 hidden">
              <div class="headline__skeleton"></div>
              <div class="headline__skeleton"></div>
            </h2>
            <h2 class="headline phase3 hidden">
              Subheadline: 1-3 lines, depending on breaks
            </h2>
            <h2 class="headline phase5 hidden headline-color">
              Why do I understand the UX-department?
            </h2>
            <div class="line line-horizontal line7 hidden"></div>
            <div class="line line-horizontal line8 hidden"></div>
            <p class="text-label label hidden phase3">p</p>
            <div class="text-wrapper">
              <div class="text skeleton-wrapper hidden phase2">
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
              </div>

              <p class="text phase3 hidden">
                Prototext: text descriping why I understand different aspekts of
                a ux design and how to design with the user in mind and not for
                dribbble only. Can vary in length.
              </p>
              <p class="text phase5 hidden">
                Before all coding starts, I need to research, concept and
                wireframe the product to know how everything fits together.
                Where and when the user needs guidance.
              </p>
            </div>

            <div class="line line-horizontal line9 hidden"></div>
            <div class="line line-horizontal line10 hidden"></div>
          </div>
          <div class="content-wrapper content-wrapper2">
            <aside class="content-background phase1 hidden"></aside>
            <div class="line line-horizontal line5 hidden"></div>
            <div class="line line-horizontal line6 hidden"></div>
            <p class="small-headline-label label hidden phase3">h2</p>
            <h2 class="headline phase2 hidden">
              <div class="headline__skeleton"></div>
              <div class="headline__skeleton"></div>
              <div class="headline__skeleton"></div>
            </h2>
            <h2 class="headline phase3 hidden">
              Subheadline: 1-3 lines, depending on word breaks
            </h2>
            <h2 class="headline phase5 hidden headline-color">
              Designing for the real world, not a design platform
            </h2>
            <div class="line line-horizontal line7 hidden"></div>
            <div class="line line-horizontal line8 hidden"></div>
            <p class="text-label label hidden phase3">p</p>
            <div class="text-wrapper">
              <div class="text skeleton-wrapper hidden phase2">
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
              </div>
              <p class="text phase3 hidden">
                Prototext: text descriping why I understand different aspekts of
                a ux design and how to design with the user in mind and not for
                dribbble only. Can vary in length.
              </p>
              <p class="text phase5 hidden">
                I also know how to create beauty, delight and how to foster a
                sense of excitement, so the user wants to discover every
                feature. But always with the user in mind and not the dribbble
                front page.
              </p>
            </div>

            <div class="line line-horizontal line9 hidden"></div>
            <div class="line line-horizontal line10 hidden"></div>
          </div>
          <div class="content-wrapper content-wrapper3">
            <aside class="content-background phase1 hidden"></aside>
            <div class="line line-horizontal line5 hidden"></div>
            <div class="line line-horizontal line6 hidden"></div>
            <p class="small-headline-label label hidden phase3">h2</p>
            <h2 class="headline phase2 hidden">
              <div class="headline__skeleton"></div>
            </h2>
            <h2 class="headline phase3 hidden">
              Subheadline: 1-3 lines
            </h2>
            <h2 class="headline phase5 hidden headline-color">
              For an indepth perspective
            </h2>
            <div class="line line-horizontal line7 hidden"></div>
            <div class="line line-horizontal line8 hidden"></div>
            <p class="text-label label hidden phase3">p</p>
            <div class="text-wrapper">
              <div class="text skeleton-wrapper hidden phase2">
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
                <div class="text__skeleton"></div>
              </div>
              <p class="text phase3 hidden">
                Prototext: linking to my other portfolio page with more details
                and less flashy animations
              </p>
              <p class="text phase5 hidden">
                Go to my portfolio page and read about my process
              </p>
              <div class="text-box--small phase5 hidden">
                <a class="link" href="#">Portfolio</a>
              </div>
            </div>

            <div class="line line-horizontal line9 hidden"></div>
            <div class="line line-horizontal line10 hidden"></div>
          </div>
        </div>
        <div class="line line-vertical line2 hidden"></div>
      </div>
    </section>
    <section class="main-content">
      <content-summery
        class="content-summery-layout js-content-observe"
        headline="Understanding UX design"
        text="Because before coding, I need to research, concept and wireframe the product to know how everything fits together. Where and when the user needs guidance. But also how to create beauty, delight and how to foster a sense of excitement, so the user wants to discover every feature."
        sectionID="design"
        :summeryContent="[
          {
            headline: 'Lovable Survey Creator',
            text:
              'A simple survey generator to create beautiful and engaging questionairs. '
          },
          {
            headline: 'T-shirt eCommerce store',
            text:
              'A mockup store for brilliant t-shirts in every color there is'
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="Lovable Survey Creator"
        text="A simple survey generator to create beautiful and engaging questionairs. Visit my casestudy website for an indepth persepective."
        sectionID="design"
        alignExtraContent="right"
        buttonText="read the casestudy"
      >
        <div class="extra-content-container"></div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="T-shirt eCommerce store"
        text="Still in progress. A mockup store to order colorfull tshirts. Features around the idea of an SVG Overlay over an image with a CSS mixed-blend-mode (inspiration by u/overcloseness). This also combines marketing and UX aspects."
        sectionID="design"
        alignExtraContent="left"
        buttonText="read the casestudy"
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
  name: "design",
  data() {
    return {};
  },
  methods: {
    scrollWireframe() {
      let ratio = Math.max(window.scrollY) / window.innerHeight;
      console.log(ratio);

      //phase0
      this.phase0(ratio);

      //phase1
      this.phase1(ratio);

      //phase2
      this.phase2(ratio);

      //phase3
      this.phase3(ratio);

      //phase4
      this.phase4(ratio);

      //phase4
      this.phase5(ratio);
    },
    phase0(ratio) {
      const phase0 = document.querySelectorAll(".phase0");

      if (ratio > 0.1) {
        phase0.forEach(item => {
          item.classList.add("hidden");
        });
      } else {
        phase0.forEach(line => {
          line.classList.remove("hidden");
        });
      }
    },
    phase1(ratio) {
      const lines = document.querySelectorAll(".line");
      const phase1 = document.querySelectorAll(".phase1");

      if (ratio > 0.5) {
        lines.forEach((line, index) => {
          line.style.transitionDelay = `${index / 20}s`;
          line.classList.remove("hidden");
        });
        phase1.forEach((item, index) => {
          item.style.transitionDelay = `${index + lines.length / 20}s`;
          item.classList.remove("hidden");
        });
      } else {
        lines.forEach(line => {
          line.classList.add("hidden");
        });
        phase1.forEach(item => {
          item.classList.add("hidden");
        });
      }
    },
    phase2(ratio) {
      const phase2 = document.querySelectorAll(".phase2");
      if (ratio > 1) {
        phase2.forEach((item, index) => {
          item.style.transitionDelay = `${index / 10}s`;
          item.classList.remove("hidden");
        });
      } else {
        phase2.forEach(item => {
          item.classList.add("hidden");
        });
      }
    },
    phase3(ratio) {
      const phase2 = document.querySelectorAll(".phase2");
      const phase3 = document.querySelectorAll(".phase3");
      if (ratio > 2) {
        phase2.forEach(item => {
          item.classList.add("re-hidden");
        });
        phase3.forEach((item, index) => {
          item.style.transitionDelay = `${index / 20}s`;
          item.classList.remove("hidden");
        });
      } else {
        phase2.forEach(item => {
          item.classList.remove("re-hidden");
        });
        phase3.forEach(item => {
          item.classList.add("hidden");
        });
      }
    },
    phase4(ratio) {
      const phase4 = document.querySelectorAll(".phase4");
      const mainHeadlines = document.querySelectorAll(".main--headline");
      const headlines = document.querySelectorAll(".headline");

      if (ratio > 3) {
        phase4.forEach((item, index) => {
          item.style.transitionDelay = `${index / 20}s`;
          item.classList.remove("hidden");
        });

        mainHeadlines.forEach((item, index) => {
          item.style.transitionDelay = `${index / 20}s`;
          item.classList.add("headline-color");
        });

        headlines.forEach((item, index) => {
          item.style.transitionDelay = `${index / 20}s`;
          item.classList.add("headline-color");
        });
      } else {
        phase4.forEach(item => {
          item.classList.add("hidden");
        });

        mainHeadlines.forEach(item => {
          item.classList.remove("headline-color");
        });

        headlines.forEach(item => {
          item.classList.remove("headline-color");
        });
      }
    },
    phase5(ratio) {
      const phase3 = document.querySelectorAll(".phase3");
      const phase5 = document.querySelectorAll(".phase5");
      const lines = document.querySelectorAll(".line");
      if (ratio > 4) {
        phase3.forEach(item => {
          item.classList.add("re-hidden");
        });
        phase5.forEach((item, index) => {
          item.style.transitionDelay = `${index / 20}s`;
          item.classList.remove("hidden");
        });
        lines.forEach((line, index) => {
          line.style.transitionDelay = `${index / 20}s`;
          line.classList.add("re-hidden");
        });
      } else {
        phase3.forEach(item => {
          item.classList.remove("re-hidden");
        });
        phase5.forEach(item => {
          item.classList.add("hidden");
        });
        lines.forEach((line, index) => {
          line.style.transitionDelay = `${index / 20}s`;
          line.classList.remove("re-hidden");
        });
      }
    }
  },
  computed: {},
  created() {},
  //same check for route-view keep-alive
  activated() {},
  mounted() {
    window.addEventListener("scroll", this.scrollWireframe);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollWireframe);
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
  background-color: var(--background-tertiary);
  /* Misc */
}

.sticky-wrapper {
  height: 800vh;
}

.sticky-content {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 5;
  overflow: hidden;
  background-color: var(--background-primary);
  display: grid;
  grid-template-rows: var(--sticky-headline-padding) 1fr;
  grid-template-columns: var(--view-main);
}

.sticky-background {
  grid-row: 1/3;
  grid-column: 1/4;
  background-color: var(--background-tertiary);
  position: relative;
  z-index: 2;
}

.line {
  background-color: var(--grey-600);
  position: relative;
  z-index: 7;
  opacity: 1;
}

.line-vertical {
  grid-row: 1/3;
  width: 1px;
  height: 100%;
}

.line-horizontal {
  height: 1px;
  width: 100%;
}

.line1 {
  grid-column: 1/2;
  justify-self: end;
}

.line2 {
  grid-column: 3/4;
  justify-self: start;
}

.main-content-container {
  grid-row: 2/3;
  grid-column: 1/4;
  display: grid;
  grid-row-gap: var(--1base);
  position: relative;
  z-index: 3;
}

.label {
  align-self: start;
  justify-self: center;
}

.headline-label {
  grid-column: 1/2;
  padding-top: var(--fourthbase);
}

.headline-wrapper {
  display: grid;
  grid-template-columns: var(--view-main);
  grid-auto-rows: min-content;
}

.line3 {
  grid-row: 1/2;
  grid-column: 1/4;
}

.line4 {
  grid-row: 3/4;
  grid-column: 1/4;
}

.main--headline {
  grid-row: 2/3;
  grid-column: 2/3;
  font-size: var(--headline);
  line-height: 120%;
  color: var(--white);
  text-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.1);
  position: relative;
}

.main--headline:first-of-type {
  color: var(--design-color);
}

.main--headline__skeleton {
  background-color: var(--white);
  height: var(--headline);
  width: 100%;
  margin-bottom: var(--thirdbase);
  transition: opacity 0.2s var(--moving-out);
}

.headline__skeleton {
  background-color: var(--white);
  height: var(--subheadline);
  width: 100%;
  margin-bottom: var(--thirdbase);
  transition: opacity 0.2s var(--moving-out);
}

.content-wrapper {
  display: grid;
  grid-template-columns: var(--view-main);
  grid-auto-rows: min-content;
  background-color: var(--background-primary);
  min-height: 40vh;
}

.content-background {
  grid-column: 1/4;
  grid-row: 1/9;
  background-color: var(--background-secondary);
  transition: opacity 0.2s var(--moving-out);
}

.line5 {
  grid-column: 1/4;
  grid-row: 1/2;
  margin-bottom: var(--5base);
}

@media (min-width: 22.5em) {
  .line5 {
    margin-bottom: var(--7base);
  }
}

.line6 {
  grid-column: 1/4;
  grid-row: 2/3;
}

.small-headline-label {
  grid-column: 1/2;
  grid-row: 3/4;
  padding-top: var(--thirdbase);
}

.headline {
  grid-column: 2/3;
  grid-row: 3/4;
  color: var(--white);
  font-size: var(--subheadline);
}

.line7 {
  grid-column: 1/4;
  grid-row: 4/5;
  margin-bottom: var(--row-gap);
}

.line8 {
  grid-row: 5/6;
  grid-column: 1/4;
}

.text-label {
  grid-column: 1/2;
  grid-row: 6/7;
  padding-top: var(--fourthbase);
}

.text-wrapper {
  grid-column: 2/3;
  grid-row: 6/7;
  display: grid;
}

.text {
  font-size: var(--2base);
  grid-column: 1/2;
  grid-row: 1/2;
}

.text__skeleton {
  background-color: var(--white);
  height: var(--3base);
  width: 100%;
  margin-bottom: var(--thirdbase);
  transition: opacity 0.2s var(--moving-out);
}

.text-box--small {
  margin-top: var(--row-gap);
  padding: var(--1base);
  border-radius: var(--fourthbase);
  background-color: var(--background-primary);
  width: 100%;
}

.line9 {
  grid-column: 1/4;
  grid-row: 7/8;
}

.line10 {
  margin-top: var(--5base);
  grid-column: 1/4;
  grid-row: 8/9;
}

@media (min-width: 22.5em) {
  .line10 {
    margin-top: var(--7base);
  }
}

.hidden {
  opacity: 0;
  transition: all 0.4s var(--moving-out);
}

.re-hidden {
  opacity: 0;
  transition: all 0.4s var(--moving-out);
}

.headline-color {
  color: var(--design-color);
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
  color: var(--frontend-color);
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
</style>
