<template>
  <div class="notification">
    <div class="notification--color"></div>
    <p class="notification--title">Messages</p>
    <p class="notification--time">{{ time }}</p>
    <h4 class="notification--sender">{{ sender }}</h4>
    <p class="notification--message">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    time: String,
    sender: String,
    message: String
  },
  name: "notification"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap");

.notification {
  display: grid;
  grid-template-columns: min-content 1fr 1fr;
  grid-template-rows: min-content 3rem min-content;
  grid-column-gap: var(--thirdbase);
  padding: var(--1base);
  background-color: var(--grey-500);
  border-radius: 0.75rem;
  min-width: 15rem;
  min-height: 9rem;
  font-family: "Montserrat", sans-serif;
}

@media (min-width: 22.5em) and (max-width: 44.9em) {
  .notification {
    grid-template-columns: min-content 2fr 1fr;
    grid-template-rows: min-content 3rem min-content;
    grid-column-gap: var(--thirdbase);
    padding: var(--1base);
  }
}

@media (min-width: 70em) {
  .notification {
    grid-template-columns: min-content 3fr 1fr;
    grid-template-rows: min-content 3rem min-content;
    grid-column-gap: var(--thirdbase);
    padding: var(--2base);
    width: 25rem;
  }
}

.notification--color {
  grid-column: 1/2;
  grid-row: 1/2;
  background-image: linear-gradient(180deg, #36cef9 0%, #279df4 100%);
  border-radius: 0.4rem;
  width: 1.25rem;
  height: 1.25rem;
}

.notification--title {
  grid-column: 2/3;
  grid-row: 1/2;
  font-weight: 300;
}

.notification--time {
  grid-column: 3/4;
  grid-row: 1/2;
  justify-self: end;
}

.notification--sender {
  grid-column: 1/4;
  grid-row: 2/3;
  align-self: end;
  font-weight: 700;
  font-size: var(--1base);
  padding-bottom: var(--thirdbase);
}

.notification--message {
  grid-column: 1/4;
  grid-row: 3/4;
}
</style>
