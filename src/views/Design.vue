<template>
  <article class="design">
    <section class="sticky-wrapper">
      <div class="sticky-content" id="js-sticky-content">
        <div class="line line-vertical line1 hidden"></div>
        <aside class="sticky-background phase4 hidden"></aside>
        <div class="main-content-container">
          <header class="headline-wrapper">
            <div class="line line-horizontal line3 hidden"></div>
            <h1 class="main--headline phase0 ">
              Systematic UX-Design
            </h1>
            <h1 class="main--headline phase2 hidden">
              <div class="main--headline__skeleton"></div>
              <div class="main--headline__skeleton"></div>
            </h1>
            <h1 class="main--headline phase3 hidden">
              Big Headline - max 2 lines
            </h1>
            <h1 class="main--headline phase5 hidden">
              Systematic UX-Design
            </h1>
            <div class="line line-horizontal line4 hidden"></div>
          </header>

          <div class="content-wrapper content-wrapper1">
            <aside class="content-background phase1 hidden"></aside>
            <div class="line line-horizontal line5 hidden"></div>
            <div class="line line-horizontal line6 hidden"></div>
            <h2 class="headline phase2 hidden">
              <div class="headline__skeleton"></div>
              <div class="headline__skeleton"></div>
            </h2>
            <h2 class="headline phase3 hidden">
              Subheadline: 1-3 lines, depending on breaks
            </h2>
            <h2 class="headline phase5 hidden">
              Why do I understand the UX-department?
            </h2>
            <div class="line line-horizontal line7 hidden"></div>
            <div class="line line-horizontal line8 hidden"></div>
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
            <h2 class="headline phase2 hidden">
              <div class="headline__skeleton"></div>
              <div class="headline__skeleton"></div>
              <div class="headline__skeleton"></div>
            </h2>
            <h2 class="headline phase3 hidden">
              Subheadline: 1-3 lines, depending on word breaks
            </h2>
            <h2 class="headline phase5 hidden">
              Designing for the real world, not a design platform
            </h2>
            <div class="line line-horizontal line7 hidden"></div>
            <div class="line line-horizontal line8 hidden"></div>
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
            <h2 class="headline phase2 hidden">
              <div class="headline__skeleton"></div>
            </h2>
            <h2 class="headline phase3 hidden">
              Subheadline: 1-3 lines
            </h2>
            <h2 class="headline phase5 hidden">
              For an indepth perspective
            </h2>
            <div class="line line-horizontal line7 hidden"></div>
            <div class="line line-horizontal line8 hidden"></div>
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
      const lines = document.querySelectorAll(".line");
      const phase0 = document.querySelectorAll(".phase0");
      const phase1 = document.querySelectorAll(".phase1");
      const phase2 = document.querySelectorAll(".phase2");
      const phase3 = document.querySelectorAll(".phase3");

      let ratio = Math.max(window.scrollY) / window.innerHeight;
      console.log(ratio);

      //phase0
      if (ratio > 0.1) {
        phase0.forEach(item => {
          item.classList.add("hidden");
        });
      } else {
        phase0.forEach(line => {
          line.classList.remove("hidden");
        });
      }

      //phase1
      if (ratio > 0.2) {
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

      //phase2
      if (ratio > 0.5) {
        phase2.forEach((item, index) => {
          item.style.transitionDelay = `${index / 20}s`;
          item.classList.remove("hidden");
        });
      } else {
        phase2.forEach(item => {
          item.classList.add("hidden");
        });
      }

      //phase3
      if (ratio > 0.5) {
        phase3.forEach((item, index) => {
          item.style.transitionDelay = `${index / 20}s`;
          item.classList.remove("hidden");
        });
      } else {
        phase3.forEach(item => {
          item.classList.add("hidden");
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
  height: 500vh;
}

.sticky-content {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 5;
  overflow: hidden;
  background-color: var(--background-primary);
  display: grid;
  grid-template-rows: 10vh 1fr;
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
  padding: 10vh 0 5vh 0;
  display: grid;
  grid-row-gap: var(--1base);

  position: relative;
  z-index: 3;
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
  font-size: var(--5base);
  line-height: 120%;
  color: var(--design-color);
  text-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.1);
  position: relative;
}

.main--headline__skeleton {
  background-color: var(--white);
  height: var(--5base);
  width: 100%;
  margin-bottom: var(--thirdbase);
  transition: opacity 0.2s var(--moving-out);
}

.headline__skeleton {
  background-color: var(--white);
  height: var(--4base);
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
  margin-bottom: var(--7base);
}

.line6 {
  grid-column: 1/4;
  grid-row: 2/3;
}

.headline {
  grid-column: 2/3;
  grid-row: 3/4;
  color: var(--design-color);
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
  height: var(--2base);
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
  margin-top: var(--7base);
  grid-column: 1/4;
  grid-row: 8/9;
}

.hidden {
  opacity: 0;
  transition: all 0.4s var(--moving-out);
}

.main-content {
  display: grid;
  grid-row-gap: var(--1base);
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  padding-bottom: 5vh;
}
</style>
