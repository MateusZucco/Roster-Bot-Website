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

      <v-app-bar-nav-icon v-if="$screenSize < 960" @click="drawer = true">
        <v-icon large color="white">mdi-equal</v-icon>
      </v-app-bar-nav-icon>

      <v-navigation-drawer
        right
        @click:outside="drawer = false"
        v-model="drawer"
        color="black"
        style="max-height: 100vh; height: 100vh"
        fixed
        temporary
      >
        <v-list absolute nav dense>
          <v-list-item-group>
            <v-list-item
              active-class="green--text text--accent-4"
              @click="activeButton(0)"
            >
              <v-list-item-icon>
                <v-icon
                  class="app-bar-navigation-icon"
                  large
                  :color="
                    screenId == 0 ? 'var(--details)' : 'var(--tertiary)'
                  "
                >
                  mdi-home-circle
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title
                ><p
                  :class="{ 'app-nav-selected-text': screenId == 0 }"
                  class="app-nav-buttons-text"
                >
                  Início
                </p></v-list-item-title
              >
            </v-list-item>
            <v-list-item
              active-class="green--text text--accent-4"
              @click="activeButton(1)"
            >
              <v-list-item-icon>
                <v-icon
                  class="app-bar-navigation-icon"
                  large
                  :color="
                    screenId == 1 ? 'var(--secundary)' : 'var(--tertiary)'
                  "
                >
                  mdi-robot-excited-outline
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title
                ><p
                  :class="{ 'app-nav-selected-text': screenId == 1 }"
                  class="app-nav-buttons-text"
                >
                  Projeto
                </p></v-list-item-title
              >
            </v-list-item>
            <v-list-item
              active-class="green--text text--accent-4"
              @click="activeButton(2)"
            >
              <v-list-item-icon>
                <v-icon
                  class="app-bar-navigation-icon"
                  large
                  :color="
                    screenId == 2 ? 'var(--secundary)' : 'var(--tertiary)'
                  "
                >
                  mdi-account-plus-outline
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title
                ><p
                  :class="{ 'app-nav-selected-text': screenId == 2 }"
                  class="app-nav-buttons-text"
                >
                  Registrar-se
                </p></v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <div v-if="$screenSize >= 960">
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
      // screenId: this.screenId,
      title: "<Roster Bot />",
      drawer: false,
    };
  },
  methods: {
    activeButton(selectedId) {
      console.log(selectedId)
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

.app-bar-buttons-text {
  font-family: "appBar";
  font-size: 18px;
  letter-spacing: 0.03em;
  line-height: 20px;
}
.app-bar-buttons-text {
  color: var(--font-primary);
}

.app-nav-buttons-text {
  color: var(--tertiary);
}
.app-nav-buttons-text,
.app-nav-selected-text {
  font-family: "appBar";
  font-size: 22px;
  letter-spacing: 0.04em;
  line-height: 28px;
}

.app-bar-button-selected-text {
  color: var(--secundary);
}
.app-nav-selected-text{
  color: var(--details);
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