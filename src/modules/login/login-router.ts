const AuthApp = () => import('./Auth.vue');
const LoginApp = () => import('./components/login-form.vue');
const ChangePassword = () =>
  import('./components/change-password.component.vue');

export const LoginModule = [
  {
    path: '/auth',
    name: 'login-home',
    component: AuthApp,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginApp,
      },
      {
        path: 'change-password',
        name: 'change-password',
        component: ChangePassword,
      },
    ],
  },
];
