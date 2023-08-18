import { createApp } from 'vue';
import './style.css';
import vuetify from './plugins/vuetify';
import applicationStore from './store/store';
import applicationRouter from './router/application-router';
import App from './App.vue';

createApp(App)
  .use(vuetify)
  .use(applicationStore)
  .use(applicationRouter)
  .mount('#app');
