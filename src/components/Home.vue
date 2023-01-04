<template>
  <v-col cols="11" class="mb-12 d-flex">
    <v-col class="svg-box" cols="12" md="5">
      <v-img :src="mySvg" />
    </v-col>
    <v-spacer></v-spacer>
    <v-col class="text-box" cols="12" md="6">
      <p class="home-title-text">
        Bem vindo ao <span class="home-special-title-text">Roster Bot!</span>
      </p>
      <p class="pt-12 home-text">
        Aqui você encontrará tudo a respeito deste Chatbot desenvolvido por
        <a
          href="https://github.com/MateusZucco"
          class="home-special-text"
          target="_blank"
          >Mateus Zucco</a
        >
        em seu trabalho de conclusão de curso, pelo
        <a
          href="https://ifrs.edu.br/farroupilha/"
          class="home-special-text"
          target="_blank"
          >IFRS - Campus Farroupilha</a
        >.
      </p>
      <p class="pt-6 home-text">
        Atualmente o Roster-Bot encontrasse hospedado na plataforma
        <a
          href="https://web.telegram.org"
          class="home-special-text"
          target="_blank"
          >Telegram</a
        >, disponivel clickando no
        <a class="home-special-text" target="_blank" href="">link</a>.
      </p>
      <p class="pt-6 home-text">
        Para possuir acesso ao Bot é necessário realizar o cadastro no site,
        através da aba <a class="home-special-text" @click="$emit('changeScreen')">cadastre-se</a>
      </p>
    </v-col>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      mySvg: require("../assets/home_img.svg"),
    };
  },
};
</script>
<style>
/* flex-boxes */
.svg-box {
  align-items: center;
  justify-content: center;
  display: flex;
}
.text-box {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

/* fonts */
.home-title-text,
.home-special-title-text {
  font-family: "primary";
}
.home-title-text {
  color: var(--font-primary);
  font-size: 34px;
  line-height: 36px;
  letter-spacing: 0.04em;
}
.home-special-title-text {
  color: var(--secundary);
  font-size: 37px;
  line-height: 40px;
  letter-spacing: 0em;
}

.home-text,
.home-special-text {
  font-family: "secundary";
  text-align: justify;
}
.home-text {
  color: var(--font-primary);
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.01em;
}
.home-special-text {
  color: var(--secundary) !important;
  font-size: 24px;
  line-height: 26px;
  text-decoration: none;
  font-style: normal;
  letter-spacing: 0em;
}
</style>