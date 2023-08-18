<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-card>
        <v-card-title class="text-center">Redefinir Senha</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="resetPassword">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-btn type="submit" color="primary"
              >Enviar Link de Redefinição</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    resetPassword() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
