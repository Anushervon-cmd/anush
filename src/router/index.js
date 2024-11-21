import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StandartView from '../views/StandartView.vue';
import PremiumView from '../views/PremiumView.vue';
import GoldView from '../views/GoldView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/standart',
      name: 'standart',
      component: StandartView,
    },
    {
      path: '/premium',
      name: 'premium',
      component: PremiumView,
    },
    {
      path: '/gold',
      name: 'gold',
      component: GoldView,
    },
  ],
});
