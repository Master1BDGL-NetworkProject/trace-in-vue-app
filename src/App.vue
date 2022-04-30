<template>
  <div class="app">
    <router-view></router-view>
    <Modal v-if="about"></Modal>
    <div v-if="!internet" class="internet-modal">
      <div class="content">
        <div class="image">
          <img src="./assets/error.jpg" alt="">
        </div>
        <div @click="checkInternet" class="try-btn">
          <span>Try again</span>
        </div>
      </div>
    </div>
  </div>
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
      internet:false
    }
  },
  async created(){
    let response= await fetch('faceboook.com')
    console.log(response)
    this.internet=response.ok
  },
  mounted(){
    this.handleModal()
    this.outsideClick()
    this.close()
  },
  methods:{
    async checkInternet(){
      let response= await fetch('facebook.com')
      this.internet=response.ok
      if(!this.internet){
        location.reload();
      }
    },
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
.try-btn{
  cursor: pointer;
  background: white;
  padding: 30px 60px;
  border-radius: 56px;
  font-size: 30px;
  font-weight: 600;
  align-self: self-start;
}
.try-btn:hover{
  background: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  color: white;
}
.internet-modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.7);
}
.internet-modal .content{
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.content .image{
  align-self: self-end;
  margin-bottom: 60px;
}
.content .image img{
  width: 60%;
  height: auto;
  object-fit: cover;
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
