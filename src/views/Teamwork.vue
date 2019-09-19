<template>
  <article class="teamwork">
    <section class="sticky-wrapper">
      <div class="sticky-content"></div>
    </section>
    <section class="main-content"></section>
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
  methods: {
    scrollSilos() {
      /*const silos = document.querySelectorAll(".js-silo");

        //get the amount of downward scroll
        let ratio = Math.max(window.scrollY) / window.innerHeight;

        silos.forEach(silo => {
          silo.style.transform = `scaleX(${1 - ratio > 0 ? 1 - ratio : 0})`;
        });
        //shrink the editor in to visible field
        let shrinkEditor = this.scaleValue - ratio * 3;
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
.teamwork {
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
}

.main-content {
  padding: var(--4base) 0;
  display: grid;
  grid-template-columns: var(--view-sections);
  grid-row-gap: var(--2base);
  height: 100vh;
  background-color: white;
}
</style>
