const ContactApp = () => import('./Contacts.vue');

export const ContactModule = [
  {
    path: '/',
    name: 'contact-home',
    component: ContactApp,
  },
];
