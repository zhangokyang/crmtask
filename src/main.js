import Vue from 'vue'
import App from './App'
import router from './router'//自动扫描里面的路由配置
import axios from "axios";
import ElementUI from 'element-ui';//导入elementui
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);//使用elementui
/* eslint-disable no-n ew */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
axios({
  url:'http://123.207.32.32:8000/home/multidata',
  method:'get'
}).then(res=>{
  console.log(res);
})
