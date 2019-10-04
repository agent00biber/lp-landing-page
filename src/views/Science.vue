<template>
  <article class="science">
    <section class="sticky-wrapper">
      <div class="sticky-content" id="js-sticky-container-color-change">
        <h1 class="sticky-content--headline" id="js-sticky-headline-background">
          Astounding Science
        </h1>

        <div
          class="post-erruption-container"
          id="js-post-erruption-container-zindex-change"
        >
          <div
            class="atom-container"
            :style="{
              'grid-template-columns': `repeat(${Math.floor(
                chemicalElements.length / 6
              )}, min-content)`
            }"
          >
            <div
              class="atom js-atom"
              v-for="(element, index) in chemicalElements"
              :style="{ transitionDelay: `${index / 100}s` }"
            >
              <p class="atom--weight">{{ Math.round(element.mass) }}</p>
              <p class="atom--number">{{ index }}</p>
              <h3 class="atom--symbol">{{ element.symbol }}</h3>
              <p class="atom--name">{{ element.name }}</p>
              <aside
                class="atom--background"
                :style="{ transitionDelay: `${index / 10}s` }"
              ></aside>
            </div>
          </div>
          <aside
            class="background-transition"
            id="js-atom-container-background-appear"
          ></aside>
        </div>
      </div>
    </section>

    <section class="main-content">
      <h1 class="main-content--headline">Astounding Science</h1>

      <content-summery
        class="content-summery-layout js-content-observe"
        headline="Understanding Science"
        text="How does science fit into the greater picture? It creates content. I have a masters in pharmaceutical sciences and can deep dive into most medical fields in a short amount of time."
        sectionID="science"
        :summeryContent="[
          {
            headline: 'Digital <3 pharma',
            text:
              'I am really interessted in  bringing pharmaceutical sciences and digital services together. Eventually I want to build a digital therapeutic to help people in their life.'
          },
          {
            headline: 'Retrosynthesis',
            text:
              'Science prepared me for a lifetime of learning, an analytical approach to problems and a different, product-focused perspective: retrosynthesis.'
          }
        ]"
      />
      <content-section
        class="content-section-layout js-content-observe"
        headline="Digital <3 pharma"
        text="There are many ways to enhance the patient journey with digital solutions, like providing accessible information,  preordering medications,  using apps to document adverse reaction or to remember medication intake times. I would love to help envisioning and developing these together with you."
        sectionID="science"
        alignExtraContent="right"
        buttonText="lets get in contact"
      >
        <div class="extra-content-container extra-content-container1">
          <notification
            class="notification--layout js-notification-translate"
          />
          <notification
            class="notification--layout js-notification-translate"
          />
          <notification
            class="notification--layout js-notification-translate"
          />
          <notification
            class="notification--layout js-notification-translate"
          />
        </div>
      </content-section>
      <content-section
        class="content-section-layout js-content-observe"
        headline="Retrosynthesis"
        text="Science prepared me for a lifetime of learning, an analytical approach to problems and a different, product-focused perspective: retrosynthesis. You start from the product you want to have and break it down into manageable parts and actions."
        sectionID="science"
        alignExtraContent="left"
      >
        <div class="extra-content-container extra-content-container2">
          <div class="container--row container--row1">
            <aside class="row--background"></aside>
            <p class="row--product row--content">Health-care App</p>
            <p class="row--arrow row--content">=></p>
            <p class="row--educt row--content">
              Designing the App + Building the app
            </p>
          </div>
          <div class="container--row container--row2">
            <aside class="row--background"></aside>
            <p class="row--product row--content">Building the app</p>
            <p class="row--arrow row--content">=></p>
            <p class="row--educt row--content">Frontend + Backend</p>
          </div>
          <div class="container--row container--row3">
            <aside class="row--background"></aside>
            <p class="row--product row--content">Designing the App</p>
            <p class="row--arrow row--content">=></p>
            <p class="row--educt row--content">Content + Usabillity & Design</p>
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
import elements from "@/assets/chemicalElements.js";
import contentSummery from "@/components/buildingBlocks/contentSummery.vue";
import contentSection from "@/components/buildingBlocks/contentSection.vue";
import notification from "@/components/science/notifications.vue";

export default {
  components: {
    contentSummery,
    contentSection,
    notification
  },
  props: [],
  name: "science",
  data() {
    return {
      circleAmount: 8,
      circleSizeDifference: 2,
      circleBase: 20,
      circleMultiplier: 15
    };
  },
  methods: {
    scrollAtoms() {
      const stickyContainer = document.getElementById(
        "js-sticky-container-color-change"
      );
      const atomContainerBackground = document.getElementById(
        "js-atom-container-background-appear"
      );
      const stickyHeadline = document.getElementById(
        "js-sticky-headline-background"
      );
      const atoms = document.querySelectorAll(".js-atom");

      let ratio = Math.max(window.scrollY) / window.innerHeight;

      if (ratio > 0.5) {
        atoms.forEach(atom => {
          atom.classList.add("appear");
          atom.childNodes[4].classList.add("appear--delayed");
        });
        atomContainerBackground.classList.add("appear");
      } else {
        atoms.forEach(atom => {
          atom.classList.remove("appear");
          atom.childNodes[4].classList.remove("appear--delayed");
        });
        atomContainerBackground.classList.remove("appear");
      }
      this.parallaxImages();
    },
    parallaxImages() {
      const notifications = document.querySelectorAll(
        ".js-notification-translate"
      );

      notifications.forEach((notification, index) => {
        let inView =
          notification.getBoundingClientRect().top < window.innerHeight;
        let viewAmount =
          notification.getBoundingClientRect().top / window.innerHeight;

        if (!inView) {
          return;
        }

        let translateAmount = viewAmount * 100 - 50;

        if (index === 0) {
          console.log(Math.floor(translateAmount));
        }

        notification.style.transform = `translateY( ${
          translateAmount >= 0 ? translateAmount : 0
        }% )`;
      });
    }
  },
  computed: {
    chemicalElements() {
      if (window.innerWidth < 500) {
        let size = 30;
        return elements.elements.slice(0, size);
      }

      if (window.innerWidth < 1000) {
        let size = 60;
        return elements.elements.slice(0, size);
      }

      if (window.innerWidth >= 1000) {
        let size = elements.elements.length;
        return elements.elements.slice(0, size);
      }
    }
  },
  created() {},
  //same check for route-view keep-alive
  activated() {},
  mounted() {
    window.addEventListener("scroll", this.scrollAtoms);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollAtoms);
  }
};
</script>

<style scoped>
.science {
  /* Positioning */

  /* Box-model */
  min-height: 100%;
  /* Typography */

  /* Visual */
  background-color: var(--background-tertiary);
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
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: var(--sticky-headline-padding) min-content 1fr;
  background-color: var(--background-primary);
}

.sticky-content--headline {
  grid-column: 2/3;
  grid-row: 2/3;
  position: relative;
  z-index: 8;
  color: var(--science-color);
  background-color: var(--background-primary);
  padding: var(--halfbase);
  font-size: var(--headline);
  line-height: 120%;
}

.post-erruption-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 4;
  overflow: hidden;
}

.atom-container {
  height: 100vh;
  width: 150vw;
  display: grid;
}

.atom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  grid-row-gap: var(--halfbase);
  border: 1px solid grey;
  padding: var(--halfbase);
  width: 7rem;
  position: relative;
  background: var(--science-gradient);
  opacity: 0;
  transition: all 0.4s var(--moving-out);
}

@media (min-width: 70em) {
  .atom {
    padding: var(--1base);
    width: 8rem;
  }
}

.atom--background {
  position: absolute;
  background-color: var(--background-tertiary);
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 0.4s var(--moving-out);
  transition-delay: 0.5s;
  opacity: 0;
}

.atom--background:hover {
  opacity: 0;
  transition: opacity 0.2s var(--moving-in);
}

.appear--delayed {
  opacity: 1;
  transition: all 0.4s var(--moving-out);
  transition-delay: 0.5s;
}

.atom--number {
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
  z-index: 3;
  position: relative;
}

.atom--weight {
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: center;
  z-index: 3;
  position: relative;
}

.atom--symbol {
  grid-column: 1/3;
  grid-row: 2/3;
  justify-self: center;
  font-size: var(--3base);
  z-index: 3;
  position: relative;
}

.atom--name {
  grid-column: 1/3;
  grid-row: 3/4;
  justify-self: center;
  z-index: 3;
  position: relative;
}

.background-transition {
  position: relative;
  height: 30vh;
  width: 100%;
  bottom: 30vh;
  left: 0;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    var(--grey-900) 90%
  );
  z-index: 5;
  opacity: 0;
  transition: all 0.4s var(--moving-out);
}

.appear {
  opacity: 1;
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
  color: var(--science-color);
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
  grid-template-columns: min-content 1fr min-content;
  grid-row-gap: var(--1base);
  max-height: 70vh;
  padding: var(--2base);
}
@media (min-width: 70em) {
  .extra-content-container1 {
    grid-template-columns: 1fr 3fr 1fr;
  }
}

.notification--layout {
  grid-column: 2/3;
}

.extra-content-container2 {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background: var(--science-gradient);
}

.container--row {
  display: grid;
  grid-template-columns: 6rem min-content 3fr;
  min-height: 8rem;
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
}

@media (min-width: 27em) {
  .container--row {
    grid-template-columns: 10rem min-content 3fr;
    min-height: 8rem;
  }
  .row--content {
    font-size: var(--2base);
    padding: var(--4base) var(--1base);
  }
}

@media (min-width: 45em) {
  .container--row {
    grid-template-columns: 6rem min-content 3fr;
    min-height: 6rem;
  }
  .row--content {
    font-size: var(--2base);
    padding: var(--2base) var(--1base);
  }
}

@media (min-width: 56em) {
  .container--row {
    grid-template-columns: 7rem min-content 3fr;
  }
  .row--content {
    padding: var(--3base) var(--2base);
  }
}

@media (min-width: 70em) {
  .container--row {
    grid-template-columns: 10rem min-content 3fr;
    min-height: 10rem;
  }
  .row--content {
    font-size: 2vw;
    padding: var(--4base) var(--2base);
  }
}

.row--product {
  grid-column: 1/2;
  grid-row: 1/2;
}

.row--arrow {
  grid-column: 2/3;
  grid-row: 1/2;
}

.row--educt {
  grid-column: 3/4;
  grid-row: 1/2;
}

.row--background {
  grid-column: 1/4;
  grid-row: 1/2;
  background-color: var(--background-tertiary);
  opacity: 1;
  transition: opacity 0.4s var(--moving-out);
}

.row--background:hover {
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
