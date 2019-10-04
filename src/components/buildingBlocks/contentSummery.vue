<template>
  <section class="content-summery">
    <h2 class="content-summery--headline">
      {{ headline }}
    </h2>
    <p class="content-summery--text">
      {{ text }}
    </p>

    <div class="content-summery-wrapper">
      <p class="content-summery-wrapper--table-of-content"><b>Content</b></p>
      <ul class="content-summery--projects">
        <li
          class="content-summery--projects__project content-summery--projects__project1"
          v-for="content in summeryContent"
        >
          <h3 class="project--headline">{{ content.headline }}</h3>
          <p class="project--text">
            {{ content.text }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    headline: String,
    text: String,
    sectionID: String,
    summeryContent: Array
  },
  name: "contentSummery",
  data() {
    return {};
  }
};
</script>

<style scoped>
.content-summery {
  display: grid;
  grid-template-columns: 5vw 1fr 5vw;
  grid-template-rows: 15vh repeat(3, min-content) 15vh;
  grid-row-gap: var(--row-gap);
  background-color: var(--background-tertiary);
  border-top: 1px solid var(--grey-600);
}

@media (min-width: 45em) {
  .content-summery {
    grid-template-columns: 5vw 1fr 1fr 5vw;
    grid-template-rows: 7.5vh repeat(3, min-content) 7.5vh;
  }
}

@media (min-width: 70em) {
  .content-summery {
    grid-template-columns: 5vw 1fr 2fr 5vw;
    grid-template-rows: 15vh repeat(2, min-content) 15vh;
    grid-column-gap: 5vw;
  }
}

.content-summery--headline {
  grid-column: 2/3;
  grid-row: 2/3;
  font-size: var(--4base);
}

.content-summery--text {
  grid-column: 2/3;
  grid-row: 3/4;
  font-size: var(--2base);
}

.content-summery-wrapper {
  grid-column: 2/3;
  grid-row: 4/5;
}

.content-summery-wrapper--table-of-content {
  margin-bottom: var(--thirdbase);
}

.content-summery--projects {
  background-color: var(--background-tertiary);
  border: 1px solid var(--grey-600);
  padding: 5vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--5base);
}

@media (min-width: 45em) {
  .content-summery-wrapper {
    grid-column: 2/4;
  }
  .content-summery--projects {
    padding: 3vw;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: var(--5base);
  }
}

@media (min-width: 70em) {
  .content-summery--headline {
    grid-column: 2/3;
    grid-row: 2/3;
    align-self: end;
  }

  .content-summery--text {
    grid-column: 2/3;
    grid-row: 3/4;
  }

  .content-summery-wrapper {
    grid-column: 3/4;
    grid-row: 3/4;
  }

  .content-summery-wrapper--table-of-content {
    display: none;
  }
  .content-summery--projects {
    border: 1px solid var(--background-tertiary);
    padding: 0vw;
    grid-column-gap: 5vw;
  }
}

.content-summery--projects__project {
  text-decoration: none;
}

.project--headline {
  font-size: var(--3base);
}

.project--text {
  font-size: var(--2base);
}

@media (min-width: 70em) {
  .project--headline {
    font-size: var(--2base);
  }

  .project--text {
    font-size: var(--2base);
  }
}
</style>
