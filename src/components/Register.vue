<template>
  <v-col cols="12" class="align-center mb-12 d-md-flex register-box">
    <v-col md="5" cols="12">
      <v-form
        style="
          min-height: 500px;
          max-height: 600px;
          max-width: 550px;
          background: var(--details);
          border-radius: 25px;
          box-shadow: 14px 14px 15px -4px #0010ff;
          align-items: center;
          display: flex;
          flex-direction: column;
        "
        ref="form"
        @submit="registerNewUser"
      >
        <p class="title-register-family">Registre-se</p>
        <v-text-field
          rounded
          style="padding-top: 25px !important"
          v-model="name"
          label="Nome completo"
          hide-details
          placeholder="Nome e Sobrenome"
          class="register-fields"
          background-color="var(--font-primary)"
          dense
          outlined
          depressed
        ></v-text-field>
        <v-text-field
          rounded
          v-model="email"
          hide-details
          label="Email"
          placeholder="nome@email.com"
          class="register-fields"
          background-color="var(--font-primary)"
          dense
          outlined
          depressed
        ></v-text-field>
        <v-text-field
          rounded
          v-model="phone"
          hide-details
          label="Telefone"
          v-mask="'(##) # ####-####'"
          placeholder="(99) 9 9999-9999"
          class="register-fields"
          background-color="var(--font-primary)"
          dense
          outlined
          depressed
        ></v-text-field>
        <v-text-field
          rounded
          v-model="telegramId"
          hide-details
          label="Telegram id"
          placeholder="1234567890"
          class="register-fields"
          background-color="var(--font-primary)"
          dense
          outlined
          depressed
          append-icon="mdi-help-circle-outline"
          @click:append="openTutorial"
        >
        </v-text-field>
        <v-text-field
          rounded
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.min]"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          v-model="password"
          label="Senha"
          class="register-fields"
          background-color="var(--font-primary)"
          dense
          outlined
          depressed
        ></v-text-field>
        <p v-if="!!message && message.length > 1">
          {{ message }}
        </p>
        <v-btn
          :disabled="canSend"
          @click="registerNewUser"
          class="mb-5 px-16"
          color="var(--tertiary)"
          href="#"
          style="height: 45px"
          rounded
          small
          placeholder="********"
          depressed
        >
          <p class="send-register-buttons-text">Enviar</p>
        </v-btn>
      </v-form>
    </v-col>
    <v-spacer></v-spacer>
    <v-col md="6" cols="12" class="d-flex flex-column justify-center">
      <p class="register-text pt-4 pt-md-0">
        Após registrar-se entre em seu aplicativo Telegram e busque por
        <span class="register-special-text">@RosterBot</span>, selecione-o e
        clique em iniciar. (Caso não apareça o botão de iniciar, você deverá
        digitar o comando "/start", para que assim o bot começe a funcionar)
      </p>
      <p class="register-text pt-8 pb-12 pb-md-16">
        Você irá logar com sua senha e assim nossos serviços estarão disponíveis
        para você. Bom uso!
      </p>
    </v-col>
  </v-col>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      phone: "",
      telegramId: "",
      password: "",
      email: "",
      message: "",
      showPassword: false,
      rules: {
        // required: (value) => !!value || "Campo necessário.",
        min: (v) => v.length >= 8 || "Mínimo 8 caracteres",
      },
    };
  },
  computed: {
    canSend() {
      if (
        !!this.name &&
        this.name.length > 0 &&
        !!this.email &&
        this.email.length > 0 &&
        !!this.phone &&
        this.phone.length > 0 &&
        !!this.password &&
        this.password.length >= 8
      ) {
        return false;
      }
      return true;
    },
  },
  methods: {
    openTutorial() {
      window.open("https://www.alphr.com/find-chat-id-telegram/", "_blank");
    },
    async success() {
      this.$refs.form.reset();
      window.open("https://web.telegram.org/k/#@rosterhub_bot", "_blank");
      this.message = "Usuário cadastrado com sucesso!";
      await new Promise((r) => setTimeout(r, 3000));
      this.message = "";
    },
    async registerNewUser() {
      axios
        .post("http://localhost:3030/new-user", {
          telegramId: this.telegramId,
          name: this.name,
          password: this.password,
          phone: this.phone,
          email: this.email,
        })
        .then(async (response) => {
          if (response.status >= 200 && response.status < 300) {
            await this.success();
          }
          // axios
          //   .post("http://localhost:9999/callNewUser", { user: response.data })
          //   .catch(function (error) {
          //     console.log(error);
          //   });
        })
        .catch((error) => {
          console.log(error);
          this.message = error.response.data.message;
        });
    },
  },
};
</script>
<style>
/* flex-boxes */
.register-box {
  max-width: 1520px;
  align-content: center;
  max-height: calc(100vh - 75px);
}
@media screen and (max-width: 1370px) {
  .register-box {
    max-width: 1200px;
  }
}
@media screen and (max-width: 960px) {
  .register-fields {
    min-width: 85%;
  }
}

.register-fields {
  width: 75%;
  max-width: 400px;
  justify-self: center;
  padding-top: 22px !important;
  /* height: 10px; */
}

/* fonts */
.title-register-family {
  font-family: "primary";
  display: block;
  font-style: normal;
  font-size: 34px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-align: center;
  padding-top: 13px;
  color: var(--tertiary);
}
.register-text,
.register-special-text {
  font-size: 22px;
  line-height: 26px;
  font-family: "secundary";
  font-style: normal;
}
.register-text {
  color: var(--font-primary);
  font-style: normal;
  text-align: justify;
  letter-spacing: 0.01em;
}
.register-special-text {
  color: var(--secundary) !important;
  text-decoration: none;

  letter-spacing: 0em;
}
.send-register-buttons-text {
  font-family: "appBar";
  font-size: 18px;
  letter-spacing: 0.03em;
  line-height: 20px;
  font-weight: 600;
  color: var(--font-primary);
}
</style>