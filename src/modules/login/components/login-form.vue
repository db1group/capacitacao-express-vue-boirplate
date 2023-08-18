<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-card>
        {{ userStore.isLogged }}
        {{ userStore.email }}
        <v-card-title class="text-center">Login</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
            ></v-text-field>
            <v-btn type="submit" color="primary">Login</v-btn>
            <v-btn variant="text" @click="goToChangePassword" color="primary"
              >Esqueci minha senha</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import useUserStore from '../../../store/user-store';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    login() {
      if (!this.email || !this.password) return;
      this.userStore.setIsAuthentication(true);
      this.userStore.setUserEmail(this.email);
      localStorage.setItem('token', '123');
      this.$router.push({ name: 'contact-home' });
    },
    goToChangePassword() {
      this.$router.push({ name: 'change-password' });
    },
  },
};
</script>
