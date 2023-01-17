<template>
  <v-col
    class="d-flex px-6 px-md-12"
    style="flex-direction: column; justify-content: space-evenly"
    cols="12"
    md="11"
  >
    <div>
      <p class="project-title-text">Sobre o projeto:</p>
      <p class="project-text pt-4 pl-md-2">
        O projeto Roster-Bot surgiu como parte do artigo
        <span class="project-special-text">
          "Roster Bot - Estudo de inovações trazidas a sociedade através de
          chatbots"</span
        >, com o intuito de utilizar o bot desenvolvido para exemplificar aos
        leitores do que se tratava a tecnologia "ChatBot" e quais benefícios ela
        podia trazer para suas vidas.
      </p>
    </div>
    <div class="pb-18">
      <p class="project-title-text pt-6">Documentos:</p>
      <v-row>
        <v-col cols="11" md="6" class="pt-4 pl-7">
          <v-row class="mt-2">
            <a
              href="https://github.com/MateusZucco/Roster-Bot"
              class="project-link-text d-flex f-column"
              target="_blank"
            >
              <v-icon large color="white">mdi-github</v-icon>
              <p class="pl-4 pt-1">Repositório do Roster Bot</p>
            </a>
          </v-row>
          <v-row class="mt-6">
            <a
              href="https://github.com/MateusZucco/Roster-Bot-Api"
              class="project-link-text d-flex f-column"
              target="_blank"
            >
              <v-icon large color="white">mdi-github</v-icon>
              <p class="pl-4 pt-1">Repositório da API do Roster Bot</p>
            </a>
          </v-row>
          <v-row class="mt-6">
            <a
              href="https://github.com/MateusZucco/Roster-Bot-WebSite"
              class="project-link-text d-flex f-column"
              target="_blank"
            >
              <v-icon large color="white">mdi-github</v-icon>
              <p class="pl-4 pt-1">Repositório do WebSite do Roster Bot</p>
            </a>
          </v-row>
          <v-row class="mt-6">
            <a
              href="https://drive.google.com/file/d/1dh6g6QjgDfYu77bDytFKdcquBgTlon0M/view?usp=sharing"
              class="project-link-text d-flex f-column"
              target="_blank"
            >
              <v-icon large color="white">mdi-file-pdf-box</v-icon>
              <p class="pl-4 pt-1">Artigo do projeto</p>
            </a>
          </v-row>
          <v-row class="mt-6">
            <a
              href="https://docs.google.com/presentation/d/1m359lw0VsycoPna3mJDCsBa5qeRwohXyMaokBHQUdlk/edit?usp=sharing"
              class="project-link-text d-flex f-column"
              target="_blank"
            >
              <v-icon large color="white">mdi-presentation</v-icon>
              <p class="pl-4 pt-1">Apresentação final do projeto</p>
            </a>
          </v-row>
          <v-row class="mt-6">
            <a
              href="https://docs.google.com/presentation/d/13tmMcK9fo01dU3uuNeCgAdOdZQjWAh3apVZs80MtBGc/edit?usp=sharing"
              class="project-link-text d-flex f-column"
              target="_blank"
            >
              <v-icon large color="white">mdi-newspaper-variant</v-icon>
              <p class="pl-4 pt-1">Seminário de andamento do projeto</p>
            </a>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col v-if="$screenSize > 960" cols="11" md="5">
          <v-img :src="mySvg" />
        </v-col>
      </v-row>
    </div>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      mySvg: require("../assets/links_img.svg"),
    };
  },
};
</script>
<style>
/* fonts */
.project-title-text {
  color: var(--font-primary);
  font-family: "primary";
  font-size: 26px;
  line-height: 28px;
  letter-spacing: 0.04em;
}

.project-text,
.project-special-text {
  font-family: "secundary";
  text-align: justify;
}
.project-text {
  color: var(--font-primary);
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.03em;
}
.project-link-text,
.project-special-text {
  font-size: 21px;
  line-height: 25px;
  text-decoration: none;
  font-style: normal;
  letter-spacing: 0.02em;
}
.project-special-text {
  color: var(--secundary) !important;
}
.project-link-text {
  color: var(--font-primary) !important;
}
</style>