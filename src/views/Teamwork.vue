<template>
  <article class="teamwork">
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <header class="teamwork-container">
          <h1 class="teamwork--headline">Teamwork</h1>
          <p class="teamwork--subline">
            The beautify of working together. Let me show you at the bottom of
            this page.
          </p>
        </header>
      </div>
      <div class="scroll-helper">
        <div class="scroll-helper--link">
          <p class="scroll-helper--link__text text1">
            Okay, this was a trick. There is a lot more scrolling to do :/
          </p>
          <a
            class="scroll-helper--link__text"
            v-scroll-to="{
              el: `#teamwork--main-content`,
              duration: 2500,
              easing: 'easeOutQuint',
              offset: -100
            }"
            >Let me help you.</a
          >
        </div>
      </div>
      <div class="scroll-helper">
        <div class="scroll-helper--link">
          <p class="scroll-helper--link__text text1">
            You dont have to do this alone, lets to this together
          </p>
          <a
            class="scroll-helper--link__text"
            v-scroll-to="{
              el: `#teamwork--main-content`,
              duration: 2500,
              easing: 'easeOutQuint',
              offset: -100
            }"
            >Lets go down as a great team</a
          >
        </div>
      </div>
      <div class="scroll-helper">
        <div class="scroll-helper--link">
          <p class="scroll-helper--link__text text1">
            Not even half the way. Let me give you a helping hand. Because thats
            what team mates do
          </p>
          <a
            class="scroll-helper--link__text"
            v-scroll-to="{
              el: `#teamwork--main-content`,
              duration: 2500,
              easing: 'easeOutQuint',
              offset: -100
            }"
            >Buckle up on the way down, friend!
          </a>
        </div>
      </div>
      <div class="scroll-helper">
        <div class="scroll-helper--link">
          <p class="scroll-helper--link__text text1">
            Your scroll stamina is impressive. Save your energy for later and
            let me give you a lift.
          </p>
          <a
            class="scroll-helper--link__text"
            v-scroll-to="{
              el: `#teamwork--main-content`,
              duration: 2500,
              easing: 'easeOutQuint',
              offset: -100
            }"
            >get down fast
          </a>
        </div>
      </div>
    </section>

    <section class="main-content" id="teamwork--main-content">
      <h1 class="main-content--headline">Empowering Teamwork</h1>

      <content-summery
        class="content-summery-layout js-content-observe"
        headline="Understanding Teamwork"
        text="I am always looking for like-minded people to test and challenge my ideas and my perspective. Together we can find questions and solutions a single mind was unable to think of."
        sectionID="teamwork"
        :summeryContent="[
          {
            headline: 'Ideas for like-minded people to explore',
            text: `I'm always looking for nice people to work with. If you have an idea for a healthcare app or want to work on some of my ideas, get in contact.`
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="Ideas for likeminded people to explore"
        text="Here is a small list of ideas we could do together if you don't have any right now. I can focus on either design or development - whatever works for you best."
        sectionID="teamwork"
        alignExtraContent="right"
      >
        <div class="extra-content-container">
          <div
            class="container--row container--row1"
            @mouseover="hover(true, 0)"
            @mouseleave="hover(false, 0)"
          >
            <aside class="row--background"></aside>
            <a
              href="mailto:career.lucas.paetow@gmail.com?subject=About%20your%20Idea%3A%20Illustrate%20Illnesses%20with%20smileys"
              class="row--content"
            >
              Describe Illnesses with smileys to raise awareness in a playful
              way.
            </a>
          </div>
          <div
            class="container--row container--row2"
            @mouseover="hover(true, 1)"
            @mouseleave="hover(false, 1)"
          >
            <aside class="row--background"></aside>
            <a
              href="mailto:career.lucas.paetow@gmail.com?subject=About%20your%20Idea%3A%201000nd%20medical%20opinion"
              class="row--content"
            >
              Validate patient cases in a tinder-like fashion get a 2nd-1000nd
              opinion fast.
            </a>
          </div>
          <div
            class="container--row container--row3"
            @mouseover="hover(true, 2)"
            @mouseleave="hover(false, 2)"
          >
            <aside class="row--background"></aside>
            <a
              href="mailto:career.lucas.paetow@gmail.com?subject=About%20your%20Idea%3A%20Illustrate%20Illnesses%20with%20smileys"
              class="row--content"
            >
              Message a pharmacist for medication-related questions instead of
              asking someone else.
            </a>
          </div>
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

export default {
  components: {
    contentSummery,
    contentSection
  },
  props: [],
  name: "teamwork",
  data() {
    return {};
  },
  methods: {
    hover(boolean, rowNumber) {
      if (window.innerWidth < 600) {
        return;
      }

      let row = document.querySelectorAll(".container--row");

      if (boolean) {
        row[rowNumber].classList.add("active");
        return;
      }
      row[rowNumber].classList.remove("active");
    }
  },
  computed: {},
  created() {},
  //same check for route-view keep-alive
  activated() {}
};
</script>

<style scoped>
.teamwork {
  /* Positioning */

  /* Box-model */
  min-height: 100%;
  /* Typography */

  /* Visual */
  background-color: var(--background-tertiary);
  /* Misc */
}

.sticky-wrapper {
  height: 7000vh;
  background: linear-gradient(
    180deg,
    var(--background-primary) 0%,
    var(--background-tertiary) 100%
  );
  position: relative;
  display: grid;
  grid-auto-rows: min-content;
}

.sticky-content {
  width: 100%;
  top: 0;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: var(--sticky-headline-padding) min-content 1fr;
}

.teamwork-container {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: end;
}

.teamwork--headline {
  color: var(--teamwork-color);
  font-size: var(--headline);
  line-height: 120%;
}
.teamwork--subline {
  font-size: var(--2base);
  font-weight: bold;
}

.scroll-helper {
  margin-top: 200vh;
  z-index: 6;
  width: 100%;
  height: 200vh;
}

@media (min-width: 30em) {
  .scroll-helper {
    margin-top: 300vh;
    z-index: 6;
    width: 100%;
    height: 200vh;
  }
}

.scroll-helper--link {
  position: sticky;
  top: 40%;
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: 1fr 1fr;
}

.scroll-helper--link__text {
  grid-column: 2/3;
  font-size: var(--2base);
  padding-bottom: var(--halfbase);
  font-weight: bold;
}

@media (min-width: 30em) {
  .scroll-helper--link__text {
    font-size: var(--3base);
  }
}

.text1 {
  background: var(--teamwork-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  color: var(--teamwork-color);
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
  grid-template-rows: 1fr 1fr 1fr;
  background: var(--teamwork-gradient);
}

.container--row {
  text-decoration: none;
  display: grid;
}

.container--row:nth-of-type(2) {
  border-top: 1px solid var(--grey-600);
  border-bottom: 1px solid var(--grey-600);
}

.row--content {
  font-weight: bold;
  font-size: var(--2base);
  padding: var(--2base) var(--1base);
  align-self: center;
  grid-row: 1/2;
  grid-column: 1/2;
  text-decoration: none;
  position: relative;
  z-index: 2;
}

@media (min-width: 27em) {
  .row--content {
    font-size: var(--2base);
    padding: var(--4base) var(--1base);
  }
}

@media (min-width: 45em) {
  .row--content {
    font-size: var(--2base);
    padding: var(--2base) var(--1base);
  }
}

@media (min-width: 56em) {
  .row--content {
    padding: var(--3base) var(--2base);
  }
}

@media (min-width: 70em) {
  .row--content {
    font-size: 2vw;
    padding: var(--4base) var(--2base);
  }
}

.row--background {
  grid-column: 1/2;
  grid-row: 1/2;
  background-color: var(--background-tertiary);
  opacity: 1;
  transition: opacity 0.4s var(--moving-out);
  position: relative;
  z-index: 1;
}

.active .row--background {
  opacity: 0;
  transition: opacity 0.2s var(--moving-in);
}

/*----------------------------------------------------*/

.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
}
</style>
