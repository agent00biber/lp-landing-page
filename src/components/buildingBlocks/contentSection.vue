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
        <button
          v-if="buttonText"
          :style="{ color: `var(--${sectionID}-color)` }"
          class="content-body--button"
        >
          {{ buttonText }}
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
    alignExtraContent: {
      type: String,
      default: "right"
    }
  },
  name: "contentSection",
  data() {
    return {};
  }
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
  font-size: var(--2base);
  padding-bottom: var(--halfbase);
  background-color: var(--background-tertiary);
  padding: var(--1base);
  border: 1px solid var(--grey-600);
  max-width: 50%;
  min-width: 8rem;
}

.content-section--content-extra {
  margin-top: var(--1base);
  grid-column: 2/3;
  min-height: 30vh;
  border: 1px solid var(--grey-600);
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
    height: 70vh;
  }
  .content-extra-left .content-section--content-body {
    grid-column: 4/5;
    grid-row: 1/2;
  }
  .content-extra-left .content-section--content-extra {
    grid-column: 2/4;
    height: 70vh;
    grid-row: 1/2;
  }
}
</style>
