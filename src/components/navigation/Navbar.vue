<template>
  <nav class="navbar" id="nav">
    <section class="nav-content">
      <router-link :to="{ name: '', params: {} }" class="initals-link"
        ><h2 class="initals">LP</h2>
      </router-link>
      <ul class="menu-items">
        <li class="item active" id="intro-nav">Intro</li>
        <li class="item" id="development-nav">Web development</li>
        <li class="item" id="design-nav">UX design</li>
        <li class="item" id="marketing-nav">Marketing</li>
        <li class="item" id="science-nav">Science</li>
        <li class="item" id="teamwork-nav">Teamwork</li>
        <li class="item" id="learning-nav">Learning</li>
        <li class="item" id="outro-nav">Outro</li>
      </ul>
      <hamburger-icon class="icon-layout" @hamburgerevent="toggleMenu" />
    </section>

    <aside class="extended-navigation" id="nav-extended">
      <ul class="menu-extended">
        <li class="item-extended active" id="intro-nav">Intro</li>
        <li class="item-extended" id="development-nav-extended">
          Web development
        </li>
        <li class="item-extended" id="design-nav-extended">UX design</li>
        <li class="item-extended" id="marketing-nav-extended">Marketing</li>
        <li class="item-extended" id="science-nav-extended">Science</li>
        <li class="item-extended" id="teamwork-nav-extended">Teamwork</li>
        <li class="item-extended" id="learning-nav-extended">Learning</li>
        <li class="item-extended" id="outro-nav-extended">Outro</li>
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
  methods: {
    toggleMenu(hamburerState) {
      let nav = document.getElementById("nav-extended");
      hamburerState
        ? nav.classList.add("active")
        : nav.classList.remove("active");
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
  background-color: hsla(0, 0%, 8%, 0);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
}

.nav-content {
  height: var(--7base);
  display: grid;
  grid-template-columns: min-content 1fr 3rem;
  padding: 0 var(--2base);
  z-index: 20;
}

.initals-link {
  grid-column: 1/2;
  align-self: center;
  text-decoration: none;
}

.initals {
  color: hsla(0, 0%, 0%, 100);
  padding: 0;
}

.menu-items {
  grid-column: 2/3;
  align-self: center;
  justify-self: end;
  display: grid;
}

.item {
  color: hsla(0, 0%, 0%, 100);
  font-size: var(--2base);
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.2s ease;
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: end;
  position: relative;
  z-index: 10;
}

.active {
  opacity: 1;
  transition: opacity 0.2s ease;
  z-index: 11;
}

.icon-layout {
  grid-column: 3/4;
  align-self: center;
  justify-self: end;
}

.extended-navigation {
  position: absolute;
  background-color: white;
  height: 60vh;
  width: 100%;
  z-index: 5;
  transform: translateY(calc(-100% - var(--7base)));
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
}

.active {
  transform: translateY(0%);
  transition: all 0.4s cubic-bezier(0, 0, 0.2, 1);
}

.menu-extended {
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  padding: 5rem 0;
}

.item-extended {
  grid-column: 2/3;
  color: hsla(0, 0%, 0%, 100);
  font-size: var(--2base);
  font-weight: bold;
  margin-bottom: var(--1base);
  justify-self: end;
}
</style>
