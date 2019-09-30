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
            text:
              'Im always looking for nice poeple to work with. If you have an idea for a healthcare app or want to work on some of my ideas, get in contact.'
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="Ideas for likeminded people to explore"
        text="Here is a small list of ideas we could do together, if you dont have any right now. I can focus on either design or development whatever suits you best."
        sectionID="teamwork"
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
  name: "teamwork",
  data() {
    return {};
  },
  methods: {},
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

.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
}

@media (min-width: 45em) {
  .footer {
    grid-column: 1/7;
  }
}
</style>
