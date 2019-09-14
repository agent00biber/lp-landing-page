<template>
  <!-- hamburger icon with animation -->
  <section
    class="hamburger"
    :class="{ open: hamburgerMenu }"
    @click="toggleHamburgerMenu()"
  >
    <div class="line start"></div>
    <div class="line"></div>
    <div class="line end"></div>
  </section>
</template>

<script>
export default {
  name: "hamburger",
  data() {
    return {
      hamburgerMenu: false
    };
  },
  methods: {
    toggleHamburgerMenu() {
      this.hamburgerMenu = !this.hamburgerMenu;
      this.$emit("hamburgerevent", this.hamburgerMenu);
    }
  },
  computed: {}
};
</script>

<style scoped>
.hamburger {
  width: var(--3base);
  height: var(--3base);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

.hamburger.open {
  transform: rotate(-45deg);
}

.line {
  background-color: hsla(0, 0%, 0%, 100);
  border-radius: 0.3rem;
  width: 100%;
  height: 0.25rem;
}

.start {
  width: 50%;
  transition: transform 0.2s cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: right;
}

.open .start {
  transform: rotate(-90deg) translateX(0.17rem);
}

.end {
  width: 50%;
  align-self: flex-end;
  transition: transform 0.2s cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: left;
}

.open .end {
  transform: rotate(-90deg) translateX(-0.17rem);
}
</style>
