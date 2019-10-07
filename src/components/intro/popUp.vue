<template>
  <section class="popup">
    <h2 class="popup--headline">Free shipping now!</h2>
    <div class="popup--input-wrapper">
      <label for="shipping-popup" class="popup--label"
        >Enter your e-mail address for free shipping for your first
        purchase</label
      >
      <input type="text" id="shipping-popup" class="popup--input" />
    </div>

    <button class="button button-primary" @click="$emit('popupevent')">
      Continue
    </button>
    <button class="button button-secondary" @click="$emit('popupevent')">
      No thanks, I hate free stuff
    </button>
  </section>
</template>

<style scoped>
.popup {
  display: grid;
  grid-template-columns: var(--1base) 4fr 2fr var(--1base);
  grid-auto-rows: min-content;
  grid-row-gap: var(--2base);
  background-color: hsla(0, 0%, 70%, 1);
  padding: var(--1base) 0;
  border-radius: var(--fourthbase);
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);
  max-width: 35rem;
}

@media (min-width: 70em) {
  .popup {
    padding: var(--2base) 0;
    grid-template-columns: 1fr 5fr 2fr 1fr;
  }
}

.popup--headline {
  grid-column: 2/4;
  grid-row: 1/2;
  font-size: var(--4base);
  padding: 0;
  text-align: center;
  background: var(--intro-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.popup--input-wrapper {
  grid-column: 2/4;
  grid-row: 2/3;
}

.popup--label {
  font-size: var(--1base);
  font-weight: bold;
}

.popup--input {
  width: 100%;
  padding: var(--1base);
  border-radius: var(--fourthbase);
  border: none;
}

@media (min-width: 70em) {
  .popup--headline {
    padding-bottom: var(--fourthbase);
    line-height: 120%;
    font-size: var(--7base);
  }
  .popup--label {
    font-size: var(--2base);
  }
}

.button {
  border: none;
  min-height: var(--7base);
  padding: var(--thirdbase) var(--1base);
  font-size: calc(var(--1base) * 0.75);
  background-color: transparent;
  color: var(--grey-400);
  max-width: 15rem;
  font-weight: bold;
}

@media (min-width: 70em) {
  .button {
    font-size: var(--1base);
  }
}

.button:active,
.button:focus {
  outline: none;
}

.button:active {
  transform: translateY(0.1rem);
}

.button-primary {
  grid-column: 3/4;
  grid-row: 3/4;
  background-color: var(--background-tertiary);
  border-radius: var(--fourthbase);
  text-transform: uppercase;
  color: var(--white);
}

.button-secondary {
  grid-column: 2/3;
  grid-row: 3/4;
  justify-self: end;
  text-align: right;
}
</style>
