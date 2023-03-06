<template>
  <div class="home">
    <h1>这是首页</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-button @click="delet">删除token</a-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods:{
    delet () {
      localStorage.removeItem("token")
    }
  }
}
</script>
