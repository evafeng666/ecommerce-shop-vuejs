import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'

//原型上添加openPage方法
Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: query || {}
  })
}

Vue.use(Router)

export default new Router({
  //linkActiveClass: 'active',//设置 链接激活时使用的 CSS 类名。(用在router-link里)默认值可以通过路由的构造选项 linkActiveClass 来全局配置
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home'
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },

    {
      path: '/home',
      name: 'home',
      //懒加载
      component: resolve => require(['@/views/home/index.vue'], resolve)
    },
    {
      path: '/classify',
      name: 'classify',
      //懒加载
      component: resolve => require(['@/views/classify/index.vue'], resolve)
    },
    {
      path: '/cart',
      name: 'cart',
      //懒加载
      component: resolve => require(['@/views/cart/index.vue'], resolve)
    },
    {
      path: '/mine',
      name: 'mine',
      //懒加载
      component: resolve => require(['@/views/mine/index.vue'], resolve)
    },
    {
      path: '/detail',
      name: 'detail',
      //懒加载
      component: resolve => require(['@/views/detail/index.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      //懒加载
      component: resolve => require(['@/views/member/login.vue'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      //懒加载
      component: resolve => require(['@/views/member/register.vue'], resolve)
    },
    {
      path: '/error/404',
      name: 'error-404',
      component(resolve){ 
        require(['@/views/error/404.vue'], resolve)
      }
    },
    {
      path: '/error/110',
      name: 'error-110',
      component(resolve){
        require(['@/views/error/110.vue'], resolve)
      }
    }
  ]
})
