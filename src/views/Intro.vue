<template>
  <article class="intro">
    <section class="sticky-wrapper">
      <div class="sticky-content" id="js-sticky-content">
        <section class="teams-forground" id="js-team-scale-down">
          <h1 class="teams-forground--headline">
            Conflict and miss&shy;communication
          </h1>
          <h2 class="teams-forground--subline">
            can seperate even the best teams
          </h2>
        </section>
        <section class="teams-background">
          <div class="triangle triangle1">
            <div class="triangle--line-wrapper">
              <div class="line-vertical" v-for="line in 8"></div>
            </div>
          </div>
          <div class="triangle triangle2">
            <div class="triangle--line-wrapper triangle--line-wrapper2">
              <div class="line-vertical" v-for="line in 8"></div>
            </div>
          </div>
          <div class="triangle triangle3"></div>
          <div class="triangle triangle4">
            <h3 class="triangle--headline">
              And <br />
              keep pushing <br />away your releases
            </h3>
          </div>
        </section>
      </div>
    </section>
    <section class="main-content">
      <h1 class="main-content--headline">Conflict examples</h1>
      <content-summery
        class="content-summery-layout js-content-observe"
        headline="Understanding conflict in teams"
        text="Everyone in a team is important and has their team's success in mind. But sometimes not knowing what the others do, not talking to them or only talking to them late in the process creates conflict:"
        sectionID="intro"
        :summeryContent="[
          {
            headline: 'Just one more popup',
            text: `People abandon the shopping cart of hidden costs like shipping. Let's tell them immediately there are no shipping costs for the first sign-ups. This is the first information they should see, right?`
          },
          {
            headline: 'Pixel-perfect',
            text: `I don't have time to align everything and do different kernings on all the headlines. The designer won't be mad, right? `
          },
          {
            headline: 'Look at these dope animation',
            text: `This animation will capture the user's attention. This will run on all devices just fine, right?`
          },
          {
            headline: 'Lets call it a day',
            text: `Here are the designs. This won't take long, right? The deadline is in a week.`
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="Just one more pop-up"
        text="Pop-ups are the bane of every user’s experience and will reduce their delight & enjoyment of your app. This could make users abandon it and will decrease conversions. Marketing still has to deliver results. Fortunately, there are other ways of delivering a message, like free shipping, without spooking the customers with just another pop-up."
        sectionID="intro"
        alignExtraContent="right"
      >
        <div class="extra-content-container extra-content-container1">
          <transition name="fade" mode="out-in">
            <popup
              class="popup-layout popup1 active"
              @popupevent="changePopup()"
              v-if="activePopup"
              key="popup1"
            ></popup>
            <popup
              class="popup-layout popup2 passive"
              @popupevent="changePopup()"
              v-else
              key="popup2"
            ></popup>
          </transition>
        </div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="Pixel-Perfect"
        text="The difference between a good design and a great design is often the details. These need to be implemented like everything else.
        But developers often face immense time pressure and are trying to get the business-relevant implementations done first. Early communication between both departments and creating design systems helps to prioritize design decisions."
        sectionID="intro"
        alignExtraContent="left"
      >
        <div class="extra-content-container extra-content-container2">
          <p class="grid-type grid-type1 row1">h1</p>
          <p class="grid-type grid-type2 row2">h2</p>
          <p class="grid-type grid-type3 row3">h3</p>
          <p class="grid-type grid-type4 row4">p</p>
          <p class="grid-description grid-description1 row1">
            font-size: 6x Base
          </p>
          <p class="grid-description grid-description2 row2">
            font-size: 4x Base
          </p>
          <p class="grid-description grid-description3 row3">
            font-size: 2x Base
          </p>
          <p class="grid-description grid-description4 row4">
            font-size: 1x Base
          </p>
          <h1 class="grid-headline grid-headline1 row1">Main Headline</h1>
          <h2 class="grid-headline grid-headline2 row2">Subheadline</h2>
          <h3 class="grid-headline grid-headline3 row3">Article Headline</h3>
          <p class="grid-headline grid-headline4 row4"><b>bold text</b></p>
          <div class="line-vertical line1a"></div>
          <div class="line-vertical line1b"></div>
          <div class="line-horizontal line2a"></div>
          <div class="line-horizontal line2b"></div>
          <div class="line-horizontal line2c"></div>
          <div class="line-horizontal line2d"></div>
        </div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="These dope Animations"
        text="Sure, they look great but will look janky on older devices and diminish the intended delight and user experience. Consulting developers early about what is feasible and what isn’t will avoid removing these dope animations and stop wasting creative moments."
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
        text="Well… This deadline is impossible to meet. Including developers early on can help to set realistic deadlines."
        sectionID="intro"
        alignExtraContent="left"
      >
        <div class="extra-content-container extra-content-container4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 166 125"
            class="extra-container--svg-placeholder"
          >
            <g fill="none" fill-rule="evenodd">
              <rect
                width="163"
                height="122"
                x="1.5"
                y="1.5"
                stroke="var(--grey-600)"
                stroke-width="3"
                rx="9"
              />
              <circle cx="42.5" cy="38.5" r="11.5" fill="var(--grey-600)" />
              <path
                fill="var(--grey-600)"
                d="M26 97.314a6 6 0 01-4.3-10.184l21.79-22.396a6 6 0 018.601 0l12.525 12.874 30.336-31.753a6 6 0 018.677 0L143.1 87.17a6 6 0 01-4.338 10.144H26z"
              />
            </g>
          </svg>
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
import popup from "@/components/intro/popUp.vue";

export default {
  components: {
    contentSummery,
    contentSection,
    popup
  },

  props: [],
  name: "intro",
  data() {
    return {
      activePopup: true
    };
  },
  methods: {
    scrollSilos() {
      const forground = document.getElementById("js-team-scale-down");

      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;

      console.log(1 / (ratio * 4));

      let scaleAmount = 1 / (ratio * 4);

      forground.style.transform = `scale(${scaleAmount > 1 ? 1 : scaleAmount})`;

      if (scaleAmount < 0.045) {
        forground.classList.add("hidden");
      } else {
        forground.classList.remove("hidden");
      }

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
          container.classList.remove("active");
        }
        container.classList.add("active");
      });
    },
    changePopup() {
      this.activePopup = !this.activePopup;
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
  height: 700vh;
}

.sticky-content {
  position: sticky;
  width: 100%;
  top: 0;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.teams-forground {
  grid-column: 1/2;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: var(--sticky-headline-padding) min-content 1fr 2fr;
  grid-auto-rows: min-content;
  grid-row-gap: var(--row-gap);
  background-color: var(--background-primary);
  height: 100vh;
  position: relative;
  z-index: 3;
  transform-origin: center;
}

.teams-forground--headline {
  grid-column: 2/3;
  grid-row: 2/3;
  position: relative;
  z-index: 4;
  justify-self: center;
  align-self: center;
  display: flex;
  padding: 0;
  text-align: center;
  font-size: var(--headline);
  background: var(--intro-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.teams-forground--subline {
  grid-column: 2/3;
  grid-row: 3/4;
  font-size: var(--subheadline);
  justify-self: center;
  align-self: center;
  text-align: center;
}

.teams-background {
  grid-column: 1/2;
  grid-row: 1/2;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.triangle {
  width: 100%;
  height: 100%;
  background-color: var(--background-tertiary);
  grid-column: 1/2;
  grid-row: 1/2;
}

.triangle1 {
  clip-path: polygon(0 0, 0 100%, 50% 50%);
}

.triangle--line-wrapper {
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: 24fr 16fr 8fr 4fr 2fr 1fr 0.5fr 0.25fr;
}

.triangle2 {
  clip-path: polygon(100% 100%, 100% 0, 50% 50%);
  display: flex;
  justify-content: flex-end;
}

.triangle--line-wrapper2 {
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.25fr 0.5fr 1fr 2fr 4fr 8fr 16fr 24fr;
}

.triangle3 {
  clip-path: polygon(100% 0, 0 0, 50% 50%);
}

.triangle4 {
  clip-path: polygon(0 100%, 100% 100%, 50% 50%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.triangle--headline {
  width: 90%;
  text-align: center;
  margin-bottom: var(--1base);
}

@media (min-width: 22.5em) {
  .triangle--headline {
    margin-bottom: 7vh;
  }
}

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

.extra-content-container1 {
  display: grid;
  min-height: 40vh;
  padding: var(--fourthbase);
}

@media (min-width: 45em) {
  .extra-content-container1 {
    min-height: 50vh;
    padding: var(--halfbase);
  }
}

@media (min-width: 45em) {
  .extra-content-container1 {
    min-height: 60vh;
    padding: var(--1base);
  }
}

.popup-layout {
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  position: relative;
}

.fade-enter-active {
  transition: all 0.1s var(--moving-in);
}

.fade-leave-active {
  transition: all 0.5s var(--moving-out);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(2rem);
  transform-origin: bottom;
}

/*----------------------------------------------------*/

.extra-content-container2 {
  display: grid;
  grid-template-columns: var(--2base) 1fr var(--2base);
  grid-template-rows: var(--2base) repeat(12, min-content) var(--2base);
}

.line-vertical {
  width: 1px;
  height: 100%;
  background-color: var(--grey-600);
}

.line-horizontal {
  height: 1px;
  width: 100%;
  background-color: var(--grey-600);
}

.row1,
.row2,
.row3,
.row4 {
  grid-column: 2/3;
}

.grid-type {
  padding: 0 0 var(--fourthbase) 0;
}

.grid-type1 {
  grid-row: 4/5;
}
.grid-type2 {
  grid-row: 7/8;
}
.grid-type3 {
  grid-row: 10/11;
}
.grid-type4 {
  grid-row: 13/14;
}

.grid-description1 {
  grid-row: 3/4;
}
.grid-description2 {
  grid-row: 6/7;
}
.grid-description3 {
  grid-row: 9/10;
}
.grid-description4 {
  grid-row: 12/13;
}

.grid-headline {
  padding: var(--2base) 0 0 0;
}
.grid-headline1 {
  grid-row: 2/3;
  font-size: var(--6base);
}
.grid-headline2 {
  grid-row: 5/6;
  font-size: var(--4base);
}
.grid-headline3 {
  grid-row: 8/9;
  font-size: var(--2base);
}
.grid-headline4 {
  grid-row: 11/12;
}
.line1a {
  grid-column: 1/2;
  grid-row: 1/15;
  justify-self: end;
  display: none;
}
.line1b {
  grid-column: 3/4;
  grid-row: 1/15;
  justify-self: start;
  display: none;
}

.line2a {
  grid-column: 1/4;
  grid-row: 4/5;
  align-self: end;
}
.line2b {
  grid-column: 1/4;
  grid-row: 7/8;
  align-self: end;
}
.line2c {
  grid-column: 1/4;
  grid-row: 10/11;
  align-self: end;
}
.line2d {
  grid-column: 1/4;
  grid-row: 13/14;
  align-self: end;
  display: none;
}

@media (min-width: 70em) {
  .extra-content-container2 {
    grid-template-columns: var(--2base) 1fr 1fr 5fr var(--2base);
    grid-template-rows: var(--2base) repeat(4, 1fr) var(--2base);
    min-height: 50vh;
  }

  .row1 {
    grid-row: 2/3;
  }
  .row2 {
    grid-row: 3/4;
  }
  .row3 {
    grid-row: 4/5;
  }
  .row4 {
    grid-row: 5/6;
  }

  .grid-type {
    align-self: end;
  }

  .grid-type1 {
    grid-column: 2/3;
  }
  .grid-type2 {
    grid-column: 2/3;
  }
  .grid-type3 {
    grid-column: 2/3;
  }
  .grid-type4 {
    grid-column: 2/3;
  }

  .grid-description {
    align-self: end;
  }

  .grid-description1 {
    grid-column: 3/4;
  }
  .grid-description2 {
    grid-column: 3/4;
  }
  .grid-description3 {
    grid-column: 3/4;
  }
  .grid-description4 {
    grid-column: 3/4;
  }

  .grid-headline {
    align-self: end;
  }
  .grid-headline1 {
    grid-column: 4/5;
    font-size: calc(var(--7base) * 1.1);
  }
  .grid-headline2 {
    grid-column: 4/5;
    font-size: var(--6base);
  }
  .grid-headline3 {
    grid-column: 4/5;
    font-size: var(--4base);
  }
  .grid-headline4 {
    grid-column: 4/5;
    font-size: var(--2base);
  }
  .line1a {
    grid-column: 2/3;
    grid-row: 1/7;
    justify-self: end;
    display: block;
  }
  .line1b {
    grid-column: 3/4;
    grid-row: 1/7;
    justify-self: end;
    display: block;
  }

  .line2a {
    grid-column: 1/6;
    grid-row: 2/3;
    align-self: end;
  }
  .line2b {
    grid-column: 1/6;
    grid-row: 3/4;
    align-self: end;
  }
  .line2c {
    grid-column: 1/6;
    grid-row: 4/5;
    align-self: end;
  }
  .line2d {
    grid-column: 1/6;
    grid-row: 5/6;
    align-self: end;
    display: block;
  }
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

.extra-content-container4 {
  display: flex;
  min-height: 40vh;
  justify-content: center;
  align-items: center;
}

@media (min-width: 70em) {
  .extra-content-container4 {
    min-height: 50vh;
  }
}

.extra-container--svg-placeholder {
  width: 20%;
  height: auto;
}

/*----------------------------------------------------*/

.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
}
</style>
