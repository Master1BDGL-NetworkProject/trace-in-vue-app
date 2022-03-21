<template>
  <div ref="menu" class="menu">
      <icon-image v-on:dark="handle()" :el="index" :bool="bool" :class="index" :key="index" v-for="(icon,index) in icon" :dataIcon="icon"></icon-image>
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
        this.handleMenu()
    },
    data(){
        return{
            verif:false,
            icon:{
                ping:{
                name:'ping',
                img:'ping.svg',
                state:'pingState',
                },
                traceroute:{
                name:'trace',
                img:'traceroute.svg',
                state:'traceState',
                },
                moon:{
                name:'moon',
                img:'moon.svg',
                moonImg:'moon.svg',
                sunImg:'sun.svg',
                },
                about:{
                name:'about',
                img:'about.svg',
                state:'aboutState',
                },
            },
        }
    },
    methods:{
        handleMenu(){
            this.bus.on('MENU',()=>{
                if(this.verif==false){
                    this.$refs.menu.style.transform='translateX(0px)';
                    this.$refs.menu.style.boxShadow='0px 0px 10px rgb(143, 143, 143)'
                    this.verif=true
                }else{
                    this.$refs.menu.style.transform='translateX(-65px)';
                    this.$refs.menu.style.boxShadow='initial'
                    this.verif=false
                }
            })
        },
        handle(){
            if(this.verif==false){
                this.Dark()
            }else{
                this.light()
            }
        },
        Dark(){
            this.icon.moon.img=this.icon.moon.sunImg
            this.verif=true
        },
        light(){
            this.icon.moon.img=this.icon.moon.moonImg
            this.verif=false
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu{
        @media (max-width:800px) {
            transform: translateX(-65px);
            transition: transform 1s ease-out;
            // box-shadow: 0px 0px 10px rgb(143, 143, 143);
        }
        background-color:whitesmoke;
        height: 100%;
        width: 65px;
        position: absolute;
        left: 0;
        justify-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        .about{
            position: absolute;
            bottom: 10px;
            left: 0;
            right:0;
            &:hover{
            background-color: rgb(240, 239, 239);
            }
        }
        .moon{
            position: absolute;
            bottom:65px;
            left: 0;
            right:0;
            &:hover{
            background-color: rgb(240, 239, 239);
            }
        }
        .ping{
            @media (max-width:800px) {
                margin-top: 30px;
            }
            margin-bottom: 10px;
        }
    }
</style>