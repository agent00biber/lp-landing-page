<template>
  <section
    class="home-section"
    :id="sectionID"
    :style="{ backgroundImage: `var(--${sectionID}-gradient)` }"
  >
    <aside class="overlay"></aside>
    <div class="icon-wrapper">
      <slot></slot>
    </div>
    <header class="header">
      <h3 class="topline">Understanding</h3>
      <h2 class="headline" :style="{ color: `var(--${sectionID}-color)` }">
        <span class="headline-background">{{ headline }}</span>
      </h2>
    </header>
    <p class="body">{{ body }}</p>
    <router-link class="link-wrapper" :to="{ name: sectionID }">
      <p class="link-text">{{ link }}</p>
      <arrow-icon class="link-icon" />
    </router-link>
  </section>
</template>

<script>
import arrowIcon from "@/components/icons/arrow.vue";
export default {
  components: {
    arrowIcon
  },

  props: {
    headline: String,
    body: String,
    link: String,
    sectionID: String
  },
  name: "homeSection",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  activated() {}
};
</script>

<style scoped>
.home-section {
  height: 66vh;
  display: grid;
  grid-template-columns: var(--view-main);
  grid-auto-rows: min-content;
  padding: 4rem 0;
  grid-row-gap: var(--row-gap);
  position: relative;
}

.overlay {
  background-color: var(--grey-400);
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 1;
  transition: opacity 0.2s ease;
}

.active > .overlay {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.icon-wrapper,
.header,
.body,
.link-wrapper {
  grid-column: 2/3;
  position: relative;
  z-index: 3;
}

.icon-wrapper {
  position: relative;
  height: 3rem;
}

.headline {
  font-size: var(--5base);
  line-height: 125%;
  padding-top: 0.2rem;
}

.headline-background {
  background-color: var(--grey-400);
}

.developer-section .headline {
  color: hsla(210, 39%, 38%, 100);
}

.body {
  font-size: var(--2base);
  font-weight: bold;
}

.link-wrapper {
  grid-column: 2/3;
  text-decoration: underline hsla(0, 0%, 8%, 100);
  display: flex;
  flex-direction: row;
}

.link-text {
  color: hsla(0, 0%, 8%, 100);
  font-weight: bold;
  font-size: var(--2base);
  padding-right: var(--halfbase);
}
</style>
