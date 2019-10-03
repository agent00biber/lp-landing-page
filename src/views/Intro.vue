<template>
  <article class="intro">
    <section class="sticky-wrapper">
      <div class="sticky-content" id="js-sticky-content">
        <header class="teams-container" id="js-team-seperation">
          <h3 class="teams-container--topline">
            Misscommunication can seperate even the best teams and leave a void
          </h3>
          <h1 class="teams-container--headline">
            <b class="js-seperate">DEPART</b>
            <aside class="background--headline" id="js-background-zoom"></aside>
            <b class="js-seperate">MENT</b>
          </h1>
          <!-- <h1 class="teams-container--headline">
            <b class="js-seperate">T</b><b class="js-seperate">E</b
            ><b class="js-seperate">A</b>
            <aside class="background--headline" id="js-background-zoom"></aside>
            <b class="js-seperate">M</b><b class="js-seperate">S</b>
          </h1>
          <aside class="background--headline" id="js-background-zoom"></aside> -->
        </header>
      </div>
    </section>
    <section class="main-content">
      <h1 class="main-content--headline">Creative web development</h1>
      <content-summery
        class="content-summery-layout js-content-observe"
        headline="Understanding conflict in teams"
        text="Everyone in a team is important and has their teams success in mind. But sometimes not know what the others do, creates conflict:"
        sectionID="intro"
        :summeryContent="[
          {
            headline: 'Just one more popup',
            text:
              'People abandon the shopping cart of hidden cost like shipping. Lets tell them immediately there are no shipping cost for first sign ups. This is the first information they should see, right?'
          },
          {
            headline: 'Pixel-perfect',
            text:
              'I dont have time to align everything and do different kernings on all the headlines. The designer wont be mad, right? '
          },
          {
            headline: 'Look at these dope animation',
            text:
              'This animation will capture the user  attention. This will run on all devices just fine, right?'
          },
          {
            headline: 'Lets call it a day',
            text:
              'Here are the designs. This wont take long, right? Deadline is in a week.'
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="Just one more pop-up"
        text="Pop ups are the bane of every user’s experience and will reduce their delight & enjoyment of your app. This could make users abandon it and will decrease conversions. Markting still has to deliver results. Fortunatly there are other ways of deliving a message, like free shipping, without spooking the customers with just another pop up"
        sectionID="intro"
        alignExtraContent="right"
      >
        <div class="extra-content-container"></div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="Pixel-Perfect"
        text="The difference between a good design and a great design are often the details. These need to be implemented like everything else. But developers often face immense time pressure and are trying to get the business-relevant implementations done first. Early communication between both departments helps prioritising design decisions "
        sectionID="intro"
        alignExtraContent="left"
      >
        <div class="extra-content-container"></div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="These dope Animations"
        text="Sure, they look great but will look janky on older devices and deminish the intendet delight and user experience. Consultating developers early about what is feasabile and what isn’t will avoid removing these dope animations and stop wasting creative moments."
        sectionID="intro"
        alignExtraContent="right"
      >
        <div
          class="extra-content-container extra-content-container3 js-container-animation"
        >
          <div
            v-for="(cube, index) in 6"
            :class="`cube cube${index + 1}`"
            :style="{
              borderRadius: index / 4 + 'rem',
              animationDelay: `${index / 5}s`
            }"
          ></div>
        </div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="Lets call it a day"
        text="xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx. xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx.xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx.xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx.xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx.xxxxx xxxxx xxxxx xxx xxx xxxxxxxxxxxx."
        sectionID="intro"
        alignExtraContent="left"
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
  name: "intro",
  data() {
    return {};
  },
  methods: {
    scrollSilos() {
      const seperateLetters = document.querySelectorAll(".js-seperate");
      const background = document.getElementById("js-background-zoom");

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;

      /*seperateLetters.forEach((letter, index) => {
        if (index < 3) {
          letter.style.transform = `translateX(${
            ratio + 0.4 < 2.5 ? 1 + ratio * -2 : 2.5 * -2
          }rem)`;
        } else {
          letter.style.transform = `translateX(${
            ratio < 2.5 ? ratio * 2 : 2.5 * 2
          }rem)`;
        }

        if (ratio > 2) {
          letter.classList.add("hidden");
        } else {
          letter.classList.remove("hidden");
        }
    }); */

      let scaleX = ratio;
      let scaleY = Math.pow(ratio, 2) > 1 ? Math.pow(ratio, 2) : 1;
      /*
      console.log(ratio);
      if (ratio > 2.2) {
        background.style.transform = `scale(${scaleX}, ${scaleY})`;
      } else {
        background.style.transform = `scale(${ratio > 1 ? ratio : 1})`;
    } */
      this.parallaxImages();
    },
    parallaxImages() {
      const containers = document.querySelectorAll(".js-container-animation");

      containers.forEach((container, index) => {
        let inView =
          container.getBoundingClientRect().top >= 0 &&
          container.getBoundingClientRect().bottom <= window.innerHeight;
        let viewAmount =
          container.getBoundingClientRect().top / window.innerHeight;

        if (!inView) {
          return;
        }
        container.classList.add("active");
        console.log("in view");
      });
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
.intro {
  /* Positioning */

  /* Box-model */
  min-height: 100%;
  /* Typography */

  /* Visual */
  background-color: var(--background-tertiary);
  /* Misc */
}

.sticky-wrapper {
  height: 200vh;
}

.sticky-content {
  position: sticky;
  width: 100%;
  top: 0;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  background-color: var(--grey-500);
}

.teams-container {
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: var(--sticky-headline-padding) min-content 1fr 2fr;
  grid-auto-rows: min-content;
  grid-row-gap: var(--row-gap);
  background-color: var(--background-primary);
  height: 100vh;
}

.teams-container--topline {
  grid-column: 2/3;
  grid-row: 2/3;
  position: relative;
  z-index: 3;
}

.teams-container--headline {
  grid-column: 2/3;
  grid-row: 3/4;
  position: relative;
  z-index: 4;
  justify-self: center;
  align-self: center;
  font-size: var(--5base);
  display: flex;
  padding: 0;
}

.js-seperate {
  display: block;
  color: var(--background-tertiary);
}

.background--headline {
  width: var(--7base);
  height: var(--5base);
  background-color: var(--background-tertiary);
  justify-self: center;
  align-self: center;
  position: relative;
  z-index: 3;
}

/*.background--headline {
  width: var(--7base);
  height: var(--5base);
  background-color: var(--background-tertiary);
  grid-column: 2/3;
  grid-row: 3/4;
  position: relative;
  z-index: 3;
  justify-self: center;
  align-self: center;
} */

.hidden {
  opacity: 0;
  transition: all 0.4s var(--moving-out);
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
  color: var(--intro-color);
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

@media (max-width: 69.9em) {
  .extra-content-container3 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 25rem;
  }

  .cube {
    background-color: var(--background-primary);
    height: var(--6base);
    width: var(--6base);
    opacity: 0;
  }

  .active .cube {
    animation: square 0.5s ease-out forwards;
  }

  @keyframes square {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (min-width: 70em) {
  .extra-content-container3 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-height: 25rem;
  }

  .cube {
    background-color: var(--background-primary);
    height: var(--7base);
    width: var(--7base);
    opacity: 0;
  }

  .active .cube {
    animation: square 0.5s ease-out forwards;
  }

  @keyframes square {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

/*----------------------------------------------------*/

.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
}
</style>
