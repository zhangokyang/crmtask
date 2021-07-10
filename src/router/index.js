// import _import from "../utils/import";
import Vue from 'vue'
import Router from 'vue-router'
import main from "../views/main";
import Student from "../views/student/student"
import notfound from "../views/notfound";
Vue.use(Router)//使用路由

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/index',
      name: 'index',
      component: ()=>import('../views/index')
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: ()=>import('../views/userInfo')
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
        {
          path:'/student',
          name:'Student',
          component:Student
        }
      ]
    },
    {
      path:'*',//上面没有匹配，就匹配这个
      name:'notfound',
      component:notfound
    }
  ]
})
