<template>
  <section
    class="home-section"
    :id="sectionID"
    :style="{ backgroundImage: `var(--${sectionID}-gradient)` }"
    @click="goTo(sectionID)"
  >
    <aside class="overlay"></aside>
    <header class="header">
      <h2 class="headline" :style="{ color: `var(--${sectionID}-color)` }">
        <span v-if="sectionID === 'development'" class="headline-background"
          >WEB-DEVELOP-MENT</span
        >
        <span v-else class="headline-background">{{ headline }}</span>
      </h2>
    </header>

    <div class="body-wrapper">
      <p class="body">{{ body }}</p>
      <arrow-icon class="link-icon" />
    </div>
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
    sectionID: String
  },
  name: "homeSection",
  data() {
    return {};
  },
  methods: {
    goTo(locationName) {
      this.$router.push({
        name: locationName
      });
    }
  },
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
  grid-template-rows: 1fr min-content 1fr 1fr;
  grid-row-gap: var(--row-gap);
  position: relative;
  cursor: pointer;
}

.overlay {
  background: var(--background-gradient);
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

.header,
.body-wrapper {
  grid-column: 2/3;
  position: relative;
  z-index: 3;
}

.header {
  grid-row: 2/3;
}

.body-wrapper {
  grid-row: 3/4;
}

.headline {
  font-size: var(--6base);
  line-height: 125%;
  padding-top: 0.2rem;
}

.headline-background {
  background-color: var(--background-secondary);
  padding: var(--halfbase);
  box-decoration-break: clone;
}

.body {
  font-size: var(--3base);
  font-weight: bold;
}

.body-wrapper {
  grid-column: 2/3;
  display: grid;
  grid-template-rows: 1fr var(--2base);
  grid-row-gap: var(--row-gap);
  text-decoration: none;
}

.link-icon {
  align-self: center;
}
</style>
