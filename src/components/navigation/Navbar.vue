<template>
  <nav class="navbar" id="nav">
    <p>Link</p>
  </nav>
</template>

<script>
export default {
  components: {},
  name: "navBar"
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  height: var(--7base);
  background-color: hsla(0, 0%, 8%, 0);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.05);
}
</style>
