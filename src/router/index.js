import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index.vue';
import Register from '../views/register/index.vue';
import Login from '../views/login/index.vue';
import ForgetPassword from '../views/login/forgetPassword.vue';
import Account from '../views/account/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/rigister',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/forget/password',
    name: 'forgetPassword',
    component: ForgetPassword,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
