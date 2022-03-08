<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family:Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}
*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    scrollbar-width:none;
  }
  html{
    scrollbar-width:none;
  }
  body::-webkit-scrollbar{
    display: none;
  }
</style>
