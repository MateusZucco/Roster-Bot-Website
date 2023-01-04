<template>
  <v-app-bar
    elevation="0"
    fixed
    app
    color="var(--primary)"
    dark
    height="75px"
    depressed
  >
    <v-row class="px-6 app-bar-boxe">
      <div class="d-flex align-center">
        <p class="app-bar-title-text">{{ title }}</p>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          class="mr-4"
          @click="activeButton(0)"
          href="#"
          x-small
          depressed
          text
        >
          <p
            :class="{ 'app-bar-button-selected-text': screenId == 0 }"
            class="app-bar-buttons-text"
          >
            Início
          </p>
        </v-btn>
        <v-btn
          class="mr-4"
          @click="activeButton(1)"
          href="#"
          x-small
          depressed
          text
        >
          <p
            :class="{ 'app-bar-button-selected-text': screenId == 1 }"
            class="app-bar-buttons-text"
          >
            Projeto
          </p>
        </v-btn>
        <!-- <v-btn
          class="mr-4"
          @click="activeButton(2)"
          href="#"
          x-small
          depressed
          text
        >
          <p
            :class="{ 'app-bar-button-selected-text': screenId == 2 }"
            class="app-bar-buttons-text"
          >
            Manual
          </p>
        </v-btn> -->
        <v-btn
          class="mr-4"
          @click="activeButton(3)"
          href="#"
          x-small
          depressed
          text
        >
          <p
            :class="{ 'app-bar-button-selected-text': screenId == 3 }"
            class="app-bar-buttons-text"
          >
            Cadastre-se
          </p>
        </v-btn>
      </div>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  props: {
    screenId: {
      default: 0,
    },
  },
  data() {
    return {
      screenId: this.screenId,
      title: "<Roster Bot />",
    };
  },
  methods: {
    activeButton(selectedId) {
      this.$emit("changeId", selectedId);
    },
  },
};
</script>

<style>
/* App-bar */
.app-bar-title-text {
  color: var(--font-primary);
  font-family: "appBar";
  font-size: 30px;
  line-height: 32px;
  letter-spacing: 0.04em;
}
.app-bar-buttons-text,
.app-bar-special-buttons-text {
  font-family: "appBar";
  font-size: 18px;
  letter-spacing: 0.03em;
  line-height: 20px;
}
.app-bar-buttons-text {
  color: var(--font-primary);
}
.app-bar-button-selected-text {
  color: var(--secundary);
}
.app-bar-special-buttons-text {
  font-weight: 600;
  color: var(--tertiary);
}

.app-bar-special-button {
  border: 1px solid var(--tertiary);
  background: var(--details);
}
.app-bar-boxe {
  align-items: center;
  max-width: 1520px;
}

@media screen and (max-width: 1370px) {
  .app-bar-boxe {
    align-items: center;
    width: 8vw;
    max-width: 1200px;
  }
}
</style>