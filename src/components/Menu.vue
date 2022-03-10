<template>
  <div class="menu">
      <icon-image  class="about" :dataIcon="about"></icon-image>
      <icon-image class="moon" :dataIcon="moon"></icon-image>
      <div ref="state" class="protocol">
        <icon-image class="protocol-icon" v-on:click="goProtocol(index)" :key="index" v-for="(protocol,index) in mydataIcon" :dataIcon="protocol"></icon-image>
      </div>
  </div>
</template>

<script>
import iconImage from './icon.vue'
export default {
    name:'Menu',
    components:{
        iconImage
    },
    props:{
        mydataIcon:Object,
        bool:String,

    },
    mounted(){
        if(this.bool=='ping'){
            this.addPingState()
        }
        if(this.bool=='trace'){
            this.addTraceState()
        }
    },
    data(){
        return{
            moon:{
                img:'moon.svg'
            },
            sun:{
                img:'sun.svg'
            },
            about:{
                img:'about.svg'
            }
        }
    },
    methods:{
        goProtocol(i){
            if(i=='ping'){
                this.$router.push('/ping')
            }
            else{
                this.$router.push('/trace-route')
            }
            console.log(i)
        },
        addPingState(){
            console.log(this.mydataIcon)
            this.$refs.state.classList.add(this.mydataIcon.ping.state)
            this.$refs.state.classList.remove(this.mydataIcon.traceroute.state)
        },
        addTraceState(){
            this.$refs.state.classList.add(this.mydataIcon.traceroute.state)
            this.$refs.state.classList.remove(this.mydataIcon.ping.state)
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu{
        background-color:whitesmoke;
        height: 100%;
        width: 65px;
        position: absolute;
        left: 0;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-left: 1rem;
        .about{
            position: absolute;
            bottom: 10px;
            transition: background-color 700ms ease;
            &:hover{
            background-color: rgb(240, 239, 239);
        }
        }
        .moon{
            position: absolute;
            bottom:110px;
            transition: background-color 700ms ease;
            &:hover{
            background-color: rgb(240, 239, 239);
        }
        }
        .protocol{
            .protocol-icon{
                transition: background-color 700ms ease;
                &:hover{
                    background-color: rgb(240, 239, 239)    ;
                }
            }
        }
    }
    .pingState{
        .protocol-icon{
            &:first-child{
                background-color: #e0f2ff;
                margin-bottom: 15px;
                &:hover{
                    background-color: #cfe8fa;
                }       
            }
        }
    }
    .traceState{
        .protocol-icon{
            &:last-child{
                background-color: #e0f2ff;
                margin-top: 15px;
                &:hover{
                    background-color: #cfe8fa;
                }       
            }
        }
    }
</style>