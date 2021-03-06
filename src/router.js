import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Checkout from './views/Checkout.vue';
import Product from './views/Product.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
  ],
});
