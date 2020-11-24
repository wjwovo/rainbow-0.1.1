import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Rainbow from './Rainbow.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Affix from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Affix);

new Vue({
  el: '#rainbow',
  router,
  store,
  render: h => h(Rainbow)
}).$mount('#rainbow')
