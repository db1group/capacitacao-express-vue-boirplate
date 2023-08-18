import { defineStore } from 'pinia';

const USER_STORE = 'user';

const useUserStore = defineStore(USER_STORE, {
  state: () => ({
    email: '',
    isAutenticated: false,
  }),
  getters: {
    isLogged: (state) => state.isAutenticated,
  },
  actions: {
    setIsAuthentication(isAutenticated: boolean) {
      this.isAutenticated = isAutenticated;
    },
    setUserEmail(email: string) {
      this.email = email;
    },
  },
});

export default useUserStore;
