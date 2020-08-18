import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/less/main.less'
import draggableCom from "@/components/mains/draggable/draggable.vue";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.component('draggableCom', draggableCom)
// import 
Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
