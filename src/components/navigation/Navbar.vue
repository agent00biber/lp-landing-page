<template>
  <nav class="navbar" id="nav">
    <section class="nav-content">
      <router-link class="initals-link" :to="{ name: 'home' }">
        <h2 class="initals" @click="closeMenu()">LP</h2></router-link
      >

      <ul class="menu-items">
        <li
          class="item"
          :id="`${entry.id}-nav`"
          v-for="entry in sectionEntries"
          :class="[$route.name === `${entry.id}` ? 'active' : '']"
        >
          {{ entry.text }}
        </li>
      </ul>
      <hamburger-icon
        class="icon-layout"
        :activeHambuerMenu="activeHambuerMenu"
        @hamburgerevent="toggleMenu()"
      />
    </section>

    <aside class="extended-navigation" id="nav-extended">
      <ul class="menu-extended" v-if="$route.name === 'home'">
        <a
          v-scroll-to="{
            el: `#${entry.id}`,
            duration: 500,
            easing: 'easeOutQuint',
            offset: -100
          }"
          class="item-extended"
          :id="`${entry.id}-nav-extended`"
          v-for="entry in sectionEntries"
          @click="toggleMenu()"
        >
          <span>{{ entry.text }}</span>
        </a>
      </ul>
      <ul class="menu-extended" v-else>
        <router-link
          :to="{ name: entry.id }"
          class="item-extended"
          :id="`${entry.id}-nav-extended`"
          v-for="entry in sectionEntries"
          :style="{
            color:
              $route.name === `${entry.id}` ? `var(--${entry.id}-color)` : ''
          }"
        >
          <span @click="toggleMenu()">{{ entry.text }}</span>
        </router-link>
      </ul>
    </aside>
  </nav>
</template>

<script>
import hamburgerIcon from "@/components/icons/hamburger.vue";

export default {
  components: {
    hamburgerIcon
  },
  name: "navBar",
  data() {
    return {
      activeHambuerMenu: false,
      sectionEntries: [
        { id: "intro", text: "Intro" },
        { id: "development", text: "Web development" },
        { id: "design", text: "UX design" },
        { id: "marketing", text: "Marketing" },
        { id: "science", text: "Science" },
        { id: "teamwork", text: "Teamwork" },
        { id: "learning", text: "Learning" },
        { id: "outro", text: "Outro" }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.activeHambuerMenu = !this.activeHambuerMenu;
      let nav = document.getElementById("nav-extended");
      this.activeHambuerMenu
        ? nav.classList.add("active")
        : nav.classList.remove("active");
    },
    closeMenu() {
      this.activeHambuerMenu = false;
      let nav = document.getElementById("nav-extended");
      nav.classList.remove("active");
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
  height: var(--7base);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
}

.nav-content {
  height: var(--7base);
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;

  background-color: hsla(0, 0%, 3%, 0.75);
}

.initals-link {
  grid-column: 1/2;
  align-self: center;
  text-decoration: none;
  justify-self: center;
  height: var(--7base);
  width: var(--7base);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 25;
}

.initals {
  color: var(--white);
  padding: 0;
}

.menu-items {
  grid-column: 2/3;
  align-self: center;
  justify-self: end;
  display: grid;
}

.item {
  color: var(--white);
  font-size: var(--2base);
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.2s var(--moving-out);
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: end;
  position: relative;
  z-index: 10;
}

.active {
  opacity: 1;
  transition: opacity 0.2s var(--moving-in);
  z-index: 11;
}

.icon-layout {
  grid-column: 3/4;
  align-self: center;
  justify-self: center;
  position: relative;
  z-index: 25;
}

.extended-navigation {
  position: absolute;
  background-color: var(--background-primary);
  height: 60vh;
  width: 100%;
  z-index: 5;
  transform: translateY(calc(-100% - var(--7base)));
  transition: all 0.2s var(--moving-out);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
}

.active {
  transform: translateY(0%);
  transition: all 0.4s var(--moving-in);
}

.menu-extended {
  display: grid;
  grid-template-columns: var(--view-main);
  padding: 3rem 0;
}

.item-extended {
  grid-column: 2/3;
  color: var(--white);
  font-size: var(--2base);
  font-weight: bold;
  margin-bottom: var(--2base);
  justify-self: end;
}
.item-extended .router-link-exact-active span {
  color: hsla(0, 0%, 50%, 100);
}
</style>
