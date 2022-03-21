<template>
  <router-view></router-view>
  <Modal v-if="about"></Modal>
</template>

<script>
import Modal from './components/modal.vue'
export default {
  name: 'App',
  components: {
    Modal,
  },
  data(){
    return{
      about:false,
    }
  },
  mounted(){
    this.handleModal()
    this.outsideClick()
    this.close()
  },
  methods:{
    handleModal(){
      this.bus.on('about',()=>{
        this.about=!this.about
      })
    },
    outsideClick(){
      this.bus.on('outside',()=>{
        this.about=!this.about
      })
    },
    close(){
      this.bus.on('close',()=>{
        this.about=!this.about
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'IBM Plex Sans',Helvetica,Verdana, sans-serif;
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
