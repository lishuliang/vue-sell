import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../components/goods/goods.vue'
import seller from '../components/seller/seller.vue'
import ratings from '../components/ratings/ratings.vue'


Vue.use(VueRouter);


const routes = [
  { path: '/', redirect: '/goods' }, /*默认跳转路由*/
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller },

];

const router = new VueRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes // (缩写) 相当于 routes: routes
});

export default router
