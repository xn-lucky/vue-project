import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './styles/reset.css';
import "swiper/swiper-bundle.min.css";
import './styles/iconfont.css'
import './plugins/element.js'
import './plugins/lazyload.js'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
		// 初始化全局事件总线对象
		Vue.prototype.$bus = this;
	},
  render: h => h(App),
  store,
  router
}).$mount('#app')
