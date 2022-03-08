<template>
  <div class="home">
    <Menu></Menu>
    <div class="wrapper">
      <div class="text">
        <h1>Faites votre choix</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Voluptates explicabo nihil ex magni asperiores at.
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
import protocol from '../components/protocol.vue'
import Menu from '../components/Menu.vue'

export default {
    name:'home',
    components:{
      protocol,
      Menu
    },
    data(){
      return{
          ping:{
            img:'ping.svg',
            title:'Ping',
            paragraph:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum.'
          },
          traceRoute:{
            img:'traceroute.svg',
            title:'Traceroute',
            paragraph:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum.'
          }
      }
    },
    methods:{
      goPing:function(){
        this.$router.push('/ping')
      },
      goTraceRoute:function(){
        this.$router.push('/trace-route')
      }
    }
}
</script>

<style lang="scss" scoped >
  .home{
    background-color:whitesmoke;
    width: 100%;
    height: 100%;
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
        // grid-column-gap: 2rem;
      }
    }
  }
</style>