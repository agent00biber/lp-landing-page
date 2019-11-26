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

          <editor
            v-for="(editor, index) in 7"
            :class="[`editor-layout-${index + 1}`]"
            :key="'editor' + index"
            :id="'editor-id' + (index + 1)"
          >
            <div
              class="editor--coding-bar"
              v-for="(codingBar, codingIndex) in randomNumber(2, 7)"
              :key="'coding-bar' + codingIndex"
              :style="{
                width: randomNumber(20, 70) + '%',
                background: `linear-gradient(135deg, #3a6186 0%, #2c8925 ${randomNumber(
                  20,
                  100
                )}%)`
              }"
            ></div
          ></editor>
        </div>
      </div>
    </section>
    <section class="main-content">
      <h1 class="main-content--headline">Creative web development</h1>

      <content-summery
        class="content-summery-layout js-content-observe"
        headline="Understanding development"
        text="I bring engaging and stunning web apps and prototypes to live with vue and javascript. I implement and advance given design-specs but also need to consider best practices, performance, and browser-compatibility. I’m always looking out for new and simpler ways of achieving the desired solution."
        sectionID="frontend"
        :summeryContent="[
          {
            headline: 'T-shirt e-commerce store',
            text:
              'E-Commerce websites are a huge part of the web and provided another project to build with my steadily advancing frontend knowledge. I also wanted to get started with testing- and validation-frameworks.'
          },
          {
            headline: 'Lovable Survey Creator',
            text:
              'To get feedback for future projects nicely and reliably, I build a survey-generator. It was meant to be easy and uncomplicated to do -even from mobile and start into frontend-backend communication and user authentication with firebase.'
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="T-shirt e-commerce store"
        text="Still in progress. A mockup store to order colorful t-shirts. Features around the idea of an SVG Overlay over an image with a CSS mixed-blend-mode (inspiration by u/overcloseness). This also combines marketing and UX aspects. "
        sectionID="frontend"
        alignExtraContent="left"
        buttonText="Github repo"
        buttonLink="https://github.com/LucasPaetow/WIP-t-shirt-store"
      >
        <div class="extra-content-container">
          <editor class="active js-editor-parallax extra-content--editor">
            <p class="editor__comment survey-content">
              //Or click anywhere in here to get to the github repo
            </p>

            <ul class="survey-generator survey-content">
              <li class="editor__headline">T-shirt e-commerce store:</li>
              <li>- select a color from an imported list</li>
              <li>- View t-shirts in your chosen cholor</li>
              <li>--- Change the color if nessesary</li>
              <li>
                - “Order” them by going through the order process (there is not
                a real product yet, so you cant order something real)
              </li>
              <li>- Sign in / log in / continue as guest</li>
            </ul>
          </editor>
        </div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="Lovable Survey Creator"
        text="A simple survey generator to create beautiful and engaging
        questionairs. Build with Vue and Firestore as backend and for
        authentication."
        sectionID="frontend"
        alignExtraContent="right"
        buttonText="Github repo"
        buttonLink="https://github.com/LucasPaetow/lovable-survey-creator"
      >
        <div class="extra-content-container ">
          <editor class="active js-editor-parallax extra-content--editor">
            <p class="editor__comment survey-content">
              //Or click anywhere in here to get to the github repo
            </p>

            <ul class="survey-generator survey-content">
              <li class="editor__headline">Survey-Generator 1.0:</li>
              <li>- Create / delete surveys</li>
              <li>--- Get a shareable link to send to your users</li>
              <li>- View / analyze surveys</li>
              <li>- Sign in / log in</li>
            </ul>

            <ul class="survey-viewer survey-content">
              <li class="editor__headline">Survey-Viewer:</li>
              <li>- Fetch surveys from link address</li>
              <li>- Record user comments and feedback answers</li>
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

      this.parallaxImages();
    },
    parallaxImages() {
      //dont use animations for mobile and tablets
      if (window.innerWidth < 1000) {
        return;
      }

      const editors = document.querySelectorAll(".js-editor-parallax");

      editors.forEach(editor => {
        let inView = editor.getBoundingClientRect().top < window.innerHeight;
        let viewAmount =
          (editor.getBoundingClientRect().top / window.innerHeight) * 10;

        if (!inView) {
          return;
        }
        editor.style.transform = `translateY( ${viewAmount - 2}rem )`;
      });
    },
    randomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
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
  grid-column: 4/8;
  grid-row: 4/5;
}

.editor-layout-1 {
  grid-column: 1/4;
  grid-row: 1/2;
}

.editor-layout-2 {
  grid-column: 4/6;
  grid-row: 1/2;
}

.editor-layout-3 {
  grid-column: 6/10;
  grid-row: 1/2;
}

.editor-layout-4 {
  grid-column: 1/4;
  grid-row: 2/5;
}

.editor-layout-5 {
  grid-column: 4/5;
  grid-row: 2/3;
}

.editor-layout-6 {
  grid-column: 5/10;
  grid-row: 2/4;
}

.editor-layout-7 {
  grid-column: 8/10;
  grid-row: 4/5;
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

.editor--coding-bar {
  height: var(--2base);
  background: var(--frontend-gradient);
  margin-bottom: calc(var(--1base) * -1);
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
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  padding: var(--fourthbase);
}

.extra-content--editor {
  grid-column: 2/3;
}

.survey-content,
.survey-content li {
  font-size: calc(var(--1base) * 0.85);
  line-height: 120%;
  padding-bottom: var(--halfbase);
}

@media (min-width: 30em) and (max-width: 44.9em) {
  .extra-content-container {
    padding: var(--1base);
  }
  .survey-content,
  .survey-content li {
    font-size: var(--1base);
  }
}

@media (min-width: 70em) {
  .extra-content-container {
    grid-template-columns: 1fr 5fr 1fr;
    padding: var(--4base) var(--2base);
  }
}

@media (min-width: 70em) {
  .extra-content-container {
    grid-template-columns: 1fr 5fr 1fr;
    padding: var(--4base) var(--2base);
  }
}

.editor__comment {
  color: var(--grey-400);
}

.editor__headline {
  font-weight: bold;
  color: var(--frontend-color);
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
