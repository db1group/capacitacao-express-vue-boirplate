import { createRouter, createWebHistory } from 'vue-router';
import { LoginModule } from '../modules/login/login-router';
import { ContactModule } from '../modules/contact-list/contact-router';
import { DashbordModule } from '../modules/dashboard/dashboard-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [...LoginModule, ...ContactModule, ...DashbordModule],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const publicRoutesName = ['login', 'change-password'];
  const isPublicRoute = publicRoutesName.includes(to?.name);
  if (isPublicRoute) {
    next();
  } else if (!isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
