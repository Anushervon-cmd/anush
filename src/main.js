import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; // автоматически настроено через vue add vuetify

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router, // подключаем роутер
  vuetify, // подключаем Vuetify
}).$mount('#app');
