import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

window.addEventListener('routerChange', (e) => {
  console.log('sssssss')
})

window.routerChange = (e) => {
  console.log('sssssasdasd')
  console.log(e)
}

router.beforeEach((to, from, next) => {
  // let performance = window.performance
  // if (!performance) {
  //   // 当前浏览器不支持
  //   console.log('你的浏览器不支持 performance 接口');
  //   return;
  // }
  // let times = performance.timing.toJSON()
  // console.log(times)
  // // 资源耗时
  // console.log(performance.getEntries())
  // // 浏览器内存情况 usedJSHeapSize表示所有被使用的js堆栈内存；totalJSHeapSize表示当前js堆栈内存总大小，这表示usedJSHeapSize不能大于totalJSHeapSize，如果大于，有可能出现了内存泄漏。
  // console.log(performance.memory)
  /* eslint-disable */
  // routerChange(to)
  next()
})

Vue.use(VueRouter)


export default router
