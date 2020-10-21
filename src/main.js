import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Monitor from './utils/index'
/* eslint-disable */
let monitor = new Monitor({
  monitorBaseUrl: "http://localhost:9001",
  monitorTimeout: 5000
})

Vue.config.productionTip = false

import { getConfig } from './utils/api/logApi'

Vue.config.performance = true

// setTimeout(() => {
//   getConfig()
// }, 1000)
// setTimeout(() => {
//   getConfig()
// }, 2000)
// setTimeout(() => {
//   getConfig()
// }, 3000)

// js 报错监控测试
// setTimeout(() => {
//   console.log(ss)
// }, 3000)

// setTimeout(() => {
//   fetch('http://www.guaishou.com/applet/text/charge')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (myJson) {
//       console.log(myJson);
//     });
// }, 3000)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
