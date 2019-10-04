<!--transition wrapper-->
<template>
  <!--single transition-->
  <transition :name="transitionName" :mode="transitionMode">
    <slot />
  </transition>
</template>

<script>
export default {
  name: "TransitionPage",
  //recieved options
  props: ["propTransitionName", "propTransitionMode"],
  data() {
    return {
      //defaults
      transitionName: "fade",
      transitionMode: "out-in"
    };
  },
  created() {
    //override the defaults
    if (this.propTransitionName) {
      this.transitionName = this.propTransitionName;
    }
    if (this.propTransitionMode) {
      this.transitionMode = this.propTransitionMode;
    }
    //check if this wrapper is used for navigation
    this.$router.beforeEach((to, from, next) => {
      const targetRoute = to.name;
      const fromRoute = from.name;
      //use left-right transitions
      if (targetRoute === "home") {
        this.transitionName = "slide-top";
      } else {
        this.transitionName = "slide-bottom";
      }
      next();
    });
  }
};
</script>

<style scoped>
/* --------slide---------*/
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.slide-top-enter-active,
.slide-top-leave-active,
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition-duration: 0.25s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(1em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-1em, 0);
}

.slide-top-enter,
.slide-bottom-leave-active {
  opacity: 0;
  transform: translate(0, 1em);
}

.slide-top-leave-active,
.slide-bottom-enter {
  opacity: 0;
  transform: translate(0, -1em);
}
</style>
