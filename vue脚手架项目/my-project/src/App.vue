<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: { Home },
  data(){
    return {
      msg: '这是我的Vue脚手架项目',
    }
  }
}
</script>

<style>
#app {

  text-align: center;
  
}
</style>
