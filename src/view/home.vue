<template>
  <div class="home">
    <burger class="burger"></burger>
    <Menu :bool="bool"></Menu>
    <div class="wrapper">
      <div class="text">
        <h1>Faites votre choix</h1>
        <p>
          pour chacune des function ci-dessous, clicquez sur ce dont vous avez besoin
        </p>
      </div>
      <div class="content">
        <protocol v-on:click="goPing" :mydata="ping" router ></protocol>
        <protocol v-on:click="goTraceRoute" :mydata="traceRoute"></protocol>
      </div>
    </div>
  </div>
</template>

<script>
import burger from '../components/burger.vue'
import protocol from '../components/protocol.vue'
import Menu from '../components/Menu.vue'

export default {
    name:'home',
    components:{
      protocol,
      Menu,
      burger
    },
    data(){
      return{
        menu:true,
        bool:'home',
          ping:{
            img:'ping.svg',
            title:'Ping',
            paragraph:"Permet de determiner l'etat du reseau et de divers hôtes etranger ou simplement permet de verfier l'existence d'une machine sur un reseau"
          },
          traceRoute:{
            img:'traceroute.svg',
            title:'Traceroute',
            paragraph:"Permet de connaitre de l'iteneraire empreinté par un paquet pour atteindre sa destination. Il troouvera les differentes machines intermediaire du cicuit"
          }
      }
    },
    methods:{
      goPing:function(){
        this.$router.push('/ping')
      },
      goTraceRoute:function(){
        this.$router.push('/trace-route')
      },
      handleMenu(){
        if(this.menu){
          this.handleMenuOpen()
        }
        else{
          this.handleMenuClose()
        }
      },
      handleMenuOpen(){
        this.bus.emit('open')
        this.menu=false
      },
      handleMenuClose(){
        this.bus.emit('closeM')
        this.menu=true
      }
    }
}
</script>

<style lang="scss" scoped >
  .home{
    @media (max-width:800px) {
      min-width:320px;
    }
    min-width:800px;
    background-color:whitesmoke;
    width: 100vw;
    height: 100vh;
    position: relative;
    .wrapper{
      width: 90%;
      margin: 0 auto;
      display: grid;
      place-items: center;
      .text{
        display: grid;
        place-items: center;
        padding-top: 5rem;
        max-width: 680px;
         @media (max-width:800px) {
           padding-top: 2rem;
           h1{
             font-size: 1.5rem;
           }
           p{
             font-size: 0.8rem;
           }
         }
        p{
          margin-top: .9rem;
          max-width: 500px;
        }
      }
      .content{
        margin-top: 3rem;
        width: 90%;
        max-width: 770px;
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        @media (max-width:800px) {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr;
          height: 100%;
          margin-top: 2rem;
          width: 95%;
        }
      }
    }
  }
</style>