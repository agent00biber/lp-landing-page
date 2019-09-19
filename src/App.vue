<template>
  <main id="app">
    <navbar />
    <!--main view -->
    <router-view />
  </main>
</template>

<script>
import navbar from "@/components/navigation/Navbar.vue";

export default {
  components: {
    navbar
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
  --grey-400: hsla(0, 0%, 28%, 100);
  --grey-500: hsla(0, 0%, 20%, 100);
  --grey-600: hsla(0, 0%, 15%, 100);
  --grey-700: hsla(0, 0%, 10%, 100);
  --grey-800: hsla(0, 0%, 5%, 100);
  --grey-900: hsla(0, 0%, 2%, 100);

  /*signaling*/
  --red-700: #c53030;
  --green-700: #2f855a;

  /*sections*/

  --development-gradient: linear-gradient(135deg, #3a6186 0%, #89253e 100%);
  --development-color: hsla(210, 39%, 38%, 100);

  --design-gradient: linear-gradient(
    135deg,
    #d08aff 0%,
    #ff6767 51%,
    #ffce89 100%
  );
  --design-color: hsla(360, 100%, 70%, 100);

  --marketing-gradient: linear-gradient(135deg, #e96443 0%, #904e95 100%);
  --marketing-color: hsla(305, 31%, 45%, 100);

  --science-gradient: linear-gradient(135deg, #2b5876 0%, #4e4376 100%);
  --science-color: hsla(204, 68%, 21%, 100);

  --teamwork-gradient: linear-gradient(135deg, #f1719c 0%, #f49472 100%);
  --teamwork-color: hsla(15, 85%, 71%, 100);

  --learning-gradient: linear-gradient(135deg, #3a6186 0%, #2c8925 100%);
  --learning-color: hsla(116, 56%, 34%, 100);

  --intro-gradient: linear-gradient(135deg, #3a6186 0%, #2c8925 100%);
  --intro-color: hsla(116, 56%, 34%, 100);

  --outro-gradient: linear-gradient(135deg, #3a6186 0%, #2c8925 100%);
  --outro-color: hsla(116, 56%, 34%, 100);

  /*spacing*/
  /*padding*/
  --padding-top: var(--7base);
  --row-gap: var(--2base);

  /*views*/
  --view-main: 1fr 8fr 1fr;
  --view-sections: var(--1base) 1fr var(--1base);

  /*easings*/
  --moving-out: cubic-bezier(0.4, 0, 1, 1);
  --moving-in: cubic-bezier(0, 0, 0.2, 1);
  --timing-out: 0.2s;
  --timing-in: 0.4s;
}

/* Positioning */

/* Box-model */

/* Typography */

/* Visual */

/* Misc */

@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap");

@import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");

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
  line-height: 150%;
  font-size: var(--4base);
  /* Visual */
  color: white;

  /* Misc */
}

h2 {
  /* Positioning */

  /* Box-model */
  padding-bottom: var(--halfbase);
  /* Typography */
  font-size: var(--3base);
  /* Visual */
  color: white;
  /* Misc */
}

h3 {
  /* Positioning */

  /* Box-model */

  /* Typography */
  font-size: var(--2base);
  /* Visual */
  color: white;
  /* Misc */
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
  color: white;
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
</style>
