<template>
  <article class="frontend">
    <terminal id="js-terminal" />
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <div class="editor-container">
          <editor id="js-editor" class="editor-layout-main active ">
            <p class="editor--text editor--text__comment">
              //web development toolbox
            </p>
            <div class="editor--text">
              <p class="editor--text editor--text__require">
                require(<span class="editor--text text--require__inside"
                  >ES6, advanced CSS</span
                >)
              </p>
              <p class="editor--text editor--text__import">
                import <span class="text--import__inside">Vue</span> from
                <span class="text--import__inside">"vue"</span>
              </p>
            </div>
            <p class="editor--text create-text">
              create <span class="text--import__inside">webApp</span>
            </p>
          </editor>
          <editor class="editor-layout-1"></editor>
          <editor class="editor-layout-2"></editor>
          <editor class="editor-layout-3"></editor>
          <editor class="editor-layout-4"></editor>
          <editor class="editor-layout-5"></editor>
          <editor class="editor-layout-6"></editor>
          <editor class="editor-layout-7"></editor>
        </div>
      </div>
    </section>
    <section class="main-content">
      <h1 class="main-content--headline">Creative web development</h1>

      <content-summery
        class="content-summery-layout js-content-observe"
        headline="Understanding development"
        text=" I bring engaging web apps and prototypes from designs to live with vue and
       javascript. I have to implement the given specs and need to consider
       performance and security."
        sectionID="frontend"
        :summeryContent="[
          {
            headline: 'Lovable Survey Creator',
            text:
              'A simple survey generator to create beautiful and engaging questionairs.'
          },
          {
            headline: 'T-shirt eCommerce store',
            text:
              'A mockup store for brilliant t-shirts in every color there is.'
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="Lovable Survey Creator"
        text="A simple survey generator to create beautiful and engaging
        questionairs. Build with Vue and Firestore as backend and for
        authentication."
        sectionID="frontend"
        alignExtraContent="right"
      >
        <div class="extra-content-container">
          <editor class="active">
            <p class="comment">
              //Click anywhere in here to get to the github repo
            </p>

            <ul class="survey-generator">
              <li>Survey-Generator 1.0:</li>
              <li>- Login/Signup</li>
              <li>- Create surveys</li>
              <li>—— Get a shareable link to send to your users</li>
              <li>- View/Analyze surveys</li>
            </ul>

            <ul class="survey-viewer">
              <li>Survey-Viewer:</li>
              <li>- Fetch surveys from link address</li>
              <li>- Record user comments and answers</li>
            </ul>
          </editor>
        </div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="T-shirt eCommerce store"
        text="Still in progress. A mockup store to order colorfull tshirts. Features around the idea of an SVG Overlay over an image with a CSS mixed-blend-mode (inspiration by u/overcloseness). This also combines marketing and UX aspects. "
        sectionID="frontend"
        alignExtraContent="left"
      >
        <div class="extra-content-container">
          <editor class="active">
            <p class="comment">
              //Click anywhere in here to get to the github repo
            </p>

            <ul class="survey-generator">
              <li>T-shirt eCommerce store:</li>
              <li>- select a color</li>
              <li>- View t-shirt</li>
            </ul>
          </editor>
        </div>
      </content-section>
      <footer class="footer">
        <router-link :to="{ name: 'home' }">Back home</router-link>
      </footer>
    </section>
  </article>
</template>

<script>
import editor from "@/components/development/editor.vue";
import terminal from "@/components/development/terminal-overlay.vue";
import contentSummery from "@/components/buildingBlocks/contentSummery.vue";
import contentSection from "@/components/buildingBlocks/contentSection.vue";

export default {
  components: {
    editor,
    terminal,
    contentSummery,
    contentSection
  },
  //if the basics are being edited, this array contains existing basic information
  props: [],
  name: "frontend",
  data() {
    return {
      scaleValue: 5
    };
  },
  methods: {
    scrollEditor() {
      const editor = document.querySelector("#js-editor");
      const terminal = document.querySelector("#js-terminal");

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;

      //hide terminal on scroll
      if (ratio > 0) {
        terminal.style.opacity = 1 - ratio * 3 > 0 ? ratio * 3 > 0 : 0;
      } else if (ratio > 0.5) {
        terminal.style.display = "none";
      } else {
        terminal.style.opacity = 1;
        terminal.style.display = "grid";
      }

      if (ratio > 1) {
        editor.classList.add("visible");
      } else {
        editor.classList.remove("visible");
      }

      //shrink the editor in to visible field
      let shrinkEditor = this.scaleValue - ratio * 3;
      editor.style.transform = `scale( ${
        shrinkEditor > 1 ? shrinkEditor : 1
      } )`;

      /**/
    }
  },
  computed: {},
  created() {},
  activated() {},
  mounted() {
    const mainEditor = document.getElementById("js-editor");
    mainEditor.style.transform = `scale( ${this.scaleValue} )`;
    window.addEventListener("scroll", this.scrollEditor);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollEditor);
  }
};
</script>

<style scoped>
.frontend {
  /* Positioning */

  /* Box-model */
  min-height: 100%;
  /* Typography */

  /* Visual */
  background-color: var(--background-tertiary);
  /* Misc */
}

.sticky-wrapper {
  height: 300vh;
}

.sticky-content {
  position: sticky;
  width: 100%;
  top: 0;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: var(--4base) 0;
}

.editor-container {
  display: grid;
  grid-template-columns: repeat(9, 5.5rem);
  grid-template-rows: 7rem 6rem 1.5rem 14rem;
  grid-gap: var(--2base);
  grid-template-areas:
    "e1 e1 e2 e2 e2 e3 e3 e3 e3"
    "e4 e4 e4 e5 e6 e6 e6 e6 e6"
    "e4 e4 e4 . e6 e6 e6 e6 e6"
    "e4 e4 e4 em em em em e7 e7";
}

@media (min-width: 22.5em) {
  .editor-container {
    grid-template-columns: repeat(9, 7rem);
    grid-template-rows: 10rem 8rem 2rem 20rem;
  }
}

@media (min-width: 37.5em) {
  .editor-container {
    grid-template-columns: repeat(9, 9.5rem);
    grid-template-rows: 13rem 10rem 3rem 27rem;
  }
}

@media (min-width: 56em) {
  .editor-container {
    transform: scale(1.1);
  }
}

@media (min-width: 70em) {
  .editor-container {
    transform: scale(1.25);
  }
}

.editor-layout-main {
  grid-area: em;
}

.editor-layout-1 {
  grid-area: e1;
}

.editor-layout-2 {
  grid-area: e2;
}

.editor-layout-3 {
  grid-area: e3;
}

.editor-layout-4 {
  grid-area: e4;
}

.editor-layout-5 {
  grid-area: e5;
}

.editor-layout-6 {
  grid-area: e6;
}

.editor-layout-7 {
  grid-area: e7;
}

.editor--text {
  opacity: 0;
  transition: opacity 0.2s ease;
  font-size: 5vw;
}

@media (min-width: 30em) {
  .editor--text {
    font-size: 4vw;
  }
}

@media (min-width: 37.5em) {
  .editor--text {
    font-size: 3vw;
  }
}

@media (min-width: 56em) {
  .editor--text {
    font-size: 2vw;
  }
}

@media (min-width: 70em) {
  .editor--text {
    font-size: 1.5vw;
  }
}

@media (min-width: 80em) {
  .editor--text {
    font-size: 1.25vw;
  }
}

@media (min-width: 90em) {
  .editor--text {
    font-size: var(--2base);
  }
}

.visible .editor--text {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.editor--text__comment {
  color: lightgrey;
}

.editor--text__require,
.editor--text__import,
.create-text {
  color: hsla(286, 45%, 24%, 100);
}

.text--require__inside {
  color: var(--white);
}

.text--import__inside {
  color: hsla(153, 48%, 49%, 100);
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

.extra-content-container {
  width: 100%;
  height: 100%;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
}
</style>
