import Vue from 'vue'
import App from './App.vue'
import Notice from './components/notice/index';
//全局注册通知组件
Vue.use(Notice);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
