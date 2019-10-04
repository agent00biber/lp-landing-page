<template>
  <section
    class="home-section"
    :id="sectionID"
    :style="{ backgroundImage: `var(--${sectionID}-gradient)` }"
    @click="goTo(sectionID)"
    @mouseover="hover(true)"
    @mouseleave="hover(false)"
  >
    <aside class="overlay"></aside>
    <header class="header">
      <h2
        class="headline headline-front"
        :style="{
          background: `var(--${sectionID}-gradient)`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent'
        }"
      >
        {{ headline }}
      </h2>
    </header>
    <header class="header header-background">
      <h2 class="headline headline-background">
        {{ headline }}
      </h2>
    </header>

    <div class="body-wrapper">
      <h3 class="body">{{ body }}</h3>
    </div>

    <div class="link-icon-wrapper">
      <p class="icon-text">tap to enter</p>
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
    },
    hover(boolean) {
      if (window.innerWidth < 600) {
        return;
      }

      let section = document.getElementById(`${this.sectionID}`);

      if (boolean) {
        section.classList.add("active");
        return;
      }
      section.classList.remove("active");
    }
  },
  computed: {},
  created() {},
  activated() {}
};
</script>

<style scoped>
.home-section {
  height: 75vh;
  display: grid;
  grid-template-columns: var(--view-main);
  grid-template-rows: 15vh min-content 1fr 5vh;
  grid-row-gap: var(--row-gap);
  position: relative;
  cursor: pointer;
  border-top: 1px solid var(--grey-600);
}

@media (min-width: 30em) {
  .home-section {
    height: 80vh;
  }
}

@media (max-width: 37.4em) {
  .home-section:last-of-type {
    border-bottom: 1px solid var(--grey-600);
  }
}

@media (max-width: 59.9em) {
  .home-section {
    grid-template-rows: 15vh min-content 1fr 5vh;
  }
  .home-section:nth-of-type(odd) {
    border-right: 1px solid var(--grey-600);
  }
  .home-section:nth-of-type(n + 5) {
    border-bottom: 1px solid var(--grey-600);
  }
}

@media (min-width: 60em) {
  .home-section:nth-of-type(n + 3) {
    border-bottom: 1px solid var(--grey-600);
  }
  .home-section:nth-of-type(2),
  .home-section:nth-of-type(5) {
    border-right: 1px solid var(--grey-600);
    border-left: 1px solid var(--grey-600);
  }
}

@media (min-width: 70em) {
  .home-section {
    height: 90vh;
    grid-template-columns: 1fr 8fr 1fr;
  }
}

.overlay {
  background: var(--background-tertiary);
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
  display: grid;
}

.body-wrapper {
  grid-row: 3/4;
}

.headline-front {
  background: var(--marketing-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-background {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.headline-background {
  color: var(--background-tertiary);
}

.active > .header-background {
  opacity: 1;
  transition: opacity 0.2s ease;
}

@media (min-width: 37.5em) {
  .headline {
    font-size: 6.5vw;
  }
}

@media (min-width: 60em) {
  .headline {
    font-size: 4vw;
  }
}

.body {
}

@media (min-width: 37.5em) {
  .body {
    font-size: 5vw;
  }
}

@media (min-width: 50em) {
  .body {
    font-size: 4vw;
  }
}

@media (min-width: 60em) {
  .body {
    font-size: 3vw;
  }
}

@media (min-width: 70em) {
  .body {
    font-size: 2.1vw;
  }
}

.link-icon-wrapper {
  align-self: center;
  grid-column: 2/3;
  grid-row: 3/4;
  align-self: end;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon-text {
  font-weight: bold;
}

.link-icon {
  height: var(--halfbase);
}
</style>
