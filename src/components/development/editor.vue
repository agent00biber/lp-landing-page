<template>
  <div class="editor">
    <div class="editor--headline">
      <div class="dots">
        <div class="dot red"></div>
        <div class="dot orange"></div>
        <div class="dot green"></div>
      </div>
    </div>
    <div class="editor--text-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.editor {
  height: 100%;
  width: 100%;
  background-color: var(--background-secondary);
  border-radius: var(--fourthbase);
  display: grid;
  grid-template-rows: 3rem 1fr;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
}
.editor--headline {
  border-top-left-radius: var(--fourthbase);
  border-top-right-radius: var(--fourthbase);
  display: grid;
  grid-template-columns: min-content 1fr;
}

.dots {
  grid-column: 1/2;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 var(--halfbase);
}

.dot {
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: var(--halfbase);
  background-color: var(--grey-400);
}

.active .red {
  background-color: hsla(3, 86%, 64%, 100);
}
.active .orange {
  background-color: hsla(43, 93%, 57%, 100);
}
.active .green {
  background-color: hsla(116, 56%, 52%, 100);
}

.editor--text-wrapper {
  padding: var(--2base);
  display: grid;
}
</style>
