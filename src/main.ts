import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import App from './App.vue';
import './index.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./components/Frank.vue'),
    },
    {
      path: '/frank2',
      component: () => import('./components/Frank2.vue'),
    },
  ],
});

createApp(App).use(router).mount('#app');
