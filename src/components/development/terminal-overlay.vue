<template>
  <aside class="overlay">
    <div class="overlay-container container0">
      <span class="overlay-start">//</span>
      <p class="overlay-text">CREATIVE WEB DEVELOPMENT</p>
    </div>

    <div class="overlay-container container1">
      <span class="overlay-start">></span>
      <p class="overlay-text">I AM SORRY DAVE, I AM AFRAID I CANT DO THAT</p>
    </div>

    <div class="overlay-container container2">
      <span class="overlay-start">></span>
      <p class="overlay-text">JUST SCROLL DOWN</p>
    </div>

    <div class="overlay-container container3">
      <span class="overlay-start">></span>
      <p class="overlay-text">|</p>
    </div>
  </aside>
</template>

<script>
export default {
  components: {},
  //if the basics are being edited, this array contains existing basic information
  props: [],
  name: "terminal",
  data() {
    return {};
  },
  methods: {
    //navigation
    goTo(locationName) {
      this.$router.push({
        name: locationName
      });
    }
  },
  computed: {},
  created() {},
  //same check for route-view keep-alive
  activated() {}
};
</script>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: grid;
  padding: 0 var(--2base);
  grid-template-rows: 1fr min-content min-content min-content 1fr;
  grid-row-gap: var(--2base);
  z-index: 6;
  background-color: var(--background-secondary);
}

.overlay-container {
  display: flex;
  flex-direction: row;
}

.container0 {
  grid-row: 1/2;
  align-self: center;
}

.container1 {
  grid-row: 2/3;
}
.container2 {
  grid-row: 3/4;
}
.container3 {
  grid-row: 4/5;
}
.container4 {
  grid-row: 5/6;
}

.overlay-text {
  color: hsla(122, 49%, 50%, 100);
  text-shadow: 0px 0px 5px hsla(122, 49%, 50%, 0.25);
  font-family: "Roboto Mono", monospace;
  margin: 0 var(--halfbase);
}

.overlay-start {
  margin-right: var(--thirdbase);
  color: hsla(122, 49%, 50%, 100);
  text-shadow: 0px 0px 5px hsla(122, 49%, 50%, 0.25);
  font-family: "Roboto Mono", monospace;
}

.container3 .overlay-text {
  animation: blinking-infinite 0.75s infinite;
}

@keyframes blinking-infinite {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
