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
      <header class="headline-wrapper">
        <h1 class="main--headline">Empowering Teamwork</h1>
      </header>

      <div class="content-wrapper">
        <h2 class="headline">Why do I understand teams?</h2>

        <p class="text">
          I worked my whole life in teams but are (as of now) a team of one. I
          know where the bottlenecks are and how to ask for and give help.
        </p>
      </div>
      <div class="content-wrapper">
        <h2 class="headline">Advancing Ideas together</h2>

        <p class="text">
          I am always looking for like-minded people to test and challenge my
          ideas and my perspective. Together we can find questions and solutions
          a single mind was unable to think of.
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
  grid-template-rows: 2fr 3fr;
}

.teamwork-container {
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: end;
}

.teamwork--headline {
  color: var(--teamwork-color);
  font-size: var(--6base);
  line-height: 120%;
}
.teamwork--subline {
  font-size: var(--2base);
}

.scroll-helper {
  margin-top: 200vh;
  z-index: 6;
  width: 100%;
  height: 200vh;
}

.scroll-helper--link {
  position: sticky;
  top: 50%;
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

.text1 {
  background: var(--teamwork-gradient);
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
  color: var(--teamwork-color);
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
  color: var(--teamwork-color);
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
