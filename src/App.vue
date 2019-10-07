<template>
  <main id="app">
    <navbar />
    <!--main view -->
    <transitionWrapper><router-view /></transitionWrapper>
  </main>
</template>

<script>
import navbar from "@/components/navigation/Navbar.vue";
import transitionWrapper from "@/components/transitions/transition.vue";

export default {
  components: {
    navbar,
    transitionWrapper
  },
  name: "app",
  computed: {},

  created() {}
};
</script>

<style>
/*global variabels*/

:root {
  /*16px*/
  --1base: 1rem;
  /*20px*/
  --2base: calc(var(--1base) * 1.25);
  /*25px*/
  --3base: calc(var(--2base) * 1.25);
  /*31.25px*/
  --4base: calc(var(--3base) * 1.25);
  /*39.06px*/
  --5base: calc(var(--4base) * 1.25);
  /*48.83px*/
  --6base: calc(var(--5base) * 1.25);
  /*61.04px*/
  --7base: calc(var(--6base) * 1.25);
  /*76.29px*/
  --8base: calc(var(--7base) * 1.25);

  /*12.80px*/
  --halfbase: calc((var(--1base) / 1.5));
  /*10.24px*/
  --thirdbase: calc((var(--halfbase) / 1.5));
  /*8.19px*/
  --fourthbase: calc((var(--thirdbase) / 1.5));
  /*6.55px*/
  --fifthbase: calc((var(--fourthbase) / 1.5));

  /*colors*/
  /*greys*/
  --grey-400: hsla(0, 0%, 28%, 1);
  --grey-500: hsla(0, 0%, 20%, 1);
  --grey-600: hsla(0, 0%, 13%, 1);
  --grey-700: hsla(0, 0%, 8%, 1);
  --grey-800: hsla(0, 0%, 3%, 1);
  --grey-900: hsla(0, 0%, 1%, 1);

  --background-primary: var(--grey-700);
  --background-secondary: var(--grey-800);
  --background-tertiary: var(--grey-900);
  --background-gradient: linear-gradient(
    180deg,
    var(--grey-800) 0%,
    var(--grey-900) 60%
  );

  --white: hsla(0, 0%, 90%, 1);

  /*signaling*/
  --red-700: #c53030;
  --green-700: #2f855a;

  /*sections*/

  --frontend-gradient: linear-gradient(135deg, #3a6186 0%, #2c8925 100%);
  --frontend-color: hsla(133, 45%, 34%, 1);

  --design-gradient: linear-gradient(
    135deg,
    #dd3e54 30%,
    #7abcb6 70%,
    #6be585 100%
  );
  --design-color: hsla(352, 69%, 55%, 1);

  --marketing-gradient: linear-gradient(135deg, #e96443 0%, #904e95 100%);
  --marketing-color: hsla(305, 31%, 45%, 1);

  --science-gradient: linear-gradient(135deg, #2b5876 0%, #4e4376 100%);
  --science-color: hsla(204, 68%, 21%, 1);

  --teamwork-gradient: linear-gradient(135deg, #f1719c 0%, #f49472 100%);
  --teamwork-color: hsla(15, 85%, 71%, 1);

  --learning-gradient: linear-gradient(135deg, #3a6186 0%, #89253e 100%);
  --learning-color: hsla(210, 39%, 38%, 1);

  --intro-gradient: linear-gradient(135deg, #3a6186 0%, #2c8925 100%);
  --intro-color: hsla(116, 56%, 34%, 1);

  --outro-gradient: linear-gradient(135deg, #3a6186 0%, #2c8925 100%);
  --outro-color: hsla(116, 56%, 34%, 1);

  /*spacing*/
  /*padding*/
  --padding-top: var(--7base);
  --row-gap: var(--3base);

  /*views*/
  --view-main: 0.5fr 5fr 0.5fr;
  --view-sections: var(--1base) 1fr var(--1base);

  /*easings*/
  --moving-out: cubic-bezier(0.4, 0, 1, 1);
  --moving-in: cubic-bezier(0, 0, 0.2, 1);
  --timing-out: 0.2s;
  --timing-in: 0.4s;

  /*sticky content*/
  --sticky-headline-padding: 20vh;

  /*main-content*/
  --headline: 10vw;
  --subheadline: 6.5vw;
  --content-padding: 8vh 0;
}

@media (min-width: 22.5em) {
  :root {
    --view-main: 1fr 8fr 1fr;
  }
}

@media (min-width: 37.5em) {
  :root {
    --view-main: 1fr 4fr 1fr;
    --sticky-headline-padding: 30vh;
    --headline: 7vw;
    --subheadline: 5vw;
    --content-padding: 10vh 0;
  }
}

@media (min-width: 45em) {
  :root {
    --headline: 5.5vw;
    --content-padding: 5vh 0;
    --subheadline: 4vw;
  }
}

@media (min-width: 56em) {
  :root {
    --view-main: 1fr 3fr 1fr;
    --subheadline: 3vw;
  }
}

@media (min-width: 70em) {
  :root {
    --view-main: 1fr 2fr 1fr;
    --headline: 5vw;
    --subheadline: 2vw;
    --content-padding: 10vh 0;
  }
}

@media (min-width: 80em) {
  :root {
    --headline: 4vw;
  }
}

/* Positioning */

/* Box-model */

/* Typography */

/* Visual */

/* Misc */

@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap");

/*Borderbox*/
*,
:after,
:before {
  /* Positioning */
  margin: 0;
  padding: 0;

  /* Box-model */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  /* Typography */
  text-decoration: none;

  /* Visual */

  /* Misc */
}

body,
html,
#app {
  /* Positioning */

  /* Box-model */
  height: 100%;

  /* Typography */
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Visual */
  background-color: var(--grey-400);

  /* Misc */
}

h1 {
  /* Positioning */

  /* Box-model */
  padding-bottom: var(--1base);
  /* Typography */
  line-height: 100%;
  font-size: 15vw;
  /* Visual */
  color: var(--white);

  /* Misc */
}

h2 {
  /* Positioning */

  /* Box-model */
  padding-bottom: var(--halfbase);
  /* Typography */
  font-size: 12.5vw;
  line-height: 130%;
  /* Visual */
  color: var(--white);
  /* Misc */
}

h3 {
  /* Positioning */

  /* Box-model */
  padding-bottom: var(--fourthbase);
  /* Typography */
  line-height: 120%;
  font-size: 7.5vw;
  /* Visual */
  color: var(--white);
  /* Misc */
}

h4 {
  /* Positioning */

  /* Box-model */

  /* Typography */
  line-height: 130%;
  font-size: 5vw;
  /* Visual */
  color: var(--white);
  /* Misc */
}

@media (min-width: 37.5em) {
  h1 {
    font-size: 13vw;
  }

  h2 {
    font-size: 7vw;
  }

  h3 {
    font-size: 5vw;
  }

  h4 {
    font-size: 3vw;
  }
}

@media (min-width: 56em) {
  h1 {
    font-size: 11vw;
  }

  h2 {
    font-size: 6vw;
  }

  h3 {
    font-size: 4vw;
  }

  h4 {
    font-size: 3vw;
  }
}

@media (min-width: 70em) {
  h1 {
    font-size: 6.5vw;
  }

  h2 {
    font-size: 4vw;
  }

  h3 {
    font-size: 3vw;
  }

  h4 {
    font-size: 2vw;
  }
}

@media (min-width: 80em) {
  h1 {
    font-size: 5.5vw;
  }

  h2 {
    font-size: 3vw;
  }

  h3 {
    font-size: 2vw;
  }

  h4 {
    font-size: 1.8vw;
  }
}

p,
a,
i,
li,
textarea,
select {
  /* Positioning */

  /* Box-model */

  /* Typography */
  font-size: var(--1base);
  line-height: 150%;
  /* Visual */
  color: var(--white);
  /* Misc */
}

a {
  /* Positioning */

  /* Box-model */

  /* Typography */
  text-decoration: underline;
  /* Visual */
  /* Misc */
  cursor: pointer;
}

ul {
  /* Positioning */

  /* Box-model */

  /* Typography */

  /* Visual */
  /* Misc */
  list-style: none;
}

button:active,
button:focus {
  outline: none;
}
</style>
