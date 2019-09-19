<template>
  <article class="development">
    <terminal id="js-terminal" />
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <div class="editor-container">
          <editor id="js-editor" class="editor-layout-main active ">
            <p class="editor-text comment-text">//web development toolbox</p>
            <div class="editor-text text-grouping">
              <p class="require-text">
                require(<span class="require-text--inside"
                  >ES6, advanced CSS</span
                >)
              </p>
              <p class="editor-text import-text">
                import <span class="import-text--inside">Vue</span> from
                <span class="import-text--inside">"vue"</span>
              </p>
            </div>
            <p class="editor-text create-text">
              create <span class="import-text--inside">webApp</span>
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
import editor from "@/components/development/editor.vue";
import terminal from "@/components/development/terminal-overlay.vue";

export default {
  components: {
    editor,
    terminal
  },
  //if the basics are being edited, this array contains existing basic information
  props: [],
  name: "development",
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
        terminal.style.opacity = 1 - ratio * 3;
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
.development {
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: var(--4base) 0;
}

.editor-container {
  display: grid;
  grid-template-columns: repeat(9, 7rem);
  grid-template-rows: 10rem 8rem 2rem 20rem;
  grid-gap: var(--2base);
  grid-template-areas:
    "e1 e1 e2 e2 e2 e3 e3 e3 e3"
    "e4 e4 e4 e5 e6 e6 e6 e6 e6"
    "e4 e4 e4 . e6 e6 e6 e6 e6"
    "e4 e4 e4 em em em em e7 e7";
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

.editor-text {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.visible .editor-text {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.comment-text {
  color: lightgrey;
}

.require-text,
.import-text,
.create-text {
  color: hsla(286, 45%, 24%, 100);
}

.require-text--inside {
  color: white;
}

.import-text--inside {
  color: hsla(153, 48%, 49%, 100);
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
  background-color: hsla(0, 0%, 35%, 1);
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

/* Positioning */

/* Box-model */

/* Typography */

/* Visual */

/* Misc */
</style>
