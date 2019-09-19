<template>
  <article class="science">
    <section class="sticky-wrapper">
      <div class="sticky-content">
        <div
          class="circle-container outer-circle circle"
          id="js-circle-container"
        >
          <div
            v-for="(circle, index) in smallCircles"
            :style="{
              transform: `rotate(${(360 / smallCircles) *
                index}deg) translate(10em) rotate(${-(360 / smallCircles) *
                index}deg)`,
              margin: `-${circleSize / 2}rem`,
              height: `${circleSize}rem`,
              width: `${circleSize}rem`
            }"
            class="small-circle"
          ></div>
        </div>
        <div class="inner-circle circle"></div>
      </div>
    </section>
    <section class="main-content"></section>
  </article>
</template>

<script>
export default {
  components: {},
  //if the basics are being edited, this array contains existing basic information
  props: [],
  name: "science",
  data() {
    return {
      smallCircles: 8,
      circleSize: 2
    };
  },
  methods: {
    scrollSilos() {
      const circleContainer = document.getElementById("js-circle-container");
      //get the amount of downward scroll
      let ratio = Math.max(window.scrollY) / window.innerHeight;

      let scaleDown = 1 - ratio;
      let scaleUp = 1 / scaleDown;

      console.log(scaleDown);

      if (scaleDown >= 0) {
        circleContainer.style.transform = `scale(${scaleDown}) rotate(${ratio *
          90}deg)`;

        const smallCircles = document.querySelectorAll(".small-circle");
        smallCircles.forEach((circle, index) => {
          circle.style.transform = `rotate(${(360 / this.smallCircles) *
            index}deg) translate(10em) rotate(${-(360 / this.smallCircles) *
            index}deg) scale(${scaleUp})`;
        });
      }

      //shrink the editor in to visible field
      /*let shrinkEditor = this.scaleValue - ratio * 3;
        editor.style.transform = `scale( ${
          shrinkEditor > 1 ? shrinkEditor : 1
        } )`;

        */
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
.science {
  /* Positioning */

  /* Box-model */
  min-height: 100%;
  /* Typography */

  /* Visual */

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
  align-items: center;
}

.circle-container {
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  position: relative;
  border: 1px solid grey;
}

.small-circle {
  border-radius: 50%;
  background-color: var(--grey-900);
  position: absolute;
  left: 50%;
  top: 50%;
}

/*.small-circle:nth-last-of-type(1) {
  transform: rotate(0) translate(10em) rotate(-0);
}
.small-circle:nth-last-of-type(2) {
  transform: rotate(45deg) translate(10em) rotate(-45deg);
}
.small-circle:nth-last-of-type(3) {
  transform: rotate(90deg) translate(10em) rotate(-90deg);
}
.small-circle:nth-last-of-type(4) {
  transform: rotate(135deg) translate(10em) rotate(-135deg);
}
.small-circle:nth-last-of-type(5) {
  transform: rotate(180deg) translate(10em) rotate(-180deg);
}
.small-circle:nth-last-of-type(6) {
  transform: rotate(225deg) translate(10em) rotate(-225deg);
}
.small-circle:nth-last-of-type(7) {
  transform: rotate(270deg) translate(10em) rotate(-270deg);
}
.small-circle:nth-last-of-type(8) {
  transform: rotate(315deg) translate(10em) rotate(-315deg);
} */

.main-content {
  padding: var(--4base) 0;
  display: grid;
  grid-template-columns: var(--view-sections);
  grid-row-gap: var(--2base);
  height: 100vh;
  background-color: white;
}
</style>
