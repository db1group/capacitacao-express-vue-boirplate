const DashboardApp = () => import('./Dashboard.vue');

export const DashbordModule = [
  {
    path: '/dashboard',
    name: 'dashboard-home',
    component: DashboardApp,
  },
];
