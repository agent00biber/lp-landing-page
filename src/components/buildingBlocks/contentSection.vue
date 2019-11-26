<template>
  <section
    :class="[
      alignExtraContent === 'left'
        ? 'content-extra-left'
        : 'content-extra-right',
      'content-section'
    ]"
  >
    <div class="content-section--content-body">
      <h2 class="content-body--headline">
        {{ headline }}
      </h2>

      <div class="content-body--text-wrapper">
        <p class="content-body--text">{{ text }}</p>
        <button v-if="buttonText" class="content-body--button">
          <a v-if="buttonLink" :href="buttonLink" rel="noopener noreferrer">
            {{ buttonText }}</a
          >
          <a v-else> comming soon</a>
        </button>
      </div>
    </div>

    <div class="content-section--content-extra">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    headline: String,
    text: String,
    sectionID: String,
    buttonText: String,
    buttonLink: String,
    alignExtraContent: {
      type: String,
      default: "right"
    }
  },
  name: "contentSection"
};
</script>

<style scoped>
.content-section {
  display: grid;
  grid-template-columns: 5vw 1fr 5vw;
  grid-auto-rows: min-content;
  padding: 15vh 0;
  grid-row-gap: var(--row-gap);
  background-color: var(--background-tertiary);
  border-top: 1px solid var(--grey-600);
}

@media (min-width: 45em) {
  .content-section {
    grid-template-columns: 5vw 1fr 1fr 5vw;
    grid-column-gap: var(--row-gap);
  }
}

@media (min-width: 70em) {
  .content-section {
    grid-template-columns: 5vw 1fr 1fr 1fr 5vw;
    grid-column-gap: var(--row-gap);
  }
}

.content-section--content-body {
  grid-column: 2/3;
  align-self: end;
  display: grid;
  grid-row-gap: var(--row-gap);
}

.content-body--headline {
  font-size: var(--4base);
  padding: 0;
}

.content-body--text-wrapper {
  display: grid;
  grid-row-gap: var(--halfbase);
}

.content-body--text {
  font-size: var(--2base);
}

.content-body--button {
  position: relative;
  overflow: hidden;
  font-size: var(--1base);
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: var(--halfbase);
  background-color: var(--background-tertiary);
  color: var(--white);
  padding: var(--2base);
  border: 1px solid var(--grey-600);
  max-width: 60%;
  min-width: 8rem;
}

.content-body--button:active {
  transform: translateY(0.1rem);
}

.content-body--button:after {
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background-color: var(--frontend-color);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

.content-body--button:focus:not(:active):after {
  animation: ripple 0.5s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(30, 20);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(80, 40);
  }
}

.content-section--content-extra {
  margin-top: var(--1base);
  grid-column: 2/3;
  min-height: 30vh;
  border: 1px solid var(--grey-600);
  overflow: hidden;
}

@media (min-width: 45em) {
  .content-extra-right .content-section--content-body {
    grid-column: 2/3;
  }
  .content-extra-right .content-section--content-extra {
    grid-column: 3/4;
  }
  .content-extra-left .content-section--content-body {
    grid-column: 3/4;
    grid-row: 1/2;
  }
  .content-extra-left .content-section--content-extra {
    grid-column: 2/3;
    grid-row: 1/2;
  }
}

@media (min-width: 70em) {
  .content-extra-right .content-section--content-body {
    grid-column: 2/3;
  }
  .content-extra-right .content-section--content-extra {
    grid-column: 3/5;
    min-height: 50vh;
  }
  .content-extra-left .content-section--content-body {
    grid-column: 4/5;
    grid-row: 1/2;
  }
  .content-extra-left .content-section--content-extra {
    grid-column: 2/4;
    min-height: 50vh;
    grid-row: 1/2;
  }
}
</style>
