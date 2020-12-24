<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <a href="https://www.baidu.com">百度http://www.baidu.com</a>
    <a href="https://www.baidu1.com">百度http://www.baidu.com</a>
    <a href="https://www.baidu2.com">百度http://www.baidu.com</a>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    // console.log(document.getElementsByTagName('a'))
    let aTags = document.getElementsByTagName('a')
    aTags.forEach(item => {
      item.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()
        console.log(event)
        console.log('测试')
        console.log(event.srcElement.href)
      })
    });
    
  },
  methods: {
  }
}
</script>
